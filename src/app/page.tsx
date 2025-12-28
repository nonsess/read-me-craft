import { EditorPanel } from "@/components/layout/builder/EditorPanel";
import { PreviewPanel } from "@/components/layout/builder/PreviewPanel";

export default function HomePage() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
      <EditorPanel />
      <PreviewPanel />
    </div>
  );
}
