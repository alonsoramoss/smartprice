"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"
import { SuscripcionModal } from "./suscripcion-modal"

interface SuscripcionButtonProps {
    variant?: "header" | "standalone"
    size?: "sm" | "lg"
}

export function SuscripcionButton({ variant = "standalone", size = "lg" }: SuscripcionButtonProps) {
    const [mostrarModal, setMostrarModal] = useState(false)

    if (variant === "header") {
        return (
            <>
                <Button
                    onClick={() => setMostrarModal(true)}
                    variant="outline"
                    size="sm"
                    className="h-9 px-3 sm:h-10 sm:px-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white hover:text-white"
                >
                    <Crown className="h-4 w-4 sm:mr-1" />
                    <span className="hidden sm:inline">Suscribirse</span>
                </Button>
                <SuscripcionModal open={mostrarModal} onOpenChange={setMostrarModal} />
            </>
        )
    }

    return (
        <>
            <Button
                onClick={() => setMostrarModal(true)}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg"
                size={size}
            >
                <Crown className="h-4 w-4 mr-1" />
                Suscribirse
            </Button>
            <SuscripcionModal open={mostrarModal} onOpenChange={setMostrarModal} />
        </>
    )
}
