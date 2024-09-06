import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import PaymentFooter from "@/components/PaymentFooter";
import { ThemeProvider } from "@/components/ContextApi";
import { Toaster } from "@/components/ui/sonner"
import SessionProviderPage from "@/components/SessionProviderPage";
export const metadata: Metadata = {
  title: "Ecomart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif" }}>
        <SessionProviderPage>
          <ThemeProvider>
            <Header />
            {children}
            <Toaster />
            <Footer />
            <PaymentFooter />
          </ThemeProvider>
        </SessionProviderPage>
      </body>
    </html>
  );
}
