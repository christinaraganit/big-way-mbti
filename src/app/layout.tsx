import type { Metadata } from "next";
import "./globals.css";
import {QuizProvider} from "@/app/quiz-context";

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
      <QuizProvider>
        {children}
      </QuizProvider>
      </body>
    </html>
  );
}
