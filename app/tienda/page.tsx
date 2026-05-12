'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  CreditCard,
  Facebook,
  Filter,
  Grid,
  Heart,
  Home,
  Instagram,
  List,
  Lock,
  MapPin,
  Minus,
  PackageCheck,
  Plus,
  Receipt,
  Search,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Star,
  Trash2,
  Truck,
  Upload,
  User,
  X,
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
    stock: 'Disponible hoy',
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
    stock: 'Últimas unidades',
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
    stock: 'Disponible hoy',
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
    stock: 'Envío 24h',
  },
  {
    id: 5,
    name: 'Sábanas Hotel Collection',
    category: 'Hogar',
    price: 32000,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=900&fit=crop',
    stock: 'Disponible hoy',
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
    stock: 'Disponible hoy',
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
    stock: 'Entrega coordinada',
  },
  {
    id: 8,
    name: 'Cafetera Espresso Barista',
    category: 'Hogar',
    price: 125000,
    rating: 4.6,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=900&h=900&fit=crop',
    stock: 'Envío 24h',
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
    stock: 'Disponible hoy',
  },
]

type Product = (typeof products)[number]
type CartItem = { productId: number; quantity: number }
type CheckoutStep = 'cart' | 'details' | 'payment' | 'confirmation'
type PaymentMethod = 'sinpe' | 'card'
type DeliveryMethod = 'delivery' | 'pickup'

