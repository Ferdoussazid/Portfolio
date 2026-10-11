import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferdoussazid.com"),
  title: "MD. Ferdous Sazid | Software Developer & Owner at Crochethia",
  description: "Portfolio of MD. Ferdous Sazid — Software Engineer & Owner of Crochethia based in Jashore, Khulna, Bangladesh. AIUB Graduate, specialized in bKash tokenized payment gateways, modern Next.js web systems, and Machine Learning.",
  keywords: [
    "MD Ferdous Sazid",
    "Ferdous Sazid",
    "Crochethia",
    "Crochethia Bangladesh",
    "bKash Payment Gateway",
    "Next.js Developer",
    "NestJS Developer",
    "Node.js Developer",
    "AIUB",
    "Jashore",
    "Khulna",
    "Software Engineer Bangladesh"
  ],
  authors: [{ name: "MD. Ferdous Sazid", url: "https://github.com/Ferdoussazid" }],
  openGraph: {
    title: "MD. Ferdous Sazid | Software Developer & Owner at Crochethia",
    description: "Software Engineer & Owner of Crochethia in Jashore, Khulna, Bangladesh. AIUB Graduate, bKash fintech integrations, Next.js, and ML.",
    url: "https://github.com/Ferdoussazid",
    siteName: "MD. Ferdous Sazid Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "MD. Ferdous Sazid Logo",
      },
      {
        url: "https://avatars.githubusercontent.com/u/78679926?v=4",
        width: 400,
        height: 400,
        alt: "MD. Ferdous Sazid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('portfolio-theme');
                let isDark = false;
                if (saved === 'dark') {
                  isDark = true;
                } else if (saved === 'light') {
                  isDark = false;
                } else {
                  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                }
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-50 text-slate-900 dark:bg-[#05070e] dark:text-slate-100 min-h-screen selection:bg-blue-600/30 selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
