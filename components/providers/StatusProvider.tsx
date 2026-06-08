"use client";

import {
  useState,
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export type Status = "start" | "customize" | "loading" | "result";

type ContextType = {
  status: string;
  setStatus: Dispatch<SetStateAction<Status>>;
};

const StatusContext = createContext<ContextType | undefined>(undefined);

export function useStatus() {
  const context = useContext(StatusContext);

  if (!context) {
    throw new Error("useStatus must be used inside StatusProvider");
  }

  return context;
}

export default function StatusProvider({
  initialStatus,
  children,
}: {
  initialStatus: Status;
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<Status>(initialStatus);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
}
