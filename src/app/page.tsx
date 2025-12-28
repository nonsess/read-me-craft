import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ReadMe <span className="text-indigo-600">Craft</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Создайте идеальный README.md для своего GitHub профиля — быстро,
          красиво и без усилий.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/builder"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Начать
          </Link>
        </div>
      </div>
    </main>
  );
}
