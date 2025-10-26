import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/utils/theme-provider";
import "@/app/i18n/index";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />;

export const metadata: Metadata = {
  title: "Portfolio - Matheus",
  description: "Portfolio Matheus - Desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} dark`}>
        <ThemeProvider>
          <Header />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
