import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Cairo } from "next/font/google";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import useTextDirection from "../_hooks/useTextDirection";
import "./globals.css";
import { UserProvider } from "../_context/UserContext";

export const metadata: Metadata = {
  title: "كريبتو حلال",
  description: "Generated by create next app",
};

const cairo = Cairo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const dir = useTextDirection();
  const messages = useMessages();
  return (
    <html lang={locale} dir={dir}>
      <body className={cairo.className} suppressHydrationWarning={true}>
        <UserProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <div>{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
