import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import localFont from 'next/font/local'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WELCOME CHROME",
  description: "Chrome Universe short films",
};

const windsor = localFont({
  src: '../assets/chainprinter/Chainprinter Regular.ttf',
  variable: '--font-windsor',
})

const chainprinter = localFont({
  src: '../assets/windsor/Windsor Light Condensed Regular.otf',
  variable: '--font-windsor',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <title>WELCOME CHROME</title>
      </head>
      <body className={inter.className}>
      <StyledComponentsRegistry>
        {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
