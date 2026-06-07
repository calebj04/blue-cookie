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
  setIdea: Dispatch<SetStateAction<string>> | null;
};

const IdeaContext = createContext<ContextType>({
  idea: "",
  setIdea: null,
});

export function useIdea() {
  return useContext(IdeaContext);
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
