"use client"

import type { Producto } from "@/lib/data"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Check, ShoppingCart } from "lucide-react"

interface ProductoCardProps {
  producto: Producto
}

export function ProductoCard({ producto }: ProductoCardProps) {
  const { addAlCarrito } = useCart()
  const [estaAgregado, setEstaAgregado] = useState(false)

  const manejarAddAlCarrito = () => {
    addAlCarrito(producto)
    setEstaAgregado(true)
    setTimeout(() => setEstaAgregado(false), 1000)
  }

  const manejarClicSupermercado = () => {
    window.open(producto.supermercadoUrl, "_blank")
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
      <CardContent className="p-3 sm:p-4 flex-1">
        <div className="relative aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={producto.imagen || "/placeholder.svg"}
            alt={producto.nombre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <Badge variant="secondary" className="absolute top-2 right-2 bg-gray-200/80 text-gray-700 text-xs">
            {producto.categoria}
          </Badge>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-gray-900 line-clamp-2 text-sm sm:text-base leading-tight">
            {producto.nombre}
          </h2>

          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-bold text-green-600">S/ {producto.precio.toFixed(2)}</span>
            <span className="text-xs sm:text-sm text-gray-500">{producto.unidad}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0 flex-col space-y-1.5 mt-auto">
        <div className="flex flex-col space-y-1.5 w-full">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={manejarClicSupermercado}
            className="w-full bg-transparent text-xs h-8 px-2"
          >
            <ExternalLink className="mr-1 flex-shrink-0" />
            <span className="truncate text-xs">{producto.supermercado}</span>
          </Button>

          <Button
            type="button"
            size="sm"
            onClick={manejarAddAlCarrito}
            disabled={estaAgregado}
            className="w-full text-xs h-8 px-2"
          >
            {estaAgregado ? (
              <>
                <Check className="mr-1 flex-shrink-0" />
                <span className="text-xs">Agregado</span>
              </>
            ) : (
              <>
                <ShoppingCart className="mr-1 flex-shrink-0" />
                <span className="text-xs">Agregar</span>
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
