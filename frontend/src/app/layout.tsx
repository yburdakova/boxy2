import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-poppins", 
});
export const metadata: Metadata = {
  title: "Boxy 2.0",
  description: "Application for High-Volume Scanning Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
