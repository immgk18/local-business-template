import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Urban Bites Café | Fresh Food & Great Moments",description:"A modern local café website demo by Gokul Krishna."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}