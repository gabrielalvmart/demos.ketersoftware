'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  ShoppingBag,
  ArrowLeft,
  Search,
  ShoppingCart,
  Star,
  Heart,
  Filter,
  Grid,
  List,
  ChevronDown,
  Truck,
  Shield,
  CreditCard,
  PackageCheck
} from 'lucide-react'

const categories = [
  'Todos',
  'Electrónica',
  'Ropa',
  'Hogar',
  'Deportes',
  'Belleza',
  'Juguetes'
]

const products = [
  {
    id: 1,
    name: 'Auriculares Bluetooth Premium',
    category: 'Electrónica',
    price: 45000,
    originalPrice: 65000,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    tag: 'Oferta',
    inStock: true
  },
  {
    id: 2,
    name: 'Smartwatch Fitness Pro',
    category: 'Electrónica',
    price: 89000,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    tag: 'Nuevo',
    inStock: true
  },
  {
    id: 3,
    name: 'Camiseta Deportiva Premium',
    category: 'Ropa',
    price: 18000,
    originalPrice: 25000,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    inStock: true
  },
  {
    id: 4,
    name: 'Zapatillas Running Pro',
    category: 'Deportes',
    price: 52000,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    tag: 'Popular',
    inStock: true
  },
  {
    id: 5,
    name: 'Juego de Sábanas Queen',
    category: 'Hogar',
    price: 32000,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=500&fit=crop',
    inStock: true
  },
  {
    id: 6,
    name: 'Set de Maquillaje Profesional',
    category: 'Belleza',
    price: 38000,
    originalPrice: 48000,
    rating: 4.8,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    tag: 'Oferta',
    inStock: true
  },
  {
    id: 7,
    name: 'Laptop 15" Core i7',
    category: 'Electrónica',
    price: 450000,
    rating: 4.7,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    tag: 'Nuevo',
    inStock: true
  },
  {
    id: 8,
    name: 'Cafetera Espresso Automática',
    category: 'Hogar',
    price: 125000,
    rating: 4.6,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
    inStock: true
  },
  {
    id: 9,
    name: 'Mochila Ejecutiva Cuero',
    category: 'Ropa',
    price: 42000,
    rating: 4.9,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    tag: 'Popular',
    inStock: true
  }
]

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [cartCount, setCartCount] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TechShop</span>
              </div>
              
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-96">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
                <Heart className="w-6 h-6" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>
              
              <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link
                href="/"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Volver</span>
              </Link>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base font-medium">
            🎉 Envío GRATIS en compras mayores a ₡50,000 • Hasta 12 meses sin intereses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories & Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="flex items-center bg-white rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-48' : 'h-64'
              }`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.tag && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                    product.tag === 'Oferta' ? 'bg-red-500 text-white' :
                    product.tag === 'Nuevo' ? 'bg-blue-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {product.tag}
                  </span>
                )}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(product.id)
                        ? 'fill-pink-500 text-pink-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1">
                <span className="text-xs text-purple-600 font-semibold uppercase">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₡{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₡{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={addToCart}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Agregar al Carrito</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 mb-8">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Envío Gratis</h4>
            <p className="text-sm text-gray-600">En compras mayores a ₡50,000</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-pink-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Compra Segura</h4>
            <p className="text-sm text-gray-600">Protección al comprador</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Pago Flexible</h4>
            <p className="text-sm text-gray-600">Hasta 12 meses sin intereses</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <PackageCheck className="w-6 h-6 text-pink-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Garantía</h4>
            <p className="text-sm text-gray-600">30 días de devolución</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">TechShop</span>
              </div>
              <p className="text-gray-200 text-sm">
                Tu tienda de tecnología y más. Los mejores productos al mejor precio.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Comprar</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>Ofertas</li>
                <li>Nuevos Productos</li>
                <li>Más Vendidos</li>
                <li>Gift Cards</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>Preguntas Frecuentes</li>
                <li>Envíos</li>
                <li>Devoluciones</li>
                <li>Contacto</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-lg">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <span className="text-lg">📷</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-lg">🐦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>© 2026 TechShop • Demo por Keter Software</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
