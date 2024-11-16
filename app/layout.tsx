import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Load custom fonts using next/font/local
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Font weights range
  display: "swap", // Ensures fonts load without blocking rendering
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keplit Portfolio",
  description: "Showcasing projects and services by Keplit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta tags for responsiveness and additional features */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ThemeProvider manages themes (dark, light, or system) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Sets the default theme
          enableSystem // Enables matching the user's system theme
          disableTransitionOnChange // Prevents transitions during theme change
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
