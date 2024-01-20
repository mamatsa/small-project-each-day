import type { Metadata } from "next";
import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});
const league_spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Planets fact site",
  description: "Planets fact website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${league_spartan.variable}`}
    >
      <body className={antonio.className}>{children}</body>
    </html>
  );
}
