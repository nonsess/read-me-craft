import type { Metadata } from "next";
import { ReadmeProvider } from "@/context/ReadmeContext";
import "./globals.css";
import "github-markdown-css/github-markdown-light.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "ReadMe Craft — Конструктор README для разработчиков",
  description:
    "Создайте красивый README.md для своего GitHub профиля за пару минут",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen antialiased">
        <ReadmeProvider>
          <Header />
          {children}
          <Footer />
        </ReadmeProvider>
      </body>
    </html>
  );
}
