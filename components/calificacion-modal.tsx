"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Star } from "lucide-react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

interface CalificacionModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function CalificacionModal({ open, onOpenChange }: CalificacionModalProps) {
    const [preguntaCalificacion1, setPreguntaCalificacion1] = useState<number>(0)
    const [preguntaCalificacion2, setPreguntaCalificacion2] = useState<number>(0)
    const [preferenciaDelivery, setPreferenciaDelivery] = useState<string>("")
    const { toast } = useToast()

    const handleClicEstrella = (numeroPregunta: number, calificacion: number) => {
        if (numeroPregunta === 1) setPreguntaCalificacion1(calificacion)
        if (numeroPregunta === 2) setPreguntaCalificacion2(calificacion)
    }

    const handleSubmit = () => {
        if (preguntaCalificacion1 === 0 || preguntaCalificacion2 === 0 || !preferenciaDelivery) {
            toast({
                variant: "destructive",
                title: "Campos incompletos",
                description: "Por favor completa todas las preguntas antes de enviar.",
                duration: 6000,
            })
            return
        }

        toast({
            variant: "success",
            title: "¡Gracias por tu calificación!",
            description: "Tu opinión nos ayuda a mejorar SmartPrice cada día.",
            duration: 6000,
        })

        setPreguntaCalificacion1(0)
        setPreguntaCalificacion2(0)
        setPreferenciaDelivery("")
        onOpenChange(false)
    }

    const EstrellaCalificacion = ({ calificacion, onCalificacionChange, numeroPregunta }: { calificacion: number; onCalificacionChange: (rating: number) => void; numeroPregunta: number }) => {
        return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((estrella) => (
            <button
                key={estrella}
                type="button"
                onClick={() => onCalificacionChange(estrella)}
                className="focus:outline-none transition-colors"
            >
                <Star className={`h-6 w-6 ${estrella <= calificacion ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} hover:text-yellow-400 hover:fill-yellow-400`} />
            </button>
            ))}
        </div>
        )
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                            <Star className="h-4 w-4 text-white" />
                        </div>
                        <span>Califica SmartPrice</span>
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-3">
                    <div className="space-y-3">
                        <Label className="text-sm font-medium">¿Qué te pareció SmartPrice?</Label>
                        <EstrellaCalificacion
                            calificacion={preguntaCalificacion1}
                            onCalificacionChange={(rating) => handleClicEstrella(1, rating)}
                            numeroPregunta={1}
                        />
                    </div>

                    <div className="space-y-3">
                        <Label className="text-sm font-medium">¿Lo recomendarías a tus contactos?</Label>
                        <EstrellaCalificacion
                            calificacion={preguntaCalificacion2}
                            onCalificacionChange={(rating) => handleClicEstrella(2, rating)}
                            numeroPregunta={2}
                        />
                    </div>

                    <div className="space-y-3">
                        <Label className="text-sm font-medium">¿Qué tipo de atención prefieres?</Label>
                        <RadioGroup value={preferenciaDelivery} onValueChange={setPreferenciaDelivery}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="delivery" id="delivery" />
                                <Label htmlFor="delivery" className="flex items-center font-normal space-x-2 cursor-pointer">
                                    <span>Delivery a domicilio</span>
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="presencial" id="presencial" />
                                <Label htmlFor="presencial" className="items-center font-normal space-x-2 cursor-pointer">
                                    <span>Atención presencial en tienda</span>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                <DialogFooter className="flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700">
                        Enviar calificación
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
