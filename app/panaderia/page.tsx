'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Croissant, 
  Cake, 
  Cookie,
  Wheat,
  ShoppingCart,
  Star,
  ArrowLeft,
  ChefHat,
  Award,
  Heart,
  Package,
  Facebook,
  Instagram
} from 'lucide-react'

const products = [
  {
    category: 'Pan Artesanal',
    icon: Wheat,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
    items: [
      { 
        name: 'Baguette Francesa', 
        price: '₡1,500', 
        description: 'Pan crujiente recién horneado con corteza dorada',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop'
      },
      { 
        name: 'Pan Integral', 
        price: '₡2,000', 
        description: 'Rico en fibra y nutrientes, perfecto para el desayuno',
        image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?w=400&h=300&fit=crop'
      },
      { 
        name: 'Ciabatta', 
        price: '₡2,200', 
        description: 'Tradicional italiano con miga suave y aireada',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop'
      },
      { 
        name: 'Pan de Masa Madre', 
        price: '₡2,800', 
        description: 'Fermentación natural de 48 horas',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop'
      },
    ],
  },
  {
    category: 'Repostería',
    icon: Cake,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
    items: [
      { 
        name: 'Torta de Chocolate', 
        price: '₡18,000', 
        description: '8 porciones, chocolate belga premium',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
      },
      { 
        name: 'Tres Leches', 
        price: '₡15,000', 
        description: 'Receta tradicional costarricense',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop'
      },
      { 
        name: 'Cheesecake', 
        price: '₡20,000', 
        description: 'Cremoso y delicioso con base de galleta',
        image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=300&fit=crop'
      },
      { 
        name: 'Torta de Zanahoria', 
        price: '₡16,000', 
        description: 'Con nueces y crema de queso suave',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop'
      },
    ],
  },
  {
    category: 'Pastelería',
    icon: Croissant,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
    items: [
      { 
        name: 'Croissant de Mantequilla', 
        price: '₡1,200', 
        description: 'Hojaldrado perfecto con mantequilla francesa',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop'
      },
      { 
        name: 'Pain au Chocolat', 
        price: '₡1,500', 
        description: 'Con chocolate oscuro premium',
        image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=400&h=300&fit=crop'
      },
      { 
        name: 'Empanadas', 
        price: '₡1,000', 
        description: 'Dulces o saladas, recién horneadas',
        image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&h=300&fit=crop'
      },
      { 
        name: 'Conchas', 
        price: '₡900', 
        description: 'Pan dulce mexicano tradicional',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      },
    ],
  },
  {
    category: 'Galletas',
    icon: Cookie,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop',
    items: [
      { 
        name: 'Galletas de Chispas', 
        price: '₡800', 
        description: 'Unidad, chocolate chips belga',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop'
      },
      { 
        name: 'Galletas de Avena', 
        price: '₡700', 
        description: 'Con pasas y canela aromática',
        image: 'https://images.unsplash.com/photo-1590080876877-dc3bfa6b1b8e?w=400&h=300&fit=crop'
      },
      { 
        name: 'Alfajores', 
        price: '₡1,200', 
        description: 'Con dulce de leche casero',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop'
      },
      { 
        name: 'Macarons', 
        price: '₡1,500', 
        description: 'Sabores variados, técnica francesa',
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop'
      },
    ],
  },
]

