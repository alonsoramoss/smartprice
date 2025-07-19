"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface BarraBusquedaProps {
    enBusqueda: (consulta: string) => void
    placeholder?: string
    }

    export function BarraBusqueda({ enBusqueda, placeholder = "Buscar productos..." }: BarraBusquedaProps) {
    const [consulta, setConsulta] = useState("")

    const manejarBusqueda = (value: string) => {
        setConsulta(value)
        enBusqueda(value)
    }

    const limpiarBusqueda = () => {
        setConsulta("")
        enBusqueda("")
    }

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={consulta}
                    onChange={(e) => manejarBusqueda(e.target.value)}
                    className="px-10 text-sm sm:text-base truncate"
                />
                {consulta && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={limpiarBusqueda}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
                    >
                        <X className="h-4 w-4 text-gray-400" />
                    </Button>
                )}
            </div>
        </div>
    )
}
