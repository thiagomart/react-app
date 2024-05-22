import React from 'react';
import type { Metadata } from "next";

import "./globals.css";
import "./shared.css";


export const metadata: Metadata = {
  title: "VerifyMyAge",
  description: "Age Verification | VerifyMyAge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
