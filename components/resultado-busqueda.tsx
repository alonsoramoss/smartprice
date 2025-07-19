import type { Producto } from "@/lib/data"
import { ProductoGrid } from "./producto-grid"

interface ResultadoBusquedaProps {
  productos: Producto[]
  consulta: string
  totalProductos: number
}

export function ResultadoBusqueda({ productos, consulta, totalProductos }: ResultadoBusquedaProps) {
  if (!consulta) {
    return <ProductoGrid productos={productos} />
  }

  if (productos.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16">
        <div className="mb-4">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🔍</span>
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">No encontramos productos que coincidan con "{consulta}"</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-left">
        <p className="text-sm sm:text-base text-gray-600">
          Se encontraron <span className="font-semibold text-green-600">{productos.length}</span> producto
          {productos.length !== 1 ? "s" : ""} para "{consulta}"
        </p>
      </div>
      <ProductoGrid productos={productos} />
    </div>
  )
}
