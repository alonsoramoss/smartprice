"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"
import { SuscripcionModal } from "./suscripcion-modal"

export function SuscripcionButton() {
    const [mostrarModal, setMostrarModal] = useState(false)
    
    return (
        <>
            <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setMostrarModal(true)}
                className="h-9 px-3 sm:h-10 sm:px-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white hover:text-white"
            >
                <Crown className="sm:mr-1" />
                <span className="hidden sm:inline">Suscribirse</span>
            </Button>
            <SuscripcionModal open={mostrarModal} onOpenChange={setMostrarModal} />
        </>
    )
}
