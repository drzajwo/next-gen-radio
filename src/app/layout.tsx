import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StoreProvider from "./StoreProvider";

import "./globals.css";

import { AppBar } from "@/components";
import { CommonLocales, commonLocales } from "@/locales";
import { darkTheme } from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: commonLocales[CommonLocales.TITLE],
  description: commonLocales[CommonLocales.DESCRIPTION],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider theme={darkTheme}>
            <AppBar title={commonLocales[CommonLocales.TITLE]} />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
