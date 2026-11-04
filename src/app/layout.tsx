import type { Metadata } from "next";
import { Bentham, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bentham = Bentham({
  variable: "--font-bentham",
  weight: "400",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Silver Clarion",
  description: "Silver Clarion website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`h-full antialiased bg-zinc-50`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}