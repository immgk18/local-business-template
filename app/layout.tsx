import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Bites Café | Ambattur",
  description: "Fresh food, great coffee and good moments in Ambattur, Chennai.",
  keywords: ["cafe in Ambattur", "restaurant Ambattur", "Urban Bites Cafe", "food Chennai"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
