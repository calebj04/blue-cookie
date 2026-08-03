import { start } from "../actions";
import { type Idea } from "../types";

export default function StartProject({ idea }: { idea: Idea }) {
  return (
    <div onClick={() => start({ idea })} className="border-2 cursor-pointer">
      {" "}
      Click me!{" "}
    </div>
  );
}
