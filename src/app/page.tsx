"use client";

import { EditorPanel } from "@/components/builder/EditorPanel";
import { PreviewPanel } from "@/components/builder/PreviewPanel";
import { useReadme } from "@/context/ReadmeContext";
import { generateBioMarkdown } from "@/lib/markdown/bio";
import { generateTechStackMarkdown } from "@/lib/markdown/techStack";
import { generateGithubStatsMarkdown } from "@/lib/markdown/githubStats";
import { generateContactsMarkdown } from "@/lib/markdown/contacts";

export default function HomePage() {
  const { state } = useReadme();

  const bioMd = generateBioMarkdown(state.bio);
  const techMd = generateTechStackMarkdown(state.techStack);
  const statsMd = generateGithubStatsMarkdown(state.githubStats);
  const contactsMd = generateContactsMarkdown(state.contacts);
  const fullMarkdown = [bioMd, techMd, statsMd, contactsMd]
    .filter(Boolean)
    .join("\n");

  const handleDownload = () => {
    const blob = new Blob([fullMarkdown], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Конструктор README</h1>
        <button
          onClick={handleDownload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Скачать README.md
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EditorPanel />
        <PreviewPanel />
      </div>
    </div>
  );
}
