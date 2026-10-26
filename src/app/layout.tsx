import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Manrope, IBM_Plex_Mono } from "next/font/google";
import { AppShell } from "@/components/app-shell/app-shell";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

const headingFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: { url: "/icon-reciprocidade.png", type: "image/png" },
  },
  title: {
    default: "Unveil",
    template: "%s | Unveil",
  },
  description:
    "Analise suas conexões do Instagram com privacidade, direto no navegador.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <MotionProvider>
          <AppShell>{children}</AppShell>
        </MotionProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EB2C44HDPW"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EB2C44HDPW');
          `}
        </Script>
      </body>
    </html>
  );
}
