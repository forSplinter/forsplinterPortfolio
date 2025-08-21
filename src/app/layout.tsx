import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJarkataSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "forsplinter portfolio",
  description: "my own portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${plusJarkataSans.variable} ${ibmPlexSans.variable} ${playfairDisplay.variable} 
          antialiased leading-8 overflow-x-hidden bg-[#ecf6ff] dark:bg-background dark:text-white
          flex flex-col min-h-screen
        `}
      >
        <Navbar />

        {/* Le contenu prend tout l'espace disponible */}
        <main className="pt-[123px] flex-1">
          {children}
          <div className="h-50" /> 
        </main>

        <Footer />
      </body>
    </html>
  );
}

