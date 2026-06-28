import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.title} & ${SITE.subtitle}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "Embedded Systems",
    "Automotive IVI",
    "Widevine DRM",
    "QTEE",
    "Linux BSP",
    "UAV",
    "Edge AI",
    "Yu-Hsiang Lin",
    "林育祥",
    "DesaySV",
    "Garmin",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: SITE.url,
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.tagline,
    siteName: `${SITE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
