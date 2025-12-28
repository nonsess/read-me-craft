import type { ReadmeState } from "@/context/ReadmeContext";

export function generateGithubStatsMarkdown(
  githubStats: ReadmeState["githubStats"],
): string {
  if (!githubStats.enabled || !githubStats.username.trim()) return "";

  const username = encodeURIComponent(githubStats.username.trim());
  const lines = [];
  lines.push("### 📊 GitHub Stats\n");

  lines.push(
    `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&count_private=true)\n`,
  );

  if (githubStats.showTopLangs) {
    lines.push(
      `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical)\n`,
    );
  }

  return lines.join("\n");
}
