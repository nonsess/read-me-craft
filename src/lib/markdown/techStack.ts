import type { ReadmeState } from "@/context/ReadmeContext";

export function generateTechStackMarkdown(
  techStack: ReadmeState["techStack"],
): string {
  if (!techStack.enabled || !techStack.technologies.trim()) return "";

  const techList = techStack.technologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (techList.length === 0) return "";

  const tags = techList.map((tech) => `\`${tech}\``).join(" ");

  return `### 🛠️ Стек\n\n${tags}\n\n---`;
}
