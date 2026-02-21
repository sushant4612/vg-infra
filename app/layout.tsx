import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VG INNFRA | Premium Real Estate Development",
    template: "%s | VG INNFRA",
  },
  description: "Transforming Ownership into Branded Wealth. Secure, co-invested, institutional-grade development in premium real estate.",
  keywords: ["Real Estate Development", "Premium Real Estate", "VG INNFRA", "Property Investment", "Co-invested Development"],
  authors: [{ name: "VG INNFRA" }],
  creator: "VG INNFRA",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vginnfra.com",
    title: "VG INNFRA | Premium Real Estate Development",
    description: "Transforming Ownership into Branded Wealth. Secure, co-invested, institutional-grade development.",
    siteName: "VG INNFRA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VG INNFRA | Transforming Ownership into Branded Wealth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VG INNFRA | Premium Real Estate Development",
    description: "Transforming Ownership into Branded Wealth. Secure, co-invested, institutional-grade development.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png", // Add an apple-touch-icon.png if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
