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
  generator: "v100.app",
  icons: {
    icon: [
      {
        url: "/ms-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ms-icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/ms-icon.png",
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
