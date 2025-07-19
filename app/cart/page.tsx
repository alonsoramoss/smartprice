"use client"

import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Minus, Plus, ShoppingBag, Trash2, Lock } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { items, updateCantidad, eliminarDelCarrito, vaciarCarrito, getTotal } = useCart()
  const { estaAutenticado } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [mostrarDialogCompra, setMostrarDialogCompra] = useState(false)

  const manejarCompra = () => {
    if (!estaAutenticado) {
      router.push("/login")
      return
    }
    setMostrarDialogCompra(true)
  }

  const confirmarCompra = () => {
    const cantidadItem = items.length
    const total = getTotal()

    vaciarCarrito()

    toast({
      variant: "success",
      title: "¡Compra exitosa!",
      description: `Has comprado ${cantidadItem} producto${cantidadItem > 1 ? "s" : ""} por un total de S/ ${total.toFixed(2)}. ¡Gracias por tu compra!`,
      duration: 6000,
    })

    setMostrarDialogCompra(false)
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="text-center py-12 sm:py-16">
          <ShoppingBag className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 px-4">Agrega algunos productos para comenzar</p>
          <Button onClick={() => router.push("/")}>Continuar comprando</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Carrito de compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative h-20 w-20 sm:h-20 sm:w-20 flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src={item.imagen || "/placeholder.svg"}
                      alt={item.nombre}
                      fill
                      className="object-cover rounded-md pointer-events-none"
                    />
                  </div>

                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{item.nombre}</h3>
                    <p className="text-sm text-gray-600">{item.categoria}</p>
                    <p className="text-lg font-bold text-green-600">S/ {item.precio.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-center sm:justify-end space-x-2 flex-wrap">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateCantidad(item.id, item.cantidad - 1)}
                        disabled={item.cantidad <= 1}
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>

                      <span className="w-8 sm:w-12 text-center font-semibold text-sm sm:text-base">
                        {item.cantidad}
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateCantidad(item.id, item.cantidad + 1)}
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="ml-2 text-red-600 hover:text-red-700 h-8 w-8 sm:h-10 sm:w-10"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Resumen del pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2 sm:pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                    <span className="truncate pr-2">
                      {item.nombre} x{item.cantidad}
                    </span>
                    <span className="flex-shrink-0">S/ {(item.precio * item.cantidad).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="flex justify-between font-semibold text-base sm:text-lg">
                <span>Total</span>
                <span className="text-green-600">S/ {getTotal().toFixed(2)}</span>
              </div>

              {!estaAutenticado && (
                <Alert className="border-amber-200 bg-amber-50 text-amber-700">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 shrink-0" />
                    <AlertDescription className="text-xs sm:text-sm">
                      Debes iniciar sesión para poder realizar la compra.
                    </AlertDescription>
                  </div>
                </Alert>
              )}

              <Button onClick={manejarCompra} className="w-full text-sm sm:text-base" size="lg">
                {estaAutenticado ? (
                  "Comprar"
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Iniciar sesión para comprar
                  </>
                )}
              </Button>

              <Button variant="outline" onClick={() => router.push("/")} className="w-full text-sm sm:text-base">
                Continuar comprando
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <ConfirmationDialog
        open={mostrarDialogCompra}
        onOpenChange={setMostrarDialogCompra}
        title="Confirmar compra"
        description={`¿Estás seguro de que deseas comprar ${items.length} producto${items.length > 1 ? "s" : ""} por un total de S/ ${getTotal().toFixed(2)}?`}
        confirmText="Confirmar compra"
        cancelText="Cancelar"
        onConfirm={confirmarCompra}
      />
    </div>
  )
}
