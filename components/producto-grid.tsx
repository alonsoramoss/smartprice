import { ProductoCard } from "./producto-card"
import type { Producto } from "@/lib/data"

interface ProductGridProps {
  productos: Producto[]
}

export function ProductoGrid({ productos }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  )
}
