import { Metadata } from 'next'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export const metadata: Metadata = {
    title: "Página no encontrada - SmartPrice",
    description: "La página que buscas no existe. Vuelve al inicio para seguir comparando precios y tomando decisiones inteligentes de compra.",
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: "Página no encontrada - SmartPrice",
        description: "La página que buscas no existe. Vuelve al inicio para seguir comparando precios y tomando decisiones inteligentes de compra.",
        url: "https://smartprice-app.vercel.app",
        siteName: "SmartPrice",
        images: [
            {
                url: "https://smartprice-app.vercel.app/og.jpg",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Página no encontrada - SmartPrice",
        description: "La página que buscas no existe. Vuelve al inicio para seguir comparando precios y tomando decisiones inteligentes de compra.",
        images: ["https://smartprice-app.vercel.app/og.jpg"],
    },
}

export default function NotFound() {
    return (
        <div className="flex items-center justify-center px-4 py-8">
            <div className="max-w-2xl mx-auto text-center">
                <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 sm:p-12">
                        <div className="mb-8">
                            <h1 className="text-8xl sm:text-9xl font-bold text-green-500 mb-4">404</h1>
                        </div>

                        <div className="mb-8 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">¡Oops! Página no encontrada</h2>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                La página que buscas no existe o ha sido movida.
                                <br className="hidden sm:block" />
                                No te preocupes, te ayudamos a encontrar lo que necesitas.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link href="/">
                                <Button
                                    type="button"
                                    size="lg"
                                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600"
                                >
                                    <Home className="mr-1" /> Volver al inicio
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
