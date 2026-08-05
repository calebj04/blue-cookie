import { signInWithGithub } from "@/lib/actions";
import GitHub from "@/components/svgs/GitHub";

export function SignIn({ setModal }: { setModal: (value: boolean) => void }) {
  return (
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
    </div>
  );
}
