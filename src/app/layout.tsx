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
    images: ["https://big-way-mbti.pages.dev/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Way Hot Pot MBTI Quiz",
    description:
      "Discover which of Big Way's delicious soup bases fits your personality and MBTI the best!",
    images: ["https://big-way-mbti.pages.dev/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://big-way-mbti.pages.dev/opengraph-image.png"
        />
        <meta property="og:title" content="Big Way Hot Pot MBTI Quiz" />
        <meta
          property="og:description"
          content="Discover which of Big Way's delicious soup bases fits your personality and MBTI the best!"
        />
      </head>
      <body>
        <QuizProvider>{children}</QuizProvider>
        <Analytics />
      </body>
    </html>
  );
}
