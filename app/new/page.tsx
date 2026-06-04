import IdeaButton from "@/components/buttons/Idea";

export default function Idea() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 transition-all duration-500 ease-out">
      <main className="flex w-full items-center justify-around gap-4 text-center">
        <IdeaButton img="/dice.svg" text="Random Idea" />
        <IdeaButton img="/tools.svg" text="Custom Idea" />
      </main>
    </div>
  );
}
