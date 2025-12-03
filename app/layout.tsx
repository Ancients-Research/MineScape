import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import "./globals.css"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-minecraft",
})

export const metadata: Metadata = {
  title: "MineScape - Decentralized Sandbox World-Building",
  description:
    "MineScape is a decentralized sandbox protocol that empowers users to collaboratively create, own, and monetize virtual worlds built on Filecoin.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} font-minecraft antialiased`}>{children}</body>
    </html>
  )
}
