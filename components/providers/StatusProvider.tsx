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
  setStatus: Dispatch<SetStateAction<Status>> | null;
};

const StatusContext = createContext<ContextType>({
  status: "start",
  setStatus: null,
});

export function useStatus() {
  return useContext(StatusContext);
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
