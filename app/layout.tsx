import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/ui/Logo";
import AppWrapper from "./AppWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indie App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // console.log(children?.childProp?.);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
