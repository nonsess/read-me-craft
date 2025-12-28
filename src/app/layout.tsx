import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
