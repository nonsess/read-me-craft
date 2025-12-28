import type { ReadmeState } from "@/context/ReadmeContext";

export function generateBioMarkdown(bio: ReadmeState["bio"]): string {
  if (!bio.enabled) return "";

  const lines = [];
  lines.push(`### 👋 Привет! Я ${bio.name}`);
  lines.push("");
  lines.push(`#### ${bio.headline}`);
  lines.push("");
  lines.push(bio.description);
  lines.push("");
  lines.push("---");
  lines.push("");

  return lines.join("\n");
}
