"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const AuthContext = createContext<User | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({
  initialUser,
  children,
}: {
  initialUser: User | null;
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(initialUser);

  useEffect(() => {
    const supabase = createClient();
    // Register this immediately after calling createClient!
    // Because signInWithOAuth causes a redirect, you need to fetch the
    // provider tokens from the callback.

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      console.log("Yes mommy?");

      if (session && session.provider_token) {
        window.localStorage.setItem(
          "oauth_provider_token",
          session.provider_token,
        );
      }

      if (session && session.provider_refresh_token) {
        window.localStorage.setItem(
          "oauth_provider_refresh_token",
          session.provider_refresh_token,
        );
      }

      if (event === "SIGNED_OUT") {
        window.localStorage.removeItem("oauth_provider_token");
        window.localStorage.removeItem("oauth_provider_refresh_token");
      }
    });

    // Call this on your Sign in with GitHub button to initiate OAuth
    // with GitHub with the requested elevated scopes.

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
