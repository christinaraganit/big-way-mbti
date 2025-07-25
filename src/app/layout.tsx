import type { Metadata } from "next";
import "./globals.css";
import { QuizProvider } from "@/app/quiz-context";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Big Way Quiz",
  description: "Big way quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QuizProvider>{children}</QuizProvider>
        <Analytics />
      </body>
    </html>
  );
}
