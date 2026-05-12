'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Croissant,
  HeartPulse,
  LayoutTemplate,
  ShoppingBag,
  Sparkles,
  Utensils,
} from 'lucide-react'
import Navbar from './components/Navbar'

const demos = [
  {
    title: 'Panadería Artesanal',
    slug: 'panaderia',
    description:
      'Una vitrina cálida para panaderías, reposterías y cafeterías que necesitan vender aroma, oficio y pedidos especiales.',
    icon: Croissant,
    accent: 'from-[#c0692f] to-[#f5b75d]',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=900&fit=crop',
    market: 'Alimentos artesanales',
  },
  {
    title: 'Clínica Dental',
    slug: 'dentista',
    description:
      'Confianza médica, agenda de citas y servicios claros para clínicas que compiten por pacientes exigentes.',
    icon: HeartPulse,
    accent: 'from-[#0e7490] to-[#67e8f9]',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=900&fit=crop',
    market: 'Salud profesional',
  },
  {
    title: 'Tienda Online',
    slug: 'tienda',
    description:
      'Catálogo, filtros, carrito y confianza de compra para comercios que quieren convertir visitas en ventas.',
    icon: ShoppingBag,
    accent: 'from-[#1d4ed8] to-[#f97316]',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop',
    market: 'E-commerce',
  },
  {
    title: 'Restaurante',
    slug: 'restaurante',
    description:
      'Una experiencia visual de alta cocina con menú, reservas y una atmósfera pensada para llenar mesas.',
    icon: Utensils,
    accent: 'from-[#7f1d1d] to-[#d6a64f]',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop',
    market: 'Gastronomia',
  },
  {
    title: 'Spa & Bienestar',
    slug: 'spa',
    description:
      'Un sitio sereno, elegante y sensorial para spas, centros estéticos y marcas de bienestar premium.',
    icon: Sparkles,
    accent: 'from-[#4f7f66] to-[#c58f6a]',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=900&fit=crop',
    market: 'Wellness',
  },
]

const advantages = [
  {
    title: 'Diseño que respira negocio',
    description: 'Cada demo habla el idioma visual de su industria, no el de una plantilla genérica.',
    icon: LayoutTemplate,
  },
  {
    title: 'Confianza en segundos',
    description: 'Jerarquía, contraste, fotografía y llamados a la acción pensados para compradores reales.',
    icon: BadgeCheck,
  },
  {
    title: 'Listo para adaptar',
    description: 'Secciones completas para servicios, productos, reservas, contacto y conversion.',
    icon: ArrowRight,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080b] text-white">
      <Navbar />

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=2200&h=1300&fit=crop"
            alt="Estudio de diseno web profesional"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#08080b_0%,rgba(8,8,11,.86)_45%,rgba(8,8,11,.55)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08080b] to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24">
          <div className="min-w-0 flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#8bd3ff]" />
              Demos premium para vender servicios web
            </div>
            <h1 className="max-w-[22rem] break-words text-4xl font-semibold tracking-tight text-white sm:max-w-4xl sm:text-6xl lg:text-7xl">
              Sitios que hacen que el cliente vea su negocio en grande.
            </h1>
            <p className="mt-6 max-w-[22rem] text-lg leading-8 text-white/70 sm:max-w-2xl">
              Cada demo muestra una dirección visual distinta, contenido listo para Costa Rica y una experiencia
              suficientemente pulida para que un prospecto diga: asi quiero que se vea mi marca.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demos"
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#101014] transition hover:bg-[#dceeff]"
              >
                Ver demos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://ketersoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Keter Software
              </a>
            </div>
          </div>

          <div className="grid content-end gap-4 sm:grid-cols-2">
            {demos.slice(0, 4).map((demo, index) => {
              const Icon = demo.icon
              return (
                <Link
                  href={`/${demo.slug}`}
                  key={demo.slug}
                  className={`group relative min-h-[210px] overflow-hidden border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-white/40 ${
                    index % 2 ? 'lg:translate-y-8' : ''
                  }`}
                >
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className={`flex h-10 w-10 items-center justify-center bg-gradient-to-br ${demo.accent}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">{demo.market}</p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{demo.title}</h2>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="demos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8bd3ff]">Biblioteca de demos</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">Experiencias por industria</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60">
            Cada página incluye fotografía, estructura comercial, microcopy, formularios y secciones clave para el
            tipo de negocio que representa.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <Link
                key={demo.slug}
                href={`/${demo.slug}`}
                className="group overflow-hidden border border-white/10 bg-[#111116] transition hover:-translate-y-1 hover:border-white/25 hover:bg-[#15151d]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent" />
                  <div className={`absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-gradient-to-br ${demo.accent}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">{demo.market}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{demo.title}</h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-white/60">{demo.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8bd3ff]">
                    Abrir demo
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          {advantages.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="border border-white/10 bg-[#0d0d12] p-6">
                <Icon className="h-7 w-7 text-[#8bd3ff]" />
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <footer className="bg-[#08080b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Keter Software. Todos los derechos reservados.</p>
          <p>Costa Rica | Sitios web profesionales para negocios que quieren verse mejor.</p>
        </div>
      </footer>
    </main>
  )
}
