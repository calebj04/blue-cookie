export default function Customize() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 animate-fade-in-up">
      <textarea
        placeholder="Enter project description or concept to learn..."
        rows={1}
        className="flex text-3xl w-full max-w-3xl flex-col items-center justify-center border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-fuchsia-500/20 hover:drop-shadow-2xl hover:shadow-fuchsia-500/50 rounded-2xl p-4 gap-4 hover:scale-105 transition-all duration-500 active:scale-95 cursor-pointer resize-none outline-none"
      />
    </div>
  );
}
