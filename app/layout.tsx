
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jura } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


const jura_init = Jura({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-jura',
});


export const metadata: Metadata = {
  title: "Findr",
  description: "Giving your interns the perfect experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jura_init.variable}>{children}</body>
    </html>
  );
}
