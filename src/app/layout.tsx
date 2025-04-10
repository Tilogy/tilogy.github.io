import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import ThemeProvider from "@/app/theme-provider";
export const metadata: Metadata = {
  title: "Tilozign",
  description: "Tiffany Sinakhot's Creative Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