const formatCRC = (amount: number) => `₡${amount.toLocaleString('es-CR')}`

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('cart')
  const [cart, setCart] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('sinpe')
  const [receiptFile, setReceiptFile] = useState('')
  const [sinpeReference, setSinpeReference] = useState('')
  const [paymentError, setPaymentError] = useState('')
  const [orderNumber, setOrderNumber] = useState('')
  const [checkoutData, setCheckoutData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    provincia: '',
    direccion: '',
    notas: '',
  })

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
    const matchesSearch = `${product.name} ${product.category}`.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const cartLineItems = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((current) => current.id === item.productId)
        return product ? { ...product, quantity: item.quantity, lineTotal: product.price * item.quantity } : null
      })
      .filter((item): item is Product & { quantity: number; lineTotal: number } => Boolean(item))
  }, [cart])

  const subtotal = cartLineItems.reduce((sum, item) => sum + item.lineTotal, 0)
  const deliveryFee = deliveryMethod === 'pickup' || subtotal >= 50000 || subtotal === 0 ? 0 : 2500
  const tax = Math.round(subtotal * 0.13)
  const total = subtotal + deliveryFee + tax
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const toggleFavorite = (id: number) => {
    setFavorites((current) => (current.includes(id) ? current.filter((favorite) => favorite !== id) : [...current, id]))
  }

  const addToCart = (productId: number) => {
    setCart((current) => {
      const existingItem = current.find((item) => item.productId === productId)

      if (existingItem) {
        return current.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item))
      }

      return [...current, { productId, quantity: 1 }]
    })
    setCheckoutStep('cart')
    setCartOpen(true)
  }

  const updateQuantity = (productId: number, change: number) => {
    setCart((current) =>
      current
        .map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId: number) => {
    setCart((current) => current.filter((item) => item.productId !== productId))
  }

  const resetOrder = () => {
    setCartOpen(false)
    setCheckoutStep('cart')
    setCart([])
    setReceiptFile('')
    setSinpeReference('')
    setPaymentError('')
    setOrderNumber('')
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!cartLineItems.length) return
    setCheckoutStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentError('')

    if (paymentMethod === 'sinpe' && (!sinpeReference.trim() || !receiptFile)) {
      setPaymentError('Ingrese el número de comprobante SINPE y adjunte la imagen o PDF del comprobante.')
      return
    }

    setOrderNumber(`MN-${Date.now().toString().slice(-6)}`)
    setCheckoutStep('confirmation')
  }

  return (
    <div className="animate-page-in min-h-screen bg-[#f6f4ef] text-[#111827]">
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
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center bg-[#f97316] px-1 text-xs font-bold text-white">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button
                type="button"
                title="Carrito"
                onClick={() => setCartOpen(true)}
                className="relative flex h-10 w-10 items-center justify-center text-[#374151] transition hover:bg-white hover:text-[#2563eb]"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center bg-[#2563eb] px-1 text-xs font-bold text-white">
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
          className="animate-image-drift absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111827_0%,rgba(17,24,39,.9)_48%,rgba(17,24,39,.42)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="animate-fade-up min-w-0 py-8 lg:py-16">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-[#bfdbfe] backdrop-blur">
              Envío gratis desde ₡50,000 | SINPE Móvil disponible
            </div>
            <h2 className="max-w-[22rem] break-words text-4xl font-semibold leading-[1.02] tracking-tight sm:max-w-3xl sm:text-6xl lg:text-7xl">
              Una tienda que convierte visitas en pedidos reales.
            </h2>
            <p className="mt-6 max-w-[22rem] text-lg leading-8 text-white/70 sm:max-w-2xl">
              Catálogo claro, filtros útiles, carrito funcional y checkout con comprobante SINPE para que el cliente
              vea un flujo completo de compra local.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalogo" className="shine-cta inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#dbeafe]">
                Explorar catálogo
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Ver carrito
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="animate-fade-up-delay-1 grid min-w-0 content-center gap-4 py-8 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: 'Checkout demo', value: '3 pasos', detail: 'carrito, datos y pago' },
              { label: 'SINPE listo', value: '₡', detail: 'referencia y comprobante' },
              { label: 'Confianza visible', value: '24h', detail: 'confirmación y entrega' },
            ].map((item) => (
              <div key={item.label} className="interactive-card border border-white/10 bg-white/10 p-5 backdrop-blur">
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
                title="Vista de cuadrícula"
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

        <div className={`stagger-children grid gap-5 ${viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => {
            const isFavorite = favorites.includes(product.id)
            return (
              <article key={product.id} className={`interactive-card group overflow-hidden border border-[#ded8cc] bg-white shadow-sm transition hover:shadow-xl ${viewMode === 'list' ? 'sm:flex' : ''}`}>
                <div className={`relative overflow-hidden bg-[#f3f4f6] ${viewMode === 'list' ? 'h-72 sm:w-72 sm:shrink-0' : 'h-72'}`}>
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
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">{product.category}</p>
                    <span className="text-xs font-bold text-[#059669]">{product.stock}</span>
                  </div>
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
                    onClick={() => addToCart(product.id)}
                    className="shine-cta mt-6 inline-flex items-center justify-center gap-2 bg-[#111827] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2563eb]"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Agregar al carrito
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <section className="stagger-children mt-12 grid gap-5 md:grid-cols-4">
          {[
            { title: 'Envío gratis', text: 'En compras mayores a ₡50,000', icon: Truck, color: 'text-[#2563eb]' },
            { title: 'Compra segura', text: 'Protección y pagos cifrados', icon: Shield, color: 'text-[#059669]' },
            { title: 'SINPE Móvil', text: 'Comprobante validado por tienda', icon: Smartphone, color: 'text-[#f97316]' },
            { title: 'Devoluciones', text: '30 días para cambios', icon: PackageCheck, color: 'text-[#7c3aed]' },
          ].map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="interactive-card border border-[#ded8cc] bg-white p-5 text-center shadow-sm">
                <Icon className={`mx-auto h-7 w-7 ${benefit.color}`} />
                <h4 className="mt-4 font-semibold text-[#111827]">{benefit.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">{benefit.text}</p>
              </div>
            )
          })}
        </section>
      </main>

      {cartOpen && (
        <div className="drawer-backdrop fixed inset-0 z-[80] bg-[#111827]/60 backdrop-blur-sm">
          <div className="drawer-panel ml-auto flex h-full w-full max-w-2xl flex-col bg-[#fffaf1] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#ded8cc] px-4 py-4 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">Checkout</p>
                <h2 className="text-2xl font-semibold text-[#111827]">Carrito de compra</h2>
              </div>
              <button
                type="button"
                title="Cerrar carrito"
                onClick={() => setCartOpen(false)}
                className="flex h-10 w-10 items-center justify-center bg-white text-[#374151] transition hover:text-[#dc2626]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 border-b border-[#ded8cc] bg-white text-center text-xs font-bold uppercase tracking-[0.14em] text-[#6b7280]">
              {[
                ['cart', 'Carrito'],
                ['details', 'Datos'],
                ['payment', 'Pago'],
              ].map(([step, label]) => (
                <div
                  key={step}
                  className={`px-2 py-3 ${
                    checkoutStep === step || (checkoutStep === 'confirmation' && step === 'payment')
                      ? 'bg-[#111827] text-white'
                      : 'border-r border-[#ded8cc] last:border-r-0'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
              {checkoutStep === 'cart' && (
                <div>
                  {cartLineItems.length ? (
                    <div className="space-y-4">
                      {cartLineItems.map((item) => (
                        <div key={item.id} className="animate-pop grid grid-cols-[86px_minmax(0,1fr)] gap-4 border border-[#ded8cc] bg-white p-3">
                          <img src={item.image} alt={item.name} className="h-[86px] w-[86px] object-cover" />
                          <div className="min-w-0">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">{item.category}</p>
                                <h3 className="mt-1 font-semibold text-[#111827]">{item.name}</h3>
                              </div>
                              <button
                                type="button"
                                title="Eliminar producto"
                                onClick={() => removeFromCart(item.id)}
                                className="flex h-8 w-8 shrink-0 items-center justify-center text-[#9ca3af] transition hover:bg-[#fee2e2] hover:text-[#dc2626]"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="mt-4 flex items-center justify-between gap-3">
                              <div className="flex border border-[#ded8cc] bg-[#f6f4ef]">
                                <button
                                  type="button"
                                  title="Reducir cantidad"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="flex h-9 w-9 items-center justify-center text-[#374151] hover:bg-white"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="flex h-9 w-10 items-center justify-center text-sm font-bold">{item.quantity}</span>
                                <button
                                  type="button"
                                  title="Aumentar cantidad"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="flex h-9 w-9 items-center justify-center text-[#374151] hover:bg-white"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-[#6b7280]">{formatCRC(item.price)} c/u</p>
                                <p className="font-bold text-[#111827]">{formatCRC(item.lineTotal)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="border border-dashed border-[#c9c1b3] bg-white p-10 text-center">
                      <ShoppingCart className="mx-auto h-12 w-12 text-[#9ca3af]" />
                      <h3 className="mt-4 text-xl font-semibold text-[#111827]">El carrito está vacío</h3>
                      <p className="mt-2 text-sm leading-6 text-[#6b7280]">Agregue productos para probar el flujo completo de checkout.</p>
                    </div>
                  )}
                </div>
              )}

              {checkoutStep === 'details' && (
                <form onSubmit={handleDetailsSubmit} className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111827]">
                      <User className="h-4 w-4 text-[#2563eb]" />
                      Nombre completo *
                    </span>
                    <input
                      required
                      value={checkoutData.nombre}
                      onChange={(e) => setCheckoutData({ ...checkoutData, nombre: e.target.value })}
                      className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]"
                      placeholder="Juan Pérez"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[#111827]">Teléfono *</span>
                    <input
                      required
                      type="tel"
                      value={checkoutData.telefono}
                      onChange={(e) => setCheckoutData({ ...checkoutData, telefono: e.target.value })}
                      className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]"
                      placeholder="+506 8888-7777"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-[#111827]">Correo electrónico *</span>
                    <input
                      required
                      type="email"
                      value={checkoutData.email}
                      onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                      className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]"
                      placeholder="correo@ejemplo.com"
                    />
                  </label>
                  <div className="sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-[#111827]">Entrega *</span>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        { value: 'delivery', title: 'Envío a domicilio', detail: 'San José y GAM', icon: Truck },
                        { value: 'pickup', title: 'Retiro en tienda', detail: 'Listo en 2 horas', icon: Home },
                      ].map((option) => {
                        const Icon = option.icon
                        const active = deliveryMethod === option.value
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setDeliveryMethod(option.value as DeliveryMethod)}
                            className={`border p-4 text-left transition ${
                              active ? 'border-[#111827] bg-[#111827] text-white' : 'border-[#ded8cc] bg-white text-[#111827] hover:border-[#2563eb]'
                            }`}
                          >
                            <Icon className={`h-5 w-5 ${active ? 'text-[#93c5fd]' : 'text-[#2563eb]'}`} />
                            <p className="mt-3 font-bold">{option.title}</p>
                            <p className={`mt-1 text-sm ${active ? 'text-white/60' : 'text-[#6b7280]'}`}>{option.detail}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  {deliveryMethod === 'delivery' && (
                    <>
                      <label className="block">
                        <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111827]">
                          <MapPin className="h-4 w-4 text-[#2563eb]" />
                          Provincia *
                        </span>
                        <select
                          required
                          value={checkoutData.provincia}
                          onChange={(e) => setCheckoutData({ ...checkoutData, provincia: e.target.value })}
                          className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]"
                        >
                          <option value="">Seleccione</option>
                          {['San José', 'Alajuela', 'Heredia', 'Cartago', 'Guanacaste', 'Puntarenas', 'Limón'].map((province) => (
                            <option key={province} value={province}>
                              {province}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-bold text-[#111827]">Dirección exacta *</span>
                        <input
                          required
                          value={checkoutData.direccion}
                          onChange={(e) => setCheckoutData({ ...checkoutData, direccion: e.target.value })}
                          className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]"
                          placeholder="Barrio, calle, casa o referencia"
                        />
                      </label>
                    </>
                  )}
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-[#111827]">Notas del pedido</span>
                    <textarea
                      rows={3}
                      value={checkoutData.notas}
                      onChange={(e) => setCheckoutData({ ...checkoutData, notas: e.target.value })}
                      className="w-full resize-none border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]"
                      placeholder="Horario preferido, instrucciones de entrega o empaque de regalo."
                    />
                  </label>
                  <button type="submit" className="shine-cta inline-flex items-center justify-center gap-2 bg-[#111827] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#2563eb] sm:col-span-2">
                    Continuar al pago
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}

              {checkoutStep === 'payment' && (
                <form onSubmit={handlePaymentSubmit} className="space-y-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { value: 'sinpe', title: 'SINPE Móvil', detail: 'Adjunte comprobante', icon: Smartphone },
                      { value: 'card', title: 'Tarjeta', detail: 'Demo de pago seguro', icon: CreditCard },
                    ].map((option) => {
                      const Icon = option.icon
                      const active = paymentMethod === option.value
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setPaymentMethod(option.value as PaymentMethod)
                            setPaymentError('')
                          }}
                          className={`border p-4 text-left transition ${
                            active ? 'border-[#111827] bg-[#111827] text-white' : 'border-[#ded8cc] bg-white text-[#111827] hover:border-[#2563eb]'
                          }`}
                        >
                          <Icon className={`h-6 w-6 ${active ? 'text-[#93c5fd]' : 'text-[#2563eb]'}`} />
                          <p className="mt-3 font-bold">{option.title}</p>
                          <p className={`mt-1 text-sm ${active ? 'text-white/60' : 'text-[#6b7280]'}`}>{option.detail}</p>
                        </button>
                      )
                    })}
                  </div>

                  {paymentMethod === 'sinpe' ? (
                    <div className="border border-[#ded8cc] bg-white p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f97316] text-white">
                          <Smartphone className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#111827]">Pago por SINPE Móvil</h3>
                          <p className="mt-1 text-sm leading-6 text-[#6b7280]">Transfiera el total y adjunte el comprobante para validar el pedido.</p>
                        </div>
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        <div className="border border-[#ded8cc] bg-[#f6f4ef] p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b7280]">Teléfono</p>
                          <p className="mt-2 font-bold text-[#111827]">+506 8888-2026</p>
                        </div>
                        <div className="border border-[#ded8cc] bg-[#f6f4ef] p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b7280]">A nombre de</p>
                          <p className="mt-2 font-bold text-[#111827]">Mercado Nova S.A.</p>
                        </div>
                        <div className="border border-[#ded8cc] bg-[#f6f4ef] p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b7280]">Monto</p>
                          <p className="mt-2 font-bold text-[#111827]">{formatCRC(total)}</p>
                        </div>
                      </div>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-sm font-bold text-[#111827]">Número de comprobante *</span>
                          <input
                            value={sinpeReference}
                            onChange={(e) => setSinpeReference(e.target.value)}
                            className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]"
                            placeholder="Ej. 583920174"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-sm font-bold text-[#111827]">Comprobante *</span>
                          <span className="flex cursor-pointer items-center justify-between gap-3 border border-dashed border-[#c9c1b3] bg-[#f6f4ef] px-4 py-3 text-sm font-semibold text-[#374151] transition hover:border-[#2563eb] hover:bg-white">
                            <span className="truncate">{receiptFile || 'Adjuntar imagen o PDF'}</span>
                            <Upload className="h-4 w-4 shrink-0 text-[#2563eb]" />
                          </span>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            className="sr-only"
                            onChange={(e) => setReceiptFile(e.target.files?.[0]?.name || '')}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-4 border border-[#ded8cc] bg-white p-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-[#059669]">
                          <Lock className="h-4 w-4" />
                          Pago seguro de demostración
                        </div>
                      </div>
                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-sm font-bold text-[#111827]">Número de tarjeta *</span>
                        <input required className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]" placeholder="4242 4242 4242 4242" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-bold text-[#111827]">Vencimiento *</span>
                        <input required className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]" placeholder="MM/AA" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-bold text-[#111827]">CVV *</span>
                        <input required className="w-full border border-[#ded8cc] bg-white px-4 py-3 outline-none transition focus:border-[#2563eb]" placeholder="123" />
                      </label>
                    </div>
                  )}

                  {paymentError && <p className="border border-[#fecaca] bg-[#fff1f2] px-4 py-3 text-sm font-semibold text-[#b91c1c]">{paymentError}</p>}

                  <button type="submit" className="shine-cta inline-flex w-full items-center justify-center gap-2 bg-[#111827] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#2563eb]">
                    Confirmar pedido
                    <CheckCircle className="h-4 w-4" />
                  </button>
                </form>
              )}

              {checkoutStep === 'confirmation' && (
                <div className="animate-pop border border-[#bbf7d0] bg-white p-8 text-center">
                  <CheckCircle className="icon-breathe mx-auto h-16 w-16 text-[#16a34a]" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">Pedido recibido</p>
                  <h3 className="mt-2 text-3xl font-semibold text-[#111827]">{orderNumber}</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#6b7280]">
                    La tienda validará el pago, enviará confirmación por WhatsApp y preparará la entrega según los datos ingresados.
                  </p>
                  <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
                    <div className="border border-[#ded8cc] bg-[#f6f4ef] p-4">
                      <Receipt className="h-5 w-5 text-[#2563eb]" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6b7280]">Pago</p>
                      <p className="mt-1 font-semibold text-[#111827]">{paymentMethod === 'sinpe' ? 'SINPE pendiente de validar' : 'Tarjeta aprobada'}</p>
                    </div>
                    <div className="border border-[#ded8cc] bg-[#f6f4ef] p-4">
                      <Truck className="h-5 w-5 text-[#2563eb]" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6b7280]">Entrega</p>
                      <p className="mt-1 font-semibold text-[#111827]">{deliveryMethod === 'pickup' ? 'Retiro en tienda' : 'Envío a domicilio'}</p>
                    </div>
                    <div className="border border-[#ded8cc] bg-[#f6f4ef] p-4">
                      <ShoppingBag className="h-5 w-5 text-[#2563eb]" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6b7280]">Total</p>
                      <p className="mt-1 font-semibold text-[#111827]">{formatCRC(total)}</p>
                    </div>
                  </div>
                  <button type="button" onClick={resetOrder} className="shine-cta mt-7 inline-flex items-center justify-center gap-2 bg-[#111827] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2563eb]">
                    Finalizar demo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {checkoutStep !== 'confirmation' && (
              <div className="border-t border-[#ded8cc] bg-white px-4 py-4 sm:px-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-[#6b7280]">
                    <span>Subtotal</span>
                    <span>{formatCRC(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#6b7280]">
                    <span>Envío</span>
                    <span>{deliveryFee ? formatCRC(deliveryFee) : 'Gratis'}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#6b7280]">
                    <span>IVA estimado</span>
                    <span>{formatCRC(tax)}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#ded8cc] pt-3 text-lg font-bold text-[#111827]">
                    <span>Total</span>
                    <span>{formatCRC(total)}</span>
                  </div>
                </div>
                {checkoutStep === 'cart' && (
                  <button
                    type="button"
                    disabled={!cartLineItems.length}
                    onClick={() => setCheckoutStep('details')}
                    className="shine-cta mt-4 inline-flex w-full items-center justify-center gap-2 bg-[#111827] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:bg-[#9ca3af]"
                  >
                    Continuar checkout
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
                {checkoutStep === 'details' && (
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-[#ded8cc] px-5 py-3 text-sm font-bold text-[#374151] transition hover:border-[#2563eb] hover:text-[#2563eb]"
                  >
                    Volver al carrito
                  </button>
                )}
                {checkoutStep === 'payment' && (
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('details')}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-[#ded8cc] px-5 py-3 text-sm font-bold text-[#374151] transition hover:border-[#2563eb] hover:text-[#2563eb]"
                  >
                    Editar datos de entrega
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

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
              compra desde la primera pantalla hasta la confirmación.
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
