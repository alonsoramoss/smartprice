"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { CalificacionModal } from "./calificacion-modal"

export function ButtonFlotanteCalificacion() {
    const [mostarCalificacionModal, setMostarCalificacionModal] = useState(false)

    return (
        <>
            <div className="fixed bottom-3 right-3 z-40 flex items-center space-x-2">
                <div className="bg-white px-3 py-2 rounded-lg shadow-md border">
                    <span className="text-xs sm:text-sm font-medium text-black">Califica tu experiencia</span>
                </div>

                <Button
                    type="button"
                    size="icon"
                    onClick={() => setMostarCalificacionModal(true)}
                    className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0"
                >
                    <Star />
                </Button>

                <CalificacionModal open={mostarCalificacionModal} onOpenChange={setMostarCalificacionModal} />
            </div>
        </>
    )
}
