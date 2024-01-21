import type { Metadata } from "next";
import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components";

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
      <body className={`bg-stars bg-dark-blue ${antonio.className}`}>
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
