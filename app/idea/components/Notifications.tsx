"use client";

import { createPortal } from "react-dom";
import { signInWithGithub } from "@/lib/actions";
import GitHub from "@/components/svgs/GitHub";

export function Modal({ setModal }: { setModal: (value: boolean) => void }) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-slate-950">Sign in required</h2>

        <p className="mt-3 text-slate-600">
          You must sign in with GitHub before we can create a repository on your
          behalf.
        </p>

        <div className="mt-6">
          <div
            onClick={signInWithGithub}
            className="flex cursor-pointer justify-center rounded-md bg-white px-4 py-2 text-lg text-black hover:bg-gray-100 border"
          >
            <GitHub className="mr-2 h-6 w-6" />
            Sign in with GitHub
          </div>
        </div>

        <button
          onClick={() => setModal(false)}
          className="mt-4 w-full rounded-xl bg-slate-100 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
        >
          Cancel
        </button>
      </div>
    </div>,
    document.body,
  );
}

export function Toast() {
  return createPortal(
    <div className="fixed bottom-6 right-6 z-999 rounded-3xl bg-white p-5 shadow-xl ring-1 ring-green-200">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
          ✓
        </div>

        <div>
          <h3 className="font-semibold text-slate-950">Repository Created</h3>

          <p className="mt-1 text-sm text-slate-600">Redirecting...</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
