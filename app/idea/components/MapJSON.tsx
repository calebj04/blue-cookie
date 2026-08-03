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
  return <div className="">poop</div>;
}
