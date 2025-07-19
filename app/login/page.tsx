"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { EyeOff, Eye } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mostrarPassword, setMostrarPassword] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const manejarLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (email === "demo@smartprice.com" && password === "demo123") {
      login()
      router.push("/")
    } else {
      setError("Credenciales incorrectas.")
      
      setTimeout(() => {
        setError("")
      }, 5000)
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-6 sm:py-8">
      <div className="w-full max-w-md space-y-4 sm:space-y-6">
        <Card>
          <CardHeader className="text-center pt-4 sm:pt-6 px-4 sm:px-6 pb-0">
            <CardTitle className="text-xl sm:text-2xl font-bold">Iniciar sesión</CardTitle>
            <CardDescription className="text-sm sm:text-base text-gray-600">
              Inicie sesión con su dirección de correo electrónico y contraseña a continuación.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-4 px-4 sm:px-6 pb-4 sm:pb-6">
            <form onSubmit={manejarLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm sm:text-base">
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={mostrarPassword ? "text" : "password"}
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="text-sm sm:text-base pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                  >
                    {mostrarPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription className="text-sm">{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full text-sm sm:text-base">
                Iniciar sesión
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
