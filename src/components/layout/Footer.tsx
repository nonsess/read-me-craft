export default function Footer() {
  return (
    <footer className="mt-16 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
      <p>
        Open-source проект. Исходный код доступен на{" "}
        <a
          href="https://github.com/nonsess/read-me-craft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 underline"
        >
          GitHub
        </a>
        {" • "}
        <a
          href="https://ddanjil.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 underline"
        >
          ddanjil.ru
        </a>
      </p>
    </footer>
  );
}
