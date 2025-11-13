import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import the Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notre Dame School",
  description:
    "Welcome to Notre Dame School – Inspiring excellence in education and character.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* ✅ Global Navbar */}
        <Navbar />

        {/* ✅ Main Page Content */}
        <main className="flex-grow">{children}</main>

        {/* ✅ Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
