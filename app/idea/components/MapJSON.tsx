"use client";

import { useState } from "react";
import type { User } from "@supabase/supabase-js";
import { useAuth } from "@/components/providers/AuthProvider";
import { Modal, Toast } from "./Notifications";
import { start } from "../github";
import type Idea from "../types";

export default function MapJSON({ idea }: { idea: Idea }) {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const user = useAuth();

  const owner = user?.user_metadata.user_name;
  const repo = idea.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  function launch({ idea }: { idea: Idea }, user: User | null) {
    if (!user || user?.is_anonymous) {
      setModal(true);
      return;
    }

    const token = window.localStorage.getItem("oauth_provider_token");

    if (token) {
      start({ idea }, token, owner, repo);
    }

    setToast(true);

    setTimeout(() => {
      window.open(`https://github.com/${owner}/${repo}`, "_blank");
      setToast(false);
    }, 5000);
  }

  return (
    <div className="min-h-screen pt-26 pb-10">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Title */}
        <div className="bg-white rounded-[1.75rem] p-8">
          <h1 className="text-4xl font-bold text-slate-950">{idea.title}</h1>
          <p className="mt-3 max-w-4xl text-lg text-slate-700">
            {idea.description}
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* User Flow */}
          <section className="rounded-3xl bg-indigo-50 p-6 ring-1 ring-indigo-200/60 md:col-span-2">
            <h2 className="mb-5 text-3xl font-semibold text-indigo-950">
              User Flow
            </h2>

            <div className="space-y-5">
              {idea.user_flows.map((flow, i) => (
                <div key={i}>
                  <h3 className="mb-3 text-lg font-semibold text-indigo-900">
                    {flow.name}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {flow.steps.map((step, j) => (
                      <div
                        key={j}
                        className="rounded-2xl bg-indigo-200 px-4 py-2 text-sm text-indigo-950"
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
          <div className="space-y-6">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Milestones */}
          <section className="rounded-3xl bg-fuchsia-50 p-6 ring-1 ring-fuchsia-200/70">
            <h2 className="mb-5 text-3xl font-semibold text-fuchsia-950">
              Milestones
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {idea.milestones.map((milestone, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-fuchsia-100 p-4 ring-1 ring-fuchsia-300/50"
                >
                  <p className="mb-3 text-lg font-semibold text-fuchsia-900">
                    {milestone.name}
                  </p>

                  {milestone.issues.slice(0, 3).map((issue, j) => (
                    <p key={j} className="text-sm text-fuchsia-800">
                      • {issue.name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Future + Start Project */}
          <div className="flex flex-col justify-between gap-6">
            <section className="rounded-3xl bg-orange-50 p-6 ring-1 ring-orange-200/70">
              <h2 className="mb-5 text-3xl font-semibold text-orange-950">
                Future Features
              </h2>

              <div className="space-y-3">
                {idea.future_features.map((feature, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-orange-200 px-4 py-3 text-sm text-orange-950"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-1 flex-col justify-center rounded-[1.75rem] bg-white p-8">
              <h2 className="mb-5 text-3xl font-semibold text-slate-950">
                Start Project
              </h2>

              <button
                onClick={() => launch({ idea }, user)}
                className="relative cursor-pointer overflow-hidden rounded-2xl bg-blue-600 px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-blue-700 hover:shadow-xl active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Launch with GitHub
                </span>
              </button>
              {modal && <Modal setModal={setModal} />}
              {toast && <Toast />}
            </section>
          </div>
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
      ? "bg-teal-200 text-teal-950 ring-1 ring-teal-300/60"
      : "bg-sky-200 text-sky-950 ring-1 ring-sky-300/60";

  const sectionStyle =
    tone === "emerald"
      ? "rounded-3xl bg-teal-50 p-6 ring-1 ring-teal-200/70"
      : "rounded-3xl bg-sky-50 p-6 ring-1 ring-sky-200/70";

  return (
    <section className={sectionStyle}>
      <h2 className="mb-4 text-3xl font-semibold text-zinc-950">{title}</h2>

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
