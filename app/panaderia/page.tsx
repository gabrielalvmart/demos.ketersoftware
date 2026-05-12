'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Cake,
  CheckCircle,
  ChefHat,
  Clock,
  Cookie,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Package,
  Phone,
  ShoppingCart,
  Wheat,
} from 'lucide-react'

const productLines = [
  {
    category: 'Pan Artesanal',
    icon: Wheat,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=900&fit=crop',
    note: 'Fermentaciones lentas, cortezas profundas y harinas seleccionadas.',
    items: [
      {
        name: 'Baguette Francesa',
        price: '₡1,500',
        description: 'Corteza crujiente, miga ligera y horneado de la mañana.',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=700&h=520&fit=crop',
      },
      {
        name: 'Pan Integral de Semillas',
        price: '₡2,200',
        description: 'Trigo entero, linaza, ajonjolí y un toque de miel local.',
        image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?w=700&h=520&fit=crop',
      },
      {
        name: 'Masa Madre 48h',
        price: '₡2,900',
        description: 'Acidez elegante, alvéolos abiertos y fermentación natural.',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=700&h=520&fit=crop',
      },
    ],
  },
  {
    category: 'Reposteria Fina',
    icon: Cake,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=900&fit=crop',
    note: 'Tortas, postres y acabados elegantes para fechas que merecen memoria.',
    items: [
      {
        name: 'Torta de Chocolate Belga',
        price: '₡18,000',
        description: 'Ganache sedoso, bizcocho húmedo y decoración personalizada.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&h=520&fit=crop',
      },
      {
        name: 'Tres Leches Premium',
        price: '₡15,000',
        description: 'Receta costarricense con crema fresca y vainilla real.',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&h=520&fit=crop',
      },
      {
        name: 'Cheesecake de Temporada',
        price: '₡20,000',
        description: 'Base de galleta, queso crema suave y fruta fresca.',
        image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=700&h=520&fit=crop',
      },
    ],
  },
  {
    category: 'Pasteleria',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&h=900&fit=crop',
    note: 'Hojaldres dorados, mantequilla de calidad y vitrinas siempre frescas.',
    items: [
      {
        name: 'Croissant de Mantequilla',
        price: '₡1,200',
        description: 'Capas finas, aroma tostado y acabado brillante.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&h=520&fit=crop',
      },
      {
        name: 'Pain au Chocolat',
        price: '₡1,500',
        description: 'Chocolate oscuro, masa laminada y horneado diario.',
        image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=700&h=520&fit=crop',
      },
      {
        name: 'Empanadas Dulces',
        price: '₡1,000',
        description: 'Rellenos de fruta de temporada y azúcar especiada.',
        image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=700&h=520&fit=crop',
      },
    ],
  },
  {
    category: 'Galletas',
    icon: Cookie,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&h=900&fit=crop',
    note: 'Pequeñas indulgencias para cafeterías, eventos y regalos corporativos.',
    items: [
      {
        name: 'Chispas de Chocolate',
        price: '₡800',
        description: 'Chocolate semiamargo, borde crujiente y centro suave.',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&h=520&fit=crop',
      },
      {
        name: 'Alfajores con Dulce de Leche',
        price: '₡1,200',
        description: 'Maicena delicada, coco fino y relleno casero.',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=700&h=520&fit=crop',
      },
      {
        name: 'Macarons de Temporada',
        price: '₡1,500',
        description: 'Textura delicada, colores sobrios y sabores rotativos.',
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=700&h=520&fit=crop',
      },
    ],
  },
]

const benefits = [
  'Descuentos por volumen para hoteles, cafeterías y restaurantes',
  'Entrega programada en San José y alrededores',
  'Etiquetas, empaques y recetas adaptadas a su marca',
  'Producción temprana para vitrinas listas antes de abrir',
]

