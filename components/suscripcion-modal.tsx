"use client"

import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Crown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuscripcionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SuscripcionModal({ open, onOpenChange }: SuscripcionModalProps) {
  const { toast } = useToast()

  const handleSuscripcion = () => {
    toast({
      variant: "success",
      title: "¡Suscripción exitosa!",
      description: "Te has suscrito a SmartPrice Premium por S/ 22/mes. ¡Disfruta de todos los beneficios!",
      duration: 6000,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-blue-600">
            <Crown className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-xl font-bold">SmartPrice Premium</DialogTitle>
          <DialogDescription>Desbloquea beneficios exclusivos y mejora tu experiencia de compra.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">S/ 22</div>
            <div className="text-sm text-gray-600">por mes</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-sm">Delivery gratuito ilimitado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-sm">Descuentos exclusivos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-sm">Soporte prioritario</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-sm">Acceso anticipado a ofertas</span>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col space-y-2 sm:flex-row sm:space-y-0">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Tal vez después
          </Button>
          <Button type="button" onClick={handleSuscripcion} className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
            Suscribirse ahora
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
