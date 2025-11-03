import { Poppins } from "next/font/google"
import type { Metadata } from "next"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ButtonFlotanteCalificacion } from "@/components/button-flotante-calificacion"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", });

export const metadata: Metadata = {
  title: "SMARTPRICE",
  description: "Compara precios de productos de primera necesidad entre distintos supermercados del Perú. Ideal para ahorrar y tomar decisiones inteligentes.",
  authors: [{ name: "Alonso Ramos", url: "https://alonsoramos.netlify.app" }],
  creator: "Alonso Ramos",
  icons:{
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "tUbG3Yc-yQvaSMjgz4wvH2WVo2JWFF2DRewB0Js1DB8",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SMARTPRICE",
    description: "Compara precios de productos de primera necesidad entre distintos supermercados del Perú. Ideal para ahorrar y tomar decisiones inteligentes.",
    url: "https://smartprice-app.vercel.app",
    siteName: "SMARTPRICE",
    images: [
      {
        url: "https://smartprice-app.vercel.app/og.jpg",
        width: 1200,
        height: 630,
        alt: "SMARTPRICE",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMARTPRICE",
    description: "Compara precios de productos de primera necesidad entre distintos supermercados del Perú. Ideal para ahorrar y tomar decisiones inteligentes.",
    images: ["https://smartprice-app.vercel.app/og.jpg"],
  },
  alternates: {
    canonical: "https://smartprice-app.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 bg-gray-50">
                {children}
              </main>
              <Footer />
            </div>
            <ButtonFlotanteCalificacion />
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
