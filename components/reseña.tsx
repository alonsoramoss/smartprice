import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, TrendingUp, Heart } from "lucide-react"

export function Reseña() {
    return (
        <Card className="mb-6 sm:mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6 sm:p-8">
                <div className="text-center space-y-4">
                    <p className="text-sm sm:text-base text-gray-700">
                        <strong>SmartPrice</strong> es una aplicación innovadora que te permite descubrir y explorar marcas y
                        productos de manera interactiva. Con una interfaz intuitiva y fácil de usar, SmartPrice te ofrece una
                        experiencia única para descubrir nuevas marcas y productos que se adapten a tus intereses y necesidades.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        <div className="flex flex-col items-center space-y-2 p-3 bg-white/60 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                            <span className="text-xs sm:text-sm font-medium text-center">Descubre nuevas marcas y productos</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 p-3 bg-white/60 rounded-lg">
                            <Star className="h-6 w-6 text-green-600" />
                            <span className="text-xs sm:text-sm font-medium text-center">Explora categorías y tendencias</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 p-3 bg-white/60 rounded-lg">
                            <Users className="h-6 w-6 text-green-600" />
                            <span className="text-xs sm:text-sm font-medium text-center">Interactúa con la comunidad</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 p-3 bg-white/60 rounded-lg">
                            <Heart className="h-6 w-6 text-green-600" />
                            <span className="text-xs sm:text-sm font-medium text-center">Recomendaciones personalizadas</span>
                        </div>
                    </div>

                    <div className="mt-6 text-left max-w-3xl mx-auto">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">¿Qué puedes hacer con SmartPrice?</h3>
                        <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                            <li className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Descubre marcas y productos que se adapten a tus intereses.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Explora categorías y tendencias para estar al día con lo último en el mercado.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>
                                Comparte tus favoritos con la comunidad y descubre nuevos productos recomendados por otros usuarios.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 p-4 bg-green-100 rounded-lg">
                        <p className="text-sm sm:text-base font-medium text-green-800">
                            ¡Descarga SmartPrice hoy mismo y comienza a descubrir el mundo de las marcas y productos de una manera
                            nueva y emocionante!
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
