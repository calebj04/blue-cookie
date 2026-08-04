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
    <div className="min-h-screen px-10 py-20">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">{idea.title}</h1>
          <p className="mt-2 max-w-4xl text-lg text-neutral-600">
            {idea.description}
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* User Flow */}
          <section className="col-span-2 rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-neutral-900">
              User Flow
            </h2>

            <div className="space-y-4">
              {idea.user_flows.map((flow, i) => (
                <div key={i}>
                  <h3 className="mb-2 font-medium text-neutral-800">
                    {flow.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {flow.steps.map((step, j) => (
                      <div
                        key={j}
                        className="rounded-xl bg-neutral-100 px-3 py-2 text-sm text-neutral-700"
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
            <SimpleList title="Tech Stack" items={idea.tech_stack} />

            <SimpleList title="Core Concepts" items={idea.core_concepts} />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Milestones */}
          <section className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-neutral-900">
              Milestones
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {idea.milestones.map((milestone, i) => (
                <div key={i} className="rounded-xl bg-neutral-100 p-3">
                  <p className="mb-2 text-sm font-semibold text-neutral-700">
                    Phase {i + 1}
                  </p>

                  {milestone.issues.slice(0, 3).map((issue, j) => (
                    <p key={j} className="text-sm text-neutral-600">
                      • {issue}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Future */}
          <section className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-neutral-900">
              Future Features
            </h2>

            <div className="space-y-2">
              {idea.future_features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-neutral-100 px-3 py-2 text-sm text-neutral-700"
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

function SimpleList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-neutral-900">{title}</h2>

      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="rounded-lg bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
