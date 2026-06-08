"use client";

import {
  useState,
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

type ContextType = {
  idea: string;
  setIdea: Dispatch<SetStateAction<string>>;
};

const IdeaContext = createContext<ContextType | undefined>(undefined);

export function useIdea() {
  const context = useContext(IdeaContext);

  if (!context) {
    throw new Error("useIdea must be used inside IdeaProvider");
  }

  return context;
}

export default function IdeaProvider({
  initialIdea,
  children,
}: {
  initialIdea: string;
  children: React.ReactNode;
}) {
  const [idea, setIdea] = useState<string>(initialIdea);

  return (
    <IdeaContext.Provider value={{ idea, setIdea }}>
      {children}
    </IdeaContext.Provider>
  );
}
