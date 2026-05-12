'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  CreditCard,
  Facebook,
  Filter,
  Grid,
  Heart,
  Instagram,
  List,
  PackageCheck,
  Search,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react'

const categories = ['Todos', 'Tecnología', 'Moda', 'Hogar', 'Deportes', 'Belleza', 'Lifestyle']

const products = [
  {
    id: 1,
    name: 'Auriculares Studio Max',
    category: 'Tecnología',
    price: 45000,
    originalPrice: 65000,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&h=900&fit=crop',
    tag: 'Oferta',
  },
  {
    id: 2,
    name: 'Smartwatch Fitness Pro',
    category: 'Tecnología',
    price: 89000,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&h=900&fit=crop',
    tag: 'Nuevo',
  },
  {
    id: 3,
    name: 'Camiseta Performance',
    category: 'Moda',
    price: 18000,
    originalPrice: 25000,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=900&fit=crop',
  },
  {
    id: 4,
    name: 'Zapatillas Running Carbon',
    category: 'Deportes',
    price: 52000,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=900&fit=crop',
    tag: 'Popular',
  },
  {
    id: 5,
    name: 'Sabanas Hotel Collection',
    category: 'Hogar',
    price: 32000,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=900&fit=crop',
  },
  {
    id: 6,
    name: 'Set de Maquillaje Atelier',
    category: 'Belleza',
    price: 38000,
    originalPrice: 48000,
    rating: 4.8,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&h=900&fit=crop',
    tag: 'Oferta',
  },
  {
    id: 7,
    name: 'Laptop Creator 15 Pro',
    category: 'Tecnología',
    price: 450000,
    rating: 4.7,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=900&fit=crop',
    tag: 'Nuevo',
  },
  {
    id: 8,
    name: 'Cafetera Espresso Barista',
    category: 'Hogar',
    price: 125000,
    rating: 4.6,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=900&h=900&fit=crop',
  },
  {
    id: 9,
    name: 'Mochila Ejecutiva Cuero',
    category: 'Lifestyle',
    price: 42000,
    rating: 4.9,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=900&fit=crop',
    tag: 'Popular',
  },
]

