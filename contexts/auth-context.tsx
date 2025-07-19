"use client"

import { createContext, useContext, useState, useEffect } from "react"

interface AuthContextType {
  estaAutenticado: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [estaAutenticado, setEstaAutenticado] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem("estaAutenticado")
    if (auth === "true") {
      setEstaAutenticado(true)
    }
  }, [])

  const login = () => {
    setEstaAutenticado(true)
    localStorage.setItem("estaAutenticado", "true")
  }

  const logout = () => {
    setEstaAutenticado(false)
    localStorage.removeItem("estaAutenticado")
  }

  return <AuthContext.Provider value={{ estaAutenticado, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider")
  }
  return context
}
