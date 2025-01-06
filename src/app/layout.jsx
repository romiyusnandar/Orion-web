import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "OrionOS Page",
  description: "The future is for everyone!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
