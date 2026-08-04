import { Octokit } from "octokit";
import { type Idea } from "../types";

async function start({ idea }: { idea: Idea }) {
  const token = window.localStorage.getItem("oauth_provider_token");

  const octokit = new Octokit({
    auth: token,
  });

  await octokit.request("POST /user/repos", {
    name: idea.title,
    description: idea.description,
    homepage: "https://github.com",
    private: false,
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });
}

function StartProject({ idea }: { idea: Idea }) {
  return (
    <div onClick={() => start({ idea })} className="border-2 cursor-pointer">
      {" "}
      Click me!{" "}
    </div>
  );
}

export default function MapJSON({ idea }: { idea: Idea }) {
  return (
    <div className="min-h-screen px-10 py-26">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Title */}
        <div className="rounded-[1.75rem] bg-gradient-to-r from-sky-100 via-indigo-50 to-cyan-100 p-8">
          <h1 className="text-4xl font-bold text-slate-950">{idea.title}</h1>
          <p className="mt-3 max-w-4xl text-lg text-slate-700">
            {idea.description}
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* User Flow */}
          <section className="col-span-2 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
            <h2 className="mb-5 text-3xl font-semibold text-sky-900">
              User Flow
            </h2>

            <div className="space-y-5">
              {idea.user_flows.map((flow, i) => (
                <div key={i}>
                  <h3 className="mb-3 text-lg font-semibold text-slate-800">
                    {flow.name}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {flow.steps.map((step, j) => (
                      <div
                        key={j}
                        className="rounded-2xl bg-sky-100 px-4 py-2 text-sm text-sky-900"
                      >
                        {j + 1}. {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack + Concepts */}
          <div className="space-y-4">
            <SimpleList
              title="Tech Stack"
              items={idea.tech_stack}
              tone="cyan"
            />

            <SimpleList
              title="Core Concepts"
              items={idea.core_concepts}
              tone="emerald"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Milestones */}
          <section className="rounded-3xl bg-violet-50 p-6 ring-1 ring-violet-200/70">
            <h2 className="mb-5 text-3xl font-semibold text-violet-900">
              Milestones
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {idea.milestones.map((milestone, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-violet-100/80"
                >
                  <p className="mb-3 text-lg font-semibold text-violet-800">
                    Phase {i + 1}
                  </p>

                  {milestone.issues.slice(0, 3).map((issue, j) => (
                    <p key={j} className="text-sm text-violet-700">
                      • {issue}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Future */}
          <section className="rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-200/70">
            <h2 className="mb-5 text-3xl font-semibold text-amber-900">
              Future Features
            </h2>

            <div className="space-y-3">
              {idea.future_features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-amber-100 px-4 py-3 text-sm text-amber-900"
                >
                  {feature}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SimpleList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "cyan" | "emerald";
}) {
  const badgeStyle =
    tone === "emerald"
      ? "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200/70"
      : "bg-cyan-100 text-cyan-900 ring-1 ring-cyan-200/70";

  const sectionStyle =
    tone === "emerald"
      ? "rounded-3xl bg-emerald-50 p-6 ring-1 ring-emerald-200/70"
      : "rounded-3xl bg-cyan-50 p-6 ring-1 ring-cyan-200/70";

  return (
    <section className={sectionStyle}>
      <h2 className="mb-4 text-3xl font-semibold text-slate-900">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <span
            key={i}
            className={`${badgeStyle} rounded-2xl px-4 py-2 text-sm font-medium`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
