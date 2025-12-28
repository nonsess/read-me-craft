"use client";

import { useReadme } from "@/context/ReadmeContext";
import { generateBioMarkdown } from "@/lib/markdown/bio";
import { generateTechStackMarkdown } from "@/lib/markdown/techStack";
import { generateGithubStatsMarkdown } from "@/lib/markdown/githubStats";
import { generateContactsMarkdown } from "@/lib/markdown/contacts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { Card } from "@/components/ui/Card";

export function PreviewPanel() {
  const { state } = useReadme();

  const bioMd = generateBioMarkdown(state.bio);
  const techMd = generateTechStackMarkdown(state.techStack);
  const statsMd = generateGithubStatsMarkdown(state.githubStats);
  const contactsMd = generateContactsMarkdown(state.contacts);
  const fullMarkdown = [bioMd, techMd, statsMd, contactsMd]
    .filter(Boolean)
    .join("\n");

  const [viewMode, setViewMode] = useState<"preview" | "markdown">("preview");

  const renderPreview = () => {
    const elements = [];

    if (state.bio.enabled) {
      elements.push(
        <ReactMarkdown key="bio" remarkPlugins={[remarkGfm]}>
          {generateBioMarkdown(state.bio)}
        </ReactMarkdown>,
      );
    }

    if (state.techStack.enabled) {
      elements.push(
        <ReactMarkdown key="tech" remarkPlugins={[remarkGfm]}>
          {generateTechStackMarkdown(state.techStack)}
        </ReactMarkdown>,
      );
    }

    if (state.githubStats.enabled && state.githubStats.username.trim()) {
      elements.push(
        <div key="stats" className="mt-4">
          <h3 className="text-lg font-semibold text-gray-100">
            📊 GitHub Stats
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Статистика будет отображена на GitHub после публикации.
          </p>
          {state.githubStats.showTopLangs && (
            <p className="text-sm text-gray-400 mt-1">
              Также будет показан топ языков.
            </p>
          )}
        </div>,
      );
    }

    if (state.contacts.enabled) {
      const { enabled, ...contactFields } = state.contacts;
      const hasAnyContact = Object.values(contactFields).some(
        (val) => typeof val === "string" && val.trim() !== "",
      );

      if (hasAnyContact) {
        elements.push(
          <ReactMarkdown key="contacts" remarkPlugins={[remarkGfm]}>
            {generateContactsMarkdown(state.contacts)}
          </ReactMarkdown>,
        );
      }
    }

    return elements.length > 0 ? (
      elements
    ) : (
      <p className="text-gray-500 italic">Нет включённых блоков</p>
    );
  };

  return (
    <Card className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Предпросмотр</h2>
        <div className="flex bg-gray-700 rounded-md p-0.5">
          <button
            type="button"
            onClick={() => setViewMode("preview")}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
              viewMode === "preview"
                ? "bg-gray-600 text-indigo-300"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Превью
          </button>
          <button
            type="button"
            onClick={() => setViewMode("markdown")}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
              viewMode === "markdown"
                ? "bg-gray-600 text-indigo-300"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Markdown
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-[250px] overflow-hidden rounded-lg border border-gray-700">
        {viewMode === "preview" ? (
          <div className="p-4 h-full overflow-y-auto markdown-body">
            {renderPreview()}
          </div>
        ) : (
          <div className="p-4 h-full overflow-auto">
            <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono">
              {fullMarkdown || "// Нет включённых блоков"}
            </pre>
          </div>
        )}
      </div>
    </Card>
  );
}
