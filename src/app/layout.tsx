import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ClerkProvider } from "@clerk/nextjs"

const nunito = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lama Dev Social Media App",
  description: "Social media app built with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <Navbar />
          </div>
          <main className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
