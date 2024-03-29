import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Starfield from "react-starfield";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhil Francis",
  description: "Software Engineer With A Product Mindset",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Starfield
        starCount={3000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      </body>
    </html>
  );
}