export default function PanaderiaPage() {
  const [selectedCategory, setSelectedCategory] = useState(productLines[0].category)
  const currentCategory = productLines.find((line) => line.category === selectedCategory) || productLines[0]
  const CurrentIcon = currentCategory.icon

  return (
    <div className="min-h-screen bg-[#fff7e8] text-[#2a170f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#2a170f]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#d9883d]">
              <Wheat className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-semibold tracking-tight">Le Petrin</h1>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5c983]">Artisan Bakery</p>
            </div>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#f9dca7] transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Volver a demos</span>
          </Link>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden pt-24">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=2200&h=1400&fit=crop"
          alt="Mesa con panes artesanales recien horneados"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,23,15,.94)_0%,rgba(42,23,15,.72)_45%,rgba(42,23,15,.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fff7e8] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#f5c983]/30 bg-[#f5c983]/10 px-4 py-2 text-sm font-semibold text-[#ffe1a8] backdrop-blur">
              <Award className="h-4 w-4" />
              Horneado artesanal desde 1995
            </div>
            <h2 className="max-w-[22rem] break-words font-serif text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:max-w-3xl sm:text-6xl lg:text-7xl">
              Pan que se vende antes de salir del horno.
            </h2>
            <p className="mt-6 max-w-[22rem] text-lg leading-8 text-[#fff1cf] sm:max-w-2xl">
              Una panadería con oficio, aroma y presencia: panes de fermentación lenta, repostería fina y pedidos
              especiales para hogares, eventos y negocios.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#productos" className="inline-flex items-center gap-2 bg-[#f5c983] px-5 py-3 text-sm font-bold text-[#2a170f] transition hover:bg-white">
                Ver vitrina
                <ShoppingCart className="h-4 w-4" />
              </a>
              <a href="#mayoreo" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Ventas al por mayor
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-[22rem] min-w-0 border border-white/20 bg-[#fff7e8]/90 p-5 shadow-2xl backdrop-blur sm:max-w-none">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#a05d2a]">Hoy en horno</p>
            <div className="mt-5 space-y-4">
              {productLines[0].items.map((item) => (
                <div key={item.name} className="grid grid-cols-[74px_minmax(0,1fr)] gap-4 border-b border-[#ead2aa] pb-4 last:border-b-0 last:pb-0">
                  <img src={item.image} alt={item.name} className="h-[74px] w-[74px] object-cover" />
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="break-words font-serif text-lg font-semibold text-[#2a170f]">{item.name}</h3>
                      <span className="font-bold text-[#b56228]">{item.price}</span>
                    </div>
                    <p className="mt-1 break-words text-sm leading-6 text-[#6e4a34]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b56228]">Vitrina artesanal</p>
            <h3 className="mt-3 font-serif text-5xl font-semibold tracking-tight">Productos con antojo inmediato.</h3>
          </div>
          <p className="text-base leading-8 text-[#6e4a34]">
            Un catálogo visual permite que la panadería venda por categoría, destaque productos de temporada y reciba
            solicitudes de pedidos especiales sin saturar al cliente.
          </p>
        </div>

        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
          {productLines.map((line) => {
            const Icon = line.icon
            const active = line.category === selectedCategory
            return (
              <button
                key={line.category}
                onClick={() => setSelectedCategory(line.category)}
                className={`inline-flex shrink-0 items-center gap-2 border px-4 py-3 text-sm font-bold transition ${
                  active
                    ? 'border-[#2a170f] bg-[#2a170f] text-white'
                    : 'border-[#e4c99b] bg-white text-[#5b3925] hover:border-[#b56228]'
                }`}
              >
                <Icon className="h-4 w-4" />
                {line.category}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <div className="relative min-h-[440px] overflow-hidden border border-[#e4c99b]">
            <img src={currentCategory.image} alt={currentCategory.category} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a170f]/90 via-[#2a170f]/25 to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <CurrentIcon className="mb-4 h-9 w-9 text-[#f5c983]" />
              <h4 className="font-serif text-4xl font-semibold">{currentCategory.category}</h4>
              <p className="mt-3 text-sm leading-7 text-[#fff1cf]">{currentCategory.note}</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {currentCategory.items.map((item) => (
              <article key={item.name} className="group border border-[#e4c99b] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-52 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h5 className="font-serif text-xl font-semibold text-[#2a170f]">{item.name}</h5>
                    <span className="font-bold text-[#b56228]">{item.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#6e4a34]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mayoreo" className="bg-[#2a170f] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=1400&h=1000&fit=crop"
              alt="Panaderia preparando pedidos mayoristas"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a170f]/70 to-transparent" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#d9883d]">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-5xl font-semibold tracking-tight">Producción para negocios que no pueden quedarse sin vitrina.</h3>
            <p className="mt-5 text-base leading-8 text-[#f6d7a5]">
              La sección mayorista transforma la panadería en proveedor confiable para hoteles, cafeterías, restaurantes
              y empresas con pedidos recurrentes.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 border border-white/10 bg-white/5 p-4">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#f5c983]" />
                  <p className="text-sm leading-6 text-[#fff1cf]">{benefit}</p>
                </div>
              ))}
            </div>
            <a href="#contacto" className="mt-8 inline-flex w-fit items-center gap-2 bg-[#f5c983] px-5 py-3 text-sm font-bold text-[#2a170f] transition hover:bg-white">
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b56228]">Contacto</p>
          <h3 className="mt-3 font-serif text-5xl font-semibold tracking-tight">Pida, reserve o cotice.</h3>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: 'Teléfono', icon: Phone, body: '+506 2234-1234', extra: 'WhatsApp: +506 8888-7777' },
            { title: 'Email', icon: Mail, body: 'pedidos@lepetrin.cr', extra: 'mayoreo@lepetrin.cr' },
            { title: 'Ubicación', icon: MapPin, body: 'Avenida Central, San José', extra: '100 m norte del Parque Central' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="border border-[#e4c99b] bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center bg-[#2a170f] text-[#f5c983]">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-5 font-serif text-2xl font-semibold">{item.title}</h4>
                <p className="mt-3 font-semibold text-[#b56228]">{item.body}</p>
                <p className="mt-1 text-sm text-[#6e4a34]">{item.extra}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 border border-[#e4c99b] bg-white p-6 shadow-sm lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Clock className="h-7 w-7 text-[#b56228]" />
              <h4 className="font-serif text-3xl font-semibold">Horario de atención</h4>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              {[
                ['Lunes - Viernes', '6:00 AM - 8:00 PM'],
                ['Sábado', '6:00 AM - 9:00 PM'],
                ['Domingo', '7:00 AM - 6:00 PM'],
              ].map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between border-b border-[#ead2aa] pb-3 last:border-0">
                  <span className="font-bold text-[#2a170f]">{day}</span>
                  <span className="text-[#b56228]">{hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#fff7e8] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b56228]">Pedidos especiales</p>
            <p className="mt-3 text-base leading-8 text-[#6e4a34]">
              Tortas personalizadas, mesas dulces y pedidos corporativos se agendan con 48 horas de anticipación. El
              equipo confirma disponibilidad, sabores y entrega por teléfono.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-[#2a170f] text-white transition hover:bg-[#b56228]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-[#2a170f] text-white transition hover:bg-[#b56228]">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e4c99b] bg-[#fff7e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-[#6e4a34] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Le Petrin Bakery. Demo creado por Keter Software.</p>
          <p>Pan artesanal, repostería fina y pedidos mayoristas.</p>
        </div>
      </footer>
    </div>
  )
}
