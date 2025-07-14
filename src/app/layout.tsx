import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
