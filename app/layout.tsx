import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DemoBanner from "@/components/DemoBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Goods Shed | Restaurant & Farmers Market Canterbury",
  description:
    "The Goods Shed is a farmers market, food hall and restaurant in Canterbury, Kent. Fresh local produce, seasonal menus and a unique dining experience since 2002.",
  keywords: "The Goods Shed, Canterbury restaurant, farmers market, Kent food, seasonal dining, local produce",
  openGraph: {
    title: "The Goods Shed | Restaurant & Farmers Market Canterbury",
    description: "Farmers Market, Food Hall & Restaurant in Canterbury, Kent.",
    url: "https://thegoodsshed.co.uk",
    siteName: "The Goods Shed",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="grain">
      <body className="antialiased">
        <DemoBanner />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
