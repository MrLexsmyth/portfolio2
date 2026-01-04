import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

// Google Font setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shittu Odunayo O. - Portfolio",
  description: "Frontend Developer & Web Projects Portfolio of Shittu Odunayo O.",
  keywords: "Next.js, React, Portfolio, Web Developer, Projects, Tailwind, Framer Motion",
  authors: [{ name: "Shittu Odunayo O." }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Shittu Odunayo O. - Portfolio",
    description: "Frontend Developer & Web Projects Showcase",
    url: "https://shittuodunayo.com",
    siteName: "Shittu Odunayo Portfolio",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shittu Odunayo O. - Portfolio",
    description: "Frontend Developer & Web Projects Showcase",
    images: ["/image1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-[#022c43] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
