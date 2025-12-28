import type { ReadmeState } from "@/context/ReadmeContext";

export function generateContactsMarkdown(
  contacts: ReadmeState["contacts"],
): string {
  if (!contacts.enabled) return "";

  const links: string[] = [];

  if (contacts.github) {
    const url = contacts.github.startsWith("http")
      ? contacts.github
      : `https://github.com/${contacts.github.replace(/^@/, "")}`;
    links.push(`[GitHub](${url})`);
  }

  if (contacts.email) {
    const email = contacts.email.replace(/\s+/g, "");
    if (email.includes("@")) {
      links.push(`[Email](mailto:${email})`);
    }
  }

  if (contacts.telegram) {
    const tg = contacts.telegram.startsWith("http")
      ? contacts.telegram
      : contacts.telegram.startsWith("@")
        ? `https://t.me/${contacts.telegram.slice(1)}`
        : `https://t.me/${contacts.telegram}`;
    links.push(`[Telegram](${tg})`);
  }

  if (contacts.linkedin) {
    const li = contacts.linkedin.startsWith("http")
      ? contacts.linkedin
      : `https://linkedin.com/in/${contacts.linkedin.replace(/^@/, "")}`;
    links.push(`[LinkedIn](${li})`);
  }

  if (contacts.website) {
    const site = contacts.website.startsWith("http")
      ? contacts.website
      : `https://${contacts.website}`;
    links.push(`[Portfolio](${site})`);
  }

  if (links.length === 0) return "";

  return `### 📬 Контакты\n\n${links.join("\n\n")}`;
}
