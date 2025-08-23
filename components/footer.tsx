"use client"

import Link from "next/link"
import { Home, ShoppingCart, User } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-6 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-white">SMARTPRICE</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Experiencia única para descubrir nuevas marcas y productos que se adapten a tus intereses y necesidades.
                        </p>
                    </div>

                    <div className="grid justify-start sm:justify-center">
                        <h3 className="text-start sm:text-center text-lg font-semibold text-white mb-4 sm:mb-0">Enlaces</h3>
                        <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                            <li>
                                <Link href="/" className="flex items-center text-sm hover:text-green-500 transition-colors">
                                    <Home className="h-4 w-4 mr-1" />
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="flex items-center text-sm hover:text-green-500 transition-colors">
                                    <ShoppingCart className="h-4 w-4 mr-1" />
                                    Carrito
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="flex items-center text-sm hover:text-green-500 transition-colors">
                                    <User className="h-4 w-4 mr-1" />
                                    Iniciar Sesión
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Separator className="bg-gray-800" />

            <div className="container mx-auto p-4">
                <div className="flex justify-center items-center">
                    <p className="text-sm text-gray-400">© {currentYear} SMARTPRICE</p>
                </div>
            </div>
        </footer>
    )
}
