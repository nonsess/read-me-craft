export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-800 rounded-xl border border-gray-700 p-5 ${className}`}
    >
      {children}
    </div>
  );
}
