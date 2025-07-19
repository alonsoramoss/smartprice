"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { Producto } from "@/lib/data"

interface CartItem extends Producto {
  cantidad: number
}

interface CartContextType {
  items: CartItem[]
  addAlCarrito: (producto: Producto) => void
  eliminarDelCarrito: (productoId: string) => void
  updateCantidad: (productoId: string, cantidad: number) => void
  vaciarCarrito: () => void
  getTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const carritoGuardado = localStorage.getItem("cart")
    if (carritoGuardado) {
      setItems(JSON.parse(carritoGuardado))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addAlCarrito = (producto: Producto) => {
    setItems((itemsActuales) => {
      const itemExistente = itemsActuales.find((item) => item.id === producto.id)

      if (itemExistente) {
        return itemsActuales.map((item) => (item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item))
      }

      return [...itemsActuales, { ...producto, cantidad: 1 }]
    })
  }

  const eliminarDelCarrito = (productoId: string) => {
    setItems((itemsActuales) => itemsActuales.filter((item) => item.id !== productoId))
  }

  const updateCantidad = (productoId: string, cantidad: number) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(productoId)
      return
    }

    setItems((itemsActuales) => itemsActuales.map((item) => (item.id === productoId ? { ...item, cantidad } : item)))
  }

  const vaciarCarrito = () => {
    setItems([])
  }

  const getTotal = () => {
    return items.reduce((total, item) => total + item.precio * item.cantidad, 0)
  }

  return (
    <CartContext.Provider value={{ items, addAlCarrito, eliminarDelCarrito, updateCantidad, vaciarCarrito, getTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart debe usarse dentro de un CartProvider")
  }
  return context
}
