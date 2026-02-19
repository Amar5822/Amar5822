import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kesariya Flower Decoration - Premium Marriage Ceremony Services",
  description:
    "Transform your special day with Kesariya Flower Decoration. Expert wedding services including venues, mandap decoration, catering, photography, and more.",
  keywords:
    "wedding decoration, marriage ceremony, mandap decoration, wedding venue, catering services, wedding photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
