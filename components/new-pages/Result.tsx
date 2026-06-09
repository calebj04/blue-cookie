import { useIdea } from "../providers/IdeaProvider";

export default function Result() {
  const { idea } = useIdea();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 animate-fade-in-up">
      {idea}
    </div>
  );
}
