import { ReactNode } from "react";
import IdeaProvider from "@/components/providers/IdeaProvider";
import StatusProvider from "@/components/providers/StatusProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <StatusProvider initialStatus="start">
      <IdeaProvider initialIdea="">
        <div className="min-h-full flex flex-col">{children}</div>
      </IdeaProvider>
    </StatusProvider>
  );
}
