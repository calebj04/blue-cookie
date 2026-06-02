import { createContext } from "react";
import type { User } from "@supabase/supabase-js";

const AuthContext = createContext<User | null>(null);

export default function AuthProvider({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
