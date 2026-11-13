import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/Theme";
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
  metadataBase: new URL("https://whitecaves.ae"),
  title: "White Caves Real Estate | Luxury Properties Dubai",
  description: "Discover premier luxury real estate, off-plan projects, and high-yield investment properties in Dubai with White Caves Real Estate LLC.",
  keywords: ["Dubai Real Estate", "White Caves", "Luxury Villas Dubai", "Offplan Dubai", "Palm Jumeirah", "Downtown Dubai"],
  openGraph: {
    title: "White Caves Real Estate LLC | Dubai",
    description: "Discover premier luxury real estate, off-plan projects, and high-yield investment properties in Dubai.",
    url: "https://whitecaves.ae",
    siteName: "White Caves Real Estate",
    images: [
      {
        url: "/images/dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "White Caves Luxury Real Estate Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/company-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-rose-600 selection:text-white transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
