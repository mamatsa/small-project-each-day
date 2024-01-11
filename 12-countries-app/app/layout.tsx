import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/components/Header";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries App",
  description:
    "World country list with filters, search and individual country details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-light-gray text-blue-900 ${nunito.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
