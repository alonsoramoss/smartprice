"use client"

import { useState, useMemo } from "react"
import { productos } from "@/lib/data"
import { BarraBusqueda } from "@/components/barra-busqueda"
import { ResultadoBusqueda } from "@/components/resultado-busqueda"

export default function HomePage() {
  const [consultaIngresada, setConsultaIngresada] = useState("")

  const productosFiltrados = useMemo(() => {
    if (!consultaIngresada.trim()) {
      return productos
    }

    const consulta = consultaIngresada.toLowerCase().trim()
    return productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(consulta) ||
        producto.categoria.toLowerCase().includes(consulta) ||
        producto.supermercado.toLowerCase().includes(consulta),
    )
  }, [consultaIngresada])

  const manejarBusqueda = (consulta: string) => {
    setConsultaIngresada(consulta)
  }
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Productos de Primera Necesidad</h1>
        <p className="text-sm sm:text-base text-gray-600 px-4">Encuentra los mejores precios en productos esenciales</p>
      </div>

      <div className="my-6">
        <BarraBusqueda enBusqueda={manejarBusqueda} placeholder="Buscar por nombre, categoría o supermercado..." />
      </div>

      <ResultadoBusqueda productos={productosFiltrados} consulta={consultaIngresada} totalProductos={productos.length} />
    </div>
  )
}
