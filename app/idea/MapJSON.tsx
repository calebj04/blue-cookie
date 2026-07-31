interface Idea {
  title: string;
  description: string;
  user_flows: {
    name: string;
    steps: string[];
  }[];
  tech_stack: string[];
  milestones: {
    issues: string[];
  }[];
  future_features: string[];
  core_concepts: string[];
}

export default function MapJSON({ idea }: { idea: Idea }) {
  return (
    <div className="min-h-screen p-26 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header Card */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{idea.title}</h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              {idea.description}
            </p>
          </div>
        </section>

        {/* Core Architecture */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* User Flows */}
          <section className="rounded-3xl border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/20 px-3 py-2">🚀</div>
              <h2 className="text-xl font-semibold">User Flows</h2>
            </div>

            <div className="space-y-5">
              {idea.user_flows.map((flow, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <h3 className="mb-3 font-semibold text-blue-300">
                    {flow.name}
                  </h3>

                  <ol className="space-y-2">
                    {flow.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-300">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs">
                          {i + 1}
                        </span>

                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="rounded-3xl border border-purple-400/20 bg-purple-400/5 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-purple-500/20 px-3 py-2">⚙️</div>

              <h2 className="text-xl font-semibold">Technology Stack</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {idea.tech_stack.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Development Roadmap */}
        <section className="rounded-3xl border border-orange-400/20 bg-orange-400/5 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-orange-500/20 px-3 py-2">🏗️</div>

            <h2 className="text-xl font-semibold">Development Milestones</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {idea.milestones.map((milestone, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <h3 className="mb-4 font-medium text-orange-300">
                  Phase {index + 1}
                </h3>

                <ul className="space-y-2">
                  {milestone.issues.map((issue, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-300">
                      <span>⚠️</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Future + Concepts */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Future Features */}
          <section className="rounded-3xl border border-green-400/20 bg-green-400/5 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-green-500/20 px-3 py-2">🌱</div>

              <h2 className="text-xl font-semibold">Future Features</h2>
            </div>

            <div className="space-y-3">
              {idea.future_features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300"
                >
                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Core Concepts */}
          <section className="rounded-3xl border border-pink-400/20 bg-pink-400/5 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-pink-500/20 px-3 py-2">💡</div>

              <h2 className="text-xl font-semibold">Core Concepts</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {idea.core_concepts.map((concept, index) => (
                <span
                  key={index}
                  className="rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-200"
                >
                  {concept}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
