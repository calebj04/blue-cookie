import { Nunito } from "next/font/google";
import "./globals.css";
import { getUser } from "@/lib/supabase/server";
import AuthProvider from "@/components/providers/AuthProvider";
import Header from "@/components/layout/Header";
import "@/styles/animations.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AuthProvider initialUser={user}>
          <Header />
          <div className="animate-fade-in-up">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
