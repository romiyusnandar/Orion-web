import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700", "800", "900"], poppins
  // weight: ["100", "300", "400", "700", "900"], inter
});

export const metadata = {
  title: "OrionOS Project",
  description: "The future is for everyone!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        <main className="pt-20 md:pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
