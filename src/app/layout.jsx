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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5486819455549234"
      crossOrigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-5486819455549234"></meta>
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
