"use client"

import { useState } from "react"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DeliveryConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cantidadItem: number
  subtotal: number
  onConfirm: (incluyeDelivery: boolean) => void
}

const COSTO_DELIVERY = 5.0

export function DeliveryConfirmationDialog({ open, onOpenChange, cantidadItem, subtotal, onConfirm }: DeliveryConfirmationDialogProps) {
  const [incluyeDelivery, setIncluyeDelivery] = useState(false)

  const total = incluyeDelivery ? subtotal + COSTO_DELIVERY : subtotal

  const handleConfirm = () => {
    onConfirm(incluyeDelivery)
  }

  const handleCancel = () => {
    onOpenChange(false)
    setIncluyeDelivery(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center space-x-2">
            <span>Confirmar compra</span>
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-4">
              <p className="text-gray-600">
                Estás a punto de comprar {cantidadItem} producto{cantidadItem > 1 ? "s" : ""}.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>
                    Subtotal ({cantidadItem} producto{cantidadItem > 1 ? "s" : ""})
                  </span>
                  <span>S/ {subtotal.toFixed(2)}</span>
                </div>

                <div className="space-y-3">
                  <Separator />
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="delivery"
                      checked={incluyeDelivery}
                      onCheckedChange={(checked) => setIncluyeDelivery(checked as boolean)}
                    />
                    <div className="flex-1">
                      <label htmlFor="delivery" className="text-sm font-medium cursor-pointer flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-green-600" />
                          <span>Delivery a domicilio</span>
                        </div>
                        <span className="text-sm font-medium">S/ {COSTO_DELIVERY.toFixed(2)}</span>
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-base">
                  <span>Total a pagar</span>
                  <span className="text-green-600">S/ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button variant="outline" onClick={handleCancel} className="w-full sm:w-auto bg-transparent">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
            Confirmar compra S/ {total.toFixed(2)}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
