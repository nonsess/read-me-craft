"use client";

import { useReadme } from "@/context/ReadmeContext";
import { generateBioMarkdown } from "@/lib/markdown/bio";
import { generateTechStackMarkdown } from "@/lib/markdown/techStack";
import { generateGithubStatsMarkdown } from "@/lib/markdown/githubStats";
import { generateContactsMarkdown } from "@/lib/markdown/contacts";

export default function Header() {
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
    <div className="container py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-3xl font-bold text-gray-100">ReadMe Craft</h1>
      <button
        onClick={handleDownload}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors cursor-pointer min-w-[180px] text-center"
      >
        Скачать README.md
      </button>
    </div>
  );
}
