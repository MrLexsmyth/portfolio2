import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});
export const metadata: Metadata = {
  title: "Shittu Odunayo O. - Portfolio",
  description: "Portfolio of Shittu Odunayo O.",
    icons: {
    icon: "/logo.jpeg", 
    shortcut: "/logo.jpeg",   
    apple: "/logo.jpeg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
        <body className={playfair.className}>
      
        {children}
      </body>
    </html>
  );
}