export default function PanaderiaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Pan Artesanal')
  
  const currentCategory = products.find(cat => cat.category === selectedCategory) || products[0]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/50">
                <Wheat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-amber-400">Le Pétrin</h1>
                <p className="text-xs text-amber-600 tracking-widest uppercase">Artisan Bakery</p>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver a Demos</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=1080&fit=crop"
            alt="Bakery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-amber-900/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-amber-600/30 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-amber-500/30">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Horneado artesanal desde 1995</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Sabor Tradicional,<br />Calidad Excepcional
          </h2>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-8">
            Pan recién horneado todos los días. Repostería fina para cada ocasión especial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#productos"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-amber-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ver Productos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-800/30 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-amber-800/40 transition-all duration-200 border-2 border-white/20"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Nuestros Productos</h3>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Cada producto es elaborado con ingredientes de la más alta calidad
          </p>
        </div>

        <div className="space-y-16">
          {products.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.category}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-amber-900">{category.category}</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="text-lg font-bold text-amber-900 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h5>
                        <span className="text-xl font-bold text-orange-600">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-100 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center">
                <div>
                  <ShoppingCart className="w-12 h-12 mb-6" />
                  <h3 className="text-4xl font-bold mb-4">Ventas al Por Mayor</h3>
                  <p className="text-xl text-amber-100 leading-relaxed">
                    ¿Tiene un negocio? Ofrecemos precios especiales para compras al por mayor.
                    Abastecemos hoteles, restaurantes, cafeterías y más.
                  </p>
                </div>
              </div>
              <div className="p-12">
                <h4 className="text-2xl font-bold text-amber-900 mb-6">Beneficios Mayoristas</h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-amber-800">Descuentos de hasta 30% en pedidos grandes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-amber-800">Entrega gratuita en San José y alrededores</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-amber-800">Productos personalizados según sus necesidades</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-amber-800">Horarios de entrega flexibles</span>
                  </li>
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg"
                >
                  Solicitar Cotización
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Contáctenos</h3>
          <p className="text-xl text-amber-700">Estamos aquí para servirle</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-3">Teléfono</h4>
            <p className="text-amber-800 mb-2">
              <a href="tel:+50622341234" className="hover:text-orange-600 transition-colors">
                +506 2234-1234
              </a>
            </p>
            <p className="text-amber-800">
              <a href="tel:+50688887777" className="hover:text-orange-600 transition-colors">
                +506 8888-7777
              </a>
            </p>
            <p className="text-sm text-amber-600 mt-2">Lun - Sáb: 6:00 AM - 8:00 PM</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-3">Email</h4>
            <p className="text-amber-800 mb-2">
              <a href="mailto:info@eltrigal.cr" className="hover:text-orange-600 transition-colors break-all">
                info@eltrigal.cr
              </a>
            </p>
            <p className="text-amber-800">
              <a href="mailto:ventas@eltrigal.cr" className="hover:text-orange-600 transition-colors break-all">
                ventas@eltrigal.cr
              </a>
            </p>
            <p className="text-sm text-amber-600 mt-2">Respuesta en 24 horas</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-3">Ubicación</h4>
            <p className="text-amber-800 leading-relaxed">
              Avenida Central, San José<br />
              100 metros norte del Parque Central<br />
              Costa Rica
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="w-8 h-8 text-orange-600" />
            <h4 className="text-2xl font-bold text-amber-900">Horario de Atención</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center py-3 border-b border-orange-100">
                <span className="font-semibold text-amber-900">Lunes - Viernes</span>
                <span className="text-orange-600 font-medium">6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-orange-100">
                <span className="font-semibold text-amber-900">Sábado</span>
                <span className="text-orange-600 font-medium">6:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-amber-900">Domingo</span>
                <span className="text-orange-600 font-medium">7:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-orange-200">
              <p className="text-amber-900 mb-4">
                <strong>Pedidos Especiales:</strong> Realizar con 48 horas de anticipación
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wheat className="w-6 h-6" />
                <span className="text-xl font-bold">Panadería El Trigal</span>
              </div>
              <p className="text-amber-200 leading-relaxed">
                Más de 25 años horneando felicidad para las familias costarricenses.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#productos" className="hover:text-white transition-colors">Productos</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pedidos Especiales</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Newsletter</h5>
              <p className="text-amber-200 mb-4">
                Reciba ofertas especiales y novedades
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="su@email.com"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-amber-800 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-r-lg transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-8 text-center text-amber-200">
            <p>© 2026 Panadería El Trigal. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
              Demo creado por <a href="/" className="text-white hover:underline">Keter Software</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
