import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenan Firmansyah – Portfolio Showcase",
  description: "Game Programmer specializing in AI/Gameplay, iOS Developer, and Web Developer. View my projects, experiences, and skills.",
  keywords: ["Game Developer", "iOS Developer", "Unreal Engine", "Unity", "Portfolio", "Kenan Firmansyah"],
  authors: [{ name: "Kenan Firmansyah" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Kenan Firmansyah – Portfolio Showcase",
    description: "Game Programmer specializing in AI/Gameplay, iOS Developer, and Web Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {children}
      </body>
    </html>
  );
}
