import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SurahList from "@/components/SurahList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quran App",
  description: "Read and search Surahs",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased custom-scrollbar`}
    >
      <body className="min-h-full flex flex-col pt-16">
        <Navbar surahLishtSidebar={<SurahList />} />
        <main className="flex-grow p-4 md:px-8 md:py-4">
          {children}
        </main>
      </body>
    </html>
  );
}
