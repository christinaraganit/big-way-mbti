import type { Metadata } from "next";
import "./globals.css";
import { QuizProvider } from "@/app/quiz-context";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://big-way-mbti.pages.dev/"),
  title: "Big Way Hot Pot MBTI Quiz",
  description:
    "Discover which of Big Way's delicious soup bases fits your personality and MBTI the best!",
  openGraph: {
    title: "Big Way Hot Pot MBTI Quiz",
    description:
      "Discover which of Big Way's delicious soup bases fits your personality and MBTI the best!",
    images: [
      {
        url: "/opengraph-image.png", // hosted in /public
        width: 1200,
        height: 600,
        alt: "Big Way Hot Pot MBTI Quiz",
      },
    ],
  },
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
