import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


// Google Font setup
const chill = localFont({
  src: './fonts/run.otf',
})



// SEO Configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shittuodunayo.com";
const SITE_NAME = "Shittu Odunayo O. - Portfolio";
const SITE_DESCRIPTION = "Web Developer & Web Designer Portfolio showcasing Next.js, React, and Tailwind CSS projects. Experienced in building modern, responsive web applications.";
const AUTHOR_NAME = "Shittu Odunayo O.";
const SOCIAL_IMAGE = `${SITE_URL}/social-preview.png`;
const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;

// JSON-LD Structured Data for Portfolio
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": AUTHOR_NAME,
  "url": SITE_URL,
  "image": SOCIAL_IMAGE,
  "description": SITE_DESCRIPTION,
  "jobTitle": "Web Developer & Designer",
  "sameAs": [
    "https://www.linkedin.com/in/shittuodunayo",
    "https://twitter.com/shittuodunayo",
    "https://github.com/shittuodunayo",
    "https://instagram.com/shittuodunayo",
  ],
  "contact": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "contact@shittuodunayo.com",
    "availableLanguage": "en"
  }
};

export const metadata: Metadata = {
  // Basic Metadata
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "Web Developer",
    "Web Designer",
    "Next.js Developer",
    "React Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Portfolio",
    "Web Projects",
    "Frontend Developer",
    "Full Stack Developer",
    "UI/UX",
    "Web Development"
  ],
  authors: [
    {
      name: AUTHOR_NAME,
      url: SITE_URL,
    }
  ],
  
  // Viewport & Device Settings
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  // Search Engine Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Favicon & Icons
icons: {
  icon: "/logo22.png",
  shortcut: "/logo22.png",
  apple: "/logo22.png",
  other: [
    {
      rel: "apple-touch-icon",
      url: "/logo22.png",
    },
  ],
},

  // Open Graph - Facebook, LinkedIn, Pinterest
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: SOCIAL_IMAGE_WIDTH,
        height: SOCIAL_IMAGE_HEIGHT,
        alt: `${AUTHOR_NAME} - Web Developer Portfolio`,
        type: "image/png",
      },
      {
        url: `${SITE_URL}/logo22.png`,
        width: 512,
        height: 512,
        alt: `${AUTHOR_NAME} Logo`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    emails: ["contact@shittuodunayo.com"],
    authors: [AUTHOR_NAME],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@shittuodunayo",
    creator: "@shittuodunayo",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: SOCIAL_IMAGE_WIDTH,
        height: SOCIAL_IMAGE_HEIGHT,
        alt: `${AUTHOR_NAME} - Web Developer Portfolio`,
      },
    ],
  },

  // Additional Meta Tags
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },

  // Alternate Links for Multi-language (if applicable)
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },

  // Verification Tags (add your own)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioSchema),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme Color for Mobile */}
        <meta name="theme-color" content="#022c43" />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content={AUTHOR_NAME} />
        <meta name="email" content="contact@shittuodunayo.com" />
        <meta name="copyright" content={`© 2024 ${AUTHOR_NAME}. All rights reserved.`} />

        {/* Google Site Verification (replace with your code) */}
        {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}

        {/* Microsoft Clarity (optional, replace with your ID) */}
        {/* <script async src="https://clarity.ms/tag/your-clarity-id"></script> */}
      </head>

      <body className={`${chill.className} bg-[#022c43] text-white antialiased`}>
        {children}

        {/* Google Analytics (optional, add your GA ID) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `}
        </script> */}
      </body>
    </html>
  );
}