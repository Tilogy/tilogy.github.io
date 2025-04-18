import "@/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeProvider from "@/app/theme-provider";

export const metadata: Metadata = {
  title: "Tilozign",
  description: "Tiffany Sinakhot's Creative Portfolio",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} snap-y scroll-smooth`}
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
