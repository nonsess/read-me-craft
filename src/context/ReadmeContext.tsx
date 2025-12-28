"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from "react";

export type ReadmeState = {
  bio: {
    enabled: boolean;
    name: string;
    headline: string;
    description: string;
  };
  techStack: {
    enabled: boolean;
    technologies: string;
  };
  githubStats: {
    enabled: boolean;
    username: string;
    showTopLangs: boolean;
  };
  contacts: {
    enabled: boolean;
    github: string;
    email: string;
    telegram: string;
    linkedin: string;
    website: string;
  };
};

type ReadmeAction =
  | { type: "TOGGLE_BIO"; payload: boolean }
  | { type: "UPDATE_BIO"; payload: Partial<ReadmeState["bio"]> }
  | { type: "TOGGLE_TECH_STACK"; payload: boolean }
  | { type: "UPDATE_TECH_STACK"; payload: Partial<ReadmeState["techStack"]> }
  | { type: "TOGGLE_GITHUB_STATS"; payload: boolean }
  | {
      type: "UPDATE_GITHUB_STATS";
      payload: Partial<ReadmeState["githubStats"]>;
    }
  | { type: "TOGGLE_CONTACTS"; payload: boolean }
  | { type: "UPDATE_CONTACTS"; payload: Partial<ReadmeState["contacts"]> }
  | { type: "HYDRATE"; payload: ReadmeState };

const initialState: ReadmeState = {
  bio: {
    enabled: true,
    name: "Ваше имя",
    headline: "Frontend-разработчик",
    description: "Люблю чистый код и красивые интерфейсы.",
  },
  techStack: {
    enabled: true,
    technologies: "React, TypeScript, Next.js, Tailwind CSS",
  },
  githubStats: {
    enabled: false,
    username: "",
    showTopLangs: true,
  },
  contacts: {
    enabled: true,
    github: "",
    email: "",
    telegram: "",
    linkedin: "",
    website: "",
  },
};

const STORAGE_KEY = "readme_craft_draft";

function readmeReducer(state: ReadmeState, action: ReadmeAction): ReadmeState {
  switch (action.type) {
    case "HYDRATE":
      return action.payload;
    case "TOGGLE_BIO":
      return { ...state, bio: { ...state.bio, enabled: action.payload } };
    case "UPDATE_BIO":
      return { ...state, bio: { ...state.bio, ...action.payload } };
    case "TOGGLE_TECH_STACK":
      return {
        ...state,
        techStack: { ...state.techStack, enabled: action.payload },
      };
    case "UPDATE_TECH_STACK":
      return { ...state, techStack: { ...state.techStack, ...action.payload } };
    case "TOGGLE_GITHUB_STATS":
      return {
        ...state,
        githubStats: { ...state.githubStats, enabled: action.payload },
      };
    case "UPDATE_GITHUB_STATS":
      return {
        ...state,
        githubStats: { ...state.githubStats, ...action.payload },
      };
    case "TOGGLE_CONTACTS":
      return {
        ...state,
        contacts: { ...state.contacts, enabled: action.payload },
      };
    case "UPDATE_CONTACTS":
      return { ...state, contacts: { ...state.contacts, ...action.payload } };
    default:
      return state;
  }
}

const ReadmeContext = createContext<{
  state: ReadmeState;
  dispatch: React.Dispatch<ReadmeAction>;
} | null>(null);

export function ReadmeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(readmeReducer, initialState);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.bio && parsed.techStack) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch (e) {
      console.warn("Failed to restore draft from localStorage", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <ReadmeContext.Provider value={{ state, dispatch }}>
      {children}
    </ReadmeContext.Provider>
  );
}

export function useReadme() {
  const context = useContext(ReadmeContext);
  if (!context) {
    throw new Error("useReadme must be used within a ReadmeProvider");
  }
  return context;
}
