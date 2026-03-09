'use client'

import Link from 'next/link'
import { Sparkles, Store, Smile, ShoppingBag, Utensils, Heart } from 'lucide-react'
import Navbar from './components/Navbar'

const demos = [
  {
    title: 'Panadería Artesanal',
    slug: 'panaderia',
    description: 'Sitio web para panaderías con catálogo de productos, información de contacto y opciones para ventas al por mayor',
    icon: Store,
    color: 'from-amber-500 to-orange-600',
    bgHover: 'hover:bg-amber-500/10',
  },
  {
    title: 'Clínica Dental',
    slug: 'dentista',
    description: 'Landing page profesional para dentistas con sistema de citas, tabla de precios y seguros aceptados',
    icon: Smile,
    color: 'from-blue-400 to-cyan-600',
    bgHover: 'hover:bg-blue-500/10',
  },
  {
    title: 'Tienda Online',
    slug: 'tienda',
    description: 'E-commerce completo con carrito de compras, pagos en línea y gestión de inventario',
    icon: ShoppingBag,
    color: 'from-purple-500 to-pink-600',
    bgHover: 'hover:bg-purple-500/10',
  },
  {
    title: 'Restaurante',
    slug: 'restaurante',
    description: 'Sitio web elegante para restaurantes con menú digital, reservaciones y galería de fotos',
    icon: Utensils,
    color: 'from-red-500 to-rose-600',
    bgHover: 'hover:bg-red-500/10',
  },
  {
    title: 'Spa & Bienestar',
    slug: 'spa',
    description: 'Página profesional para spas y centros de bienestar con servicios y sistema de reservas',
    icon: Heart,
    color: 'from-emerald-400 to-teal-600',
    bgHover: 'hover:bg-emerald-500/10',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Demos de Sitios Web Profesionales
          </h2>
          <p className="text-xl text-dark-text/90 max-w-3xl mx-auto leading-relaxed">
            Explore nuestras plantillas personalizadas para diferentes tipos de negocios. 
            Cada demo muestra las mejores prácticas de diseño y funcionalidad específica para su industria.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <Link
                key={demo.slug}
                href={`/${demo.slug}`}
                className={`group p-8 rounded-2xl border border-dark-border bg-dark-surface/50 backdrop-blur-sm transition-all duration-300 ${demo.bgHover} hover:border-dark-border/80 hover:shadow-xl hover:shadow-dark-bg/50 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${demo.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {demo.title}
                </h3>
                <p className="text-dark-text/80 leading-relaxed mb-6">
                  {demo.description}
                </p>

                <div className="flex items-center text-dark-accent font-medium">
                  Ver Demo
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Por qué elegir nuestras plantillas?
          </h3>
          <p className="text-dark-text/80 max-w-2xl mx-auto">
            Cada sitio web está diseñado con las mejores prácticas de la industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Diseño Responsive</h4>
            <p className="text-dark-text/80">
              Perfecto en todos los dispositivos, desde móviles hasta pantallas grandes
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Rápido y Optimizado</h4>
            <p className="text-dark-text/80">
              Carga ultrarrápida con las últimas tecnologías web
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Totalmente Personalizable</h4>
            <p className="text-dark-text/80">
              Adaptamos cada detalle a las necesidades de su negocio
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border/50 bg-dark-surface/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-dark-text/80">
            <p className="mb-2">© 2026 Keter Software. Todos los derechos reservados.</p>
            <p className="text-sm">
              Costa Rica • Soluciones web profesionales para su negocio
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
