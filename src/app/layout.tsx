import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "../app/page.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainContainer from "@/components/mainContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posts Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, styles.body)}>
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </body>
    </html>
  );
}