const formatCRC = (amount: number) => `₡${amount.toLocaleString('es-CR')}`

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [cartCount, setCartCount] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (id: number) => {
    setFavorites((current) => (current.includes(id) ? current.filter((favorite) => favorite !== id) : [...current, id]))
  }

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-[#ded8cc] bg-[#fffaf1]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-20 items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#111827] text-white">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight">Mercado Nova</h1>
                <p className="hidden text-xs font-bold uppercase tracking-[0.24em] text-[#2563eb] sm:block">Premium commerce</p>
              </div>
            </div>

            <div className="hidden min-w-[280px] max-w-xl flex-1 items-center border border-[#ded8cc] bg-white px-4 py-3 md:flex">
              <Search className="mr-3 h-5 w-5 text-[#6b7280]" />
              <input
                type="text"
                placeholder="Buscar productos, marcas o categorías"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
              />
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                title="Favoritos"
                className="relative hidden h-10 w-10 items-center justify-center text-[#374151] transition hover:bg-white hover:text-[#f97316] sm:flex"
              >
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center bg-[#f97316] px-1 text-xs font-bold text-white">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button
                type="button"
                title="Carrito"
                className="relative hidden h-10 w-10 items-center justify-center text-[#374151] transition hover:bg-white hover:text-[#2563eb] sm:flex"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center bg-[#2563eb] px-1 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
              <Link href="/" className="inline-flex items-center gap-2 px-3 py-2 text-sm font-bold text-[#374151] transition hover:bg-white hover:text-[#111827]">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Volver</span>
              </Link>
            </div>
          </div>

          <div className="pb-4 md:hidden">
            <div className="flex items-center border border-[#ded8cc] bg-white px-4 py-3">
              <Search className="mr-3 h-5 w-5 text-[#6b7280]" />
              <input
                type="text"
                placeholder="Buscar productos"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#111827] text-white">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2200&h=1200&fit=crop"
          alt="Compra online con productos premium"
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111827_0%,rgba(17,24,39,.9)_48%,rgba(17,24,39,.42)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="min-w-0 py-8 lg:py-16">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-[#bfdbfe] backdrop-blur">
              Envío gratis desde ₡50,000 | 12 meses sin intereses
            </div>
            <h2 className="max-w-[22rem] break-words text-4xl font-semibold leading-[1.02] tracking-tight sm:max-w-3xl sm:text-6xl lg:text-7xl">
              Una tienda que hace que comprar se sienta facil.
            </h2>
            <p className="mt-6 max-w-[22rem] text-lg leading-8 text-white/70 sm:max-w-2xl">
              Catálogo claro, filtros útiles, productos bien presentados y señales de confianza visibles para que el
              cliente avance hasta el carrito.
            </p>
            <a href="#catalogo" className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#dbeafe]">
              Explorar catálogo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid min-w-0 content-center gap-4 py-8 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: 'Conversion demo', value: '+38%', detail: 'flujo de compra mas claro' },
              { label: 'Productos activos', value: '9', detail: 'filtrables por categoría' },
              { label: 'Beneficios visibles', value: '4', detail: 'confianza antes del checkout' },
            ].map((item) => (
              <div key={item.label} className="border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd]">{item.label}</p>
                <div className="mt-3 text-4xl font-semibold">{item.value}</div>
                <p className="mt-1 text-sm text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main id="catalogo" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 border px-4 py-3 text-sm font-bold transition ${
                  selectedCategory === category
                    ? 'border-[#111827] bg-[#111827] text-white'
                    : 'border-[#ded8cc] bg-white text-[#374151] hover:border-[#2563eb] hover:text-[#2563eb]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button type="button" className="inline-flex items-center gap-2 border border-[#ded8cc] bg-white px-4 py-3 text-sm font-bold text-[#374151] transition hover:border-[#2563eb] hover:text-[#2563eb]">
              <Filter className="h-4 w-4" />
              Filtros
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="flex border border-[#ded8cc] bg-white p-1">
              <button
                type="button"
                title="Vista de cuadricula"
                onClick={() => setViewMode('grid')}
                className={`flex h-9 w-9 items-center justify-center transition ${viewMode === 'grid' ? 'bg-[#111827] text-white' : 'text-[#6b7280] hover:text-[#111827]'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                type="button"
                title="Vista de lista"
                onClick={() => setViewMode('list')}
                className={`flex h-9 w-9 items-center justify-center transition ${viewMode === 'list' ? 'bg-[#111827] text-white' : 'text-[#6b7280] hover:text-[#111827]'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className={`grid gap-5 ${viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => {
            const isFavorite = favorites.includes(product.id)
            return (
              <article key={product.id} className={`group overflow-hidden border border-[#ded8cc] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${viewMode === 'list' ? 'sm:flex' : ''}`}>
                <div className={`relative overflow-hidden bg-[#f3f4f6] ${viewMode === 'list' ? 'sm:w-72 sm:shrink-0' : 'h-72'}`}>
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  {product.tag && (
                    <span className={`absolute left-3 top-3 px-3 py-1 text-xs font-bold text-white ${
                      product.tag === 'Oferta' ? 'bg-[#dc2626]' : product.tag === 'Nuevo' ? 'bg-[#2563eb]' : 'bg-[#f97316]'
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  <button
                    type="button"
                    title="Guardar favorito"
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-white text-[#374151] shadow-sm transition hover:text-[#f97316]"
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-[#f97316] text-[#f97316]' : ''}`} />
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">{product.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827]">{product.name}</h3>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className={`h-4 w-4 ${index < Math.floor(product.rating) ? 'fill-[#f5b400] text-[#f5b400]' : 'text-[#d1d5db]'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-[#6b7280]">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-3xl font-semibold text-[#111827]">{formatCRC(product.price)}</span>
                    {product.originalPrice && <span className="pb-1 text-sm text-[#9ca3af] line-through">{formatCRC(product.originalPrice)}</span>}
                  </div>
                  <button
                    type="button"
                    onClick={() => setCartCount((count) => count + 1)}
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-[#111827] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2563eb]"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Agregar al carrito
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            { title: 'Envío gratis', text: 'En compras mayores a ₡50,000', icon: Truck, color: 'text-[#2563eb]' },
            { title: 'Compra segura', text: 'Protección y pagos cifrados', icon: Shield, color: 'text-[#059669]' },
            { title: 'Pago flexible', text: 'Hasta 12 meses sin intereses', icon: CreditCard, color: 'text-[#f97316]' },
            { title: 'Devoluciones', text: '30 dias para cambios', icon: PackageCheck, color: 'text-[#7c3aed]' },
          ].map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="border border-[#ded8cc] bg-white p-5 text-center shadow-sm">
                <Icon className={`mx-auto h-7 w-7 ${benefit.color}`} />
                <h4 className="mt-4 font-semibold text-[#111827]">{benefit.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">{benefit.text}</p>
              </div>
            )
          })}
        </section>
      </main>

      <footer className="bg-[#111827] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-white text-[#111827]">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-semibold">Mercado Nova</div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd]">Premium commerce</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              Demo de comercio electrónico para marcas que necesitan catálogos modernos, filtros, carrito y confianza de
              compra desde la primera pantalla.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Comprar</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Ofertas</li>
              <li>Nuevos productos</li>
              <li>Más vendidos</li>
              <li>Gift cards</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Síguenos</h4>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition hover:bg-[#f97316]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition hover:bg-[#2563eb]">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">© 2026 Mercado Nova | Demo por Keter Software</div>
      </footer>
    </div>
  )
}
