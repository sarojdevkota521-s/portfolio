import type { Metadata } from "next";
import "./globals.css";

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('sd-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "Saroj Devkota - Full Stack Developer",
  description:
    "Saroj Devkota - Full Stack Developer specializing in Python, Django, DRF, and automation workflows (n8n, MCP). Based in Kathmandu, Nepal.",
  keywords: [
    "Saroj Devkota",
    "Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "Kathmandu",
    "Nepal",
    "Django REST Framework",
    "Backend Developer",
  ],
  authors: [{ name: "Saroj Devkota" }],
  openGraph: {
    title: "Saroj Devkota - Full Stack Developer",
    description:
      "Python / Django developer building production APIs, SaaS platforms, and automation workflows.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Saroj Devkota - Full Stack Developer",
    description:
      "Python / Django developer building production APIs, SaaS platforms, and automation workflows.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
