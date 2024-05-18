import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@mantine/core/styles.css";
import "./globals.css";

import { AppShell } from "@/components";
import { CommonLocales, commonLocales } from "@/locales";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark">
          <AppShell title={commonLocales[CommonLocales.TITLE]}>
            {children}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
