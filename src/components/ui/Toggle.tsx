import { ReactNode } from "react";

export function Toggle({
  checked,
  onCheckedChange,
  children,
  className = "",
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`block w-10 h-6 rounded-full transition-colors ${
            checked ? "bg-indigo-500" : "bg-gray-600"
          }`}
        />
        <div
          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
            checked ? "transform translate-x-4" : ""
          }`}
        />
      </div>
      {children}
    </label>
  );
}
