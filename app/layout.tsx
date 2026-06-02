import { Nunito } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import Header from "@/components/layout/Header";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AuthProvider user={null}>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
