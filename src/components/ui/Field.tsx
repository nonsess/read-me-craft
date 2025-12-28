export function Field({
  label,
  children,
  helper,
}: {
  label: string;
  children: React.ReactNode;
  helper?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-200">{label}</label>
      {children}
      {helper && <p className="text-xs text-gray-400">{helper}</p>}
    </div>
  );
}
