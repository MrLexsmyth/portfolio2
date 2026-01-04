"use client";

import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Shittu Odunayo O. - Portfolio",
  url = "https://shittuodunayo.com",
  image = "/social-preview.png",
  type = "website",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Fallback favicon */}
      <link rel="icon" href="/logo.jpeg" />
    </Head>
  );
};

export default SEO;
