import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RentMate | Find your next home",
  description: "A clean rental discovery dashboard for exploring homes, comparing rent, and organizing property shortlists.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
