import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Optimal AI Security Guide",
  description: "Comprehensive security guidance for AI systems featuring NIST AI RMF, NIST 800-53 Rev 5, and OWASP AISVS mappings with interactive visualizations and developer resources.",
  keywords: [
    "AI Security",
    "Agentic AI",
    "NIST AI RMF",
    "NIST 800-53",
    "OWASP AISVS",
    "AI Risk Management",
    "Security Controls",
    "Threat Analysis",
    "AI Governance"
  ],
  authors: [{ name: "AI Security Community" }],
  creator: "AI Security Guide Team",
  publisher: "AI Security Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-security.gooptimal.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Optimal AI Security Guide",
    description: "Comprehensive security guidance for AI systems featuring NIST AI RMF, NIST 800-53 Rev 5, and OWASP AISVS mappings with interactive visualizations and developer resources.",
    url: "https://ai-security.gooptimal.io",
    siteName: "Optimal AI Security Guide",
    images: [
      {
        url: "/optimal-logo.png",
        width: 512,
        height: 512,
        alt: "Optimal AI Security Guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimal AI Security Guide",
    description: "Comprehensive security guidance for AI systems featuring NIST AI RMF, NIST 800-53 Rev 5, and OWASP AISVS mappings with interactive visualizations and developer resources.",
    images: ["/optimal-logo.png"],
    creator: "@optimal_cyber",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="icon" href="/optimal-logo.png" />
        <link rel="apple-touch-icon" href="/optimal-logo.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --background: #0f172a !important;
              --foreground: #f8fafc !important;
              --card: #1e293b !important;
              --card-foreground: #f8fafc !important;
              --popover: #1e293b !important;
              --popover-foreground: #f8fafc !important;
              --primary: #10b981 !important;
              --primary-foreground: #ffffff !important;
              --secondary: #64748b !important;
              --secondary-foreground: #f8fafc !important;
              --muted: #334155 !important;
              --muted-foreground: #94a3b8 !important;
              --accent: #334155 !important;
              --accent-foreground: #f8fafc !important;
              --destructive: #ef4444 !important;
              --destructive-foreground: #ffffff !important;
              --border: #475569 !important;
              --input: #475569 !important;
              --ring: #10b981 !important;
              --radius: 0.5rem !important;
            }
            body {
              background: #0f172a !important;
              color: #f8fafc !important;
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-900 text-slate-100`}
        style={{
          backgroundColor: '#0f172a',
          color: '#f8fafc'
        }}
      >
        {children}
      </body>
    </html>
  );
}
