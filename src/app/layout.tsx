import type { Metadata } from "next";
import "./globals.css";
import { QuizProvider } from "@/app/quiz-context";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Big Way Hot Pot MBTI Quiz",
  description: "Discover which of Big Way's delicious soup bases fits your personality and MBTI the best!",
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
