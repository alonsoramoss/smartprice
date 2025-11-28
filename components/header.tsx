"use client"

import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SuscripcionButton } from "./suscripcion-button"
import { Button } from "@/components/ui/button"
import { ShoppingCart, LogOut, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ConfirmationDialog } from "./ui/confirmation-dialog"

export function Header() {
  const { estaAutenticado, logout } = useAuth()
  const { items } = useCart()
  const router = useRouter()
  const [mostrarDialogLogout, setMostrarDialogLogout] = useState(false)

  const totalItems = items.reduce((sum, item) => sum + item.cantidad, 0)

  const manejarLogout = () => {
    setMostrarDialogLogout(true)
  }

  const confirmarLogout = () => {
    logout()
    router.push("/")
    setMostrarDialogLogout(false)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-1" aria-label="Ir a la página principal">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <Image src="/logo.png" alt="Logo de SmartPrice" fill className="object-contain" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">SmartPrice</span>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <SuscripcionButton />
            <Link href="/cart" aria-label="Ir al carrito">
              <Button
                type="button"
                variant="outline"
                size="sm"
                aria-label="Ir al carrito"
                className="relative bg-transparent h-9 px-3 sm:h-10 sm:px-4"
              >
                <ShoppingCart className="sm:mr-1" />
                <span className="hidden sm:inline">Carrito</span>
                {totalItems > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {estaAutenticado ? (
              <Button
                type="button"
                size="sm"
                onClick={manejarLogout}
                aria-label="Cerrar sesión"
                className="h-9 px-3 sm:h-10 sm:px-4"
              >
                <LogOut className="sm:mr-1" />
                <span className="hidden sm:inline">Cerrar sesión</span>
              </Button>
            ) : (
              <Link href="/login" aria-label="Iniciar sesión">
                <Button 
                  type="button"
                  size="sm"
                  aria-label="Iniciar sesión"
                  className="h-9 px-3 sm:h-10 sm:px-4"
                >
                  <User className="sm:mr-1" />
                  <span className="hidden sm:inline">Iniciar sesión</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ConfirmationDialog
        open={mostrarDialogLogout}
        onOpenChange={setMostrarDialogLogout}
        title="Cerrar sesión"
        description="¿Estás seguro de que deseas cerrar sesión?"
        confirmText="Cerrar sesión"
        cancelText="Cancelar"
        onConfirm={confirmarLogout}
        variant="destructive"
      />
    </header>
  )
}
