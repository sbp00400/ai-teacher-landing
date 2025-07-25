import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AI Teacher - Crack Competitive Exams",
  description: "Learn smart. Think fast. Crack competitive exams with AI Teacher.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
