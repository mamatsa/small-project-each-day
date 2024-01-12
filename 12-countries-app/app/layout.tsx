import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/components/Header";
import { Providers } from "@/app/providers";
import Head from "next/head";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries App",
  description:
    "World country list with filters, search and individual country details.",
  authors: [
    { name: "Otar Mamatsashvili", url: "https://mamatsa.netlify.app/" },
  ],
  keywords: [
    "Countries app",
    "Countries",
    "Country list",
    "Next.js",
    "React",
    "Tailwind",
    "Typescript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.svg" />
      </Head>
      <body className={`min-h-screen ${nunito.className}`}>
        <Providers>
          <div className="min-h-screen bg-light-gray text-blue-900 dark:bg-blue-800 dark:text-white">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
