import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Number CRM Solfware - Salesforce",
  description:
    "Personalize every experience along the customer journey with the Customer 360. Unify marketing, sales, service, commerce, and IT on the world's #1 CRM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../assets/images/salesforce-no-type-logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
