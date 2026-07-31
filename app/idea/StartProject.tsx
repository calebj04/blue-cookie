import start from "./actions";

export default async function StartProject() {
  return (
    <div onClick={start} className="border-2 cursor-pointer">
      Click me!
    </div>
  );
}
