import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClothEra – Women's Clothing Brand",
  description:
    "Discover ClothEra's premium women's clothing collections. Elegance, tradition, and modern style.",
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
