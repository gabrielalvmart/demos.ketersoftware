'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Utensils,
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Wine,
  ChefHat,
  Star,
  Award,
  Heart,
  Instagram,
  Facebook
} from 'lucide-react'

const menuCategories = [
  {
    name: 'Entradas',
    image: 'https://images.unsplash.com/photo-1559058922-6c5d82c9f3b2?w=800&h=600&fit=crop',
    items: [
      {
        name: 'Carpaccio de Res',
        description: 'Finas láminas de res con rúcula, parmesano y reducción balsámica',
        price: '₡8,500',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop'
      },
      {
        name: 'Bruschetta Tricolor',
        description: 'Pan tostado con tomate, albahaca y mozzarella fresca',
        price: '₡6,800',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop'
      },
      {
        name: 'Ceviche de Corvina',
        description: 'Pescado fresco marinado en limón con culantro coyote',
        price: '₡9,200',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
      }
    ]
  },
  {
    name: 'Platos Principales',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
    items: [
      {
        name: 'Filete Mignon',
        description: 'Filete de res premium con salsa de vino tinto, puré trufado y vegetales',
        price: '₡18,500',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
      },
      {
        name: 'Salmón a la Parrilla',
        description: 'Salmón atlántico con risotto de espárragos y mantequilla de limón',
        price: '₡16,800',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop'
      },
      {
        name: 'Pasta Carbonara',
        description: 'Fettuccine casero con panceta, huevo, parmesano y pimienta negra',
        price: '₡12,500',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop'
      },
      {
        name: 'Pechuga Wellington',
        description: 'Pechuga de pollo envuelta en hojaldre con champiñones y foie gras',
        price: '₡14,200',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop'
      }
    ]
  },
  {
    name: 'Postres',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop',
    items: [
      {
        name: 'Tiramisú Clásico',
        description: 'Bizcocho embebido en café con mascarpone y cacao',
        price: '₡5,500',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop'
      },
      {
        name: 'Lava Cake de Chocolate',
        description: 'Bizcocho caliente con centro líquido de chocolate belga',
        price: '₡6,200',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop'
      },
      {
        name: 'Panna Cotta de Vainilla',
        description: 'Crema italiana con coulis de frutos rojos',
        price: '₡5,800',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop'
      }
    ]
  }
]

export default function RestaurantePage() {
  const [selectedCategory, setSelectedCategory] = useState('Platos Principales')
  const [reservationData, setReservationData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    personas: '2',
    comentarios: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <Utensils className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-amber-500">La Maison</h1>
                <p className="text-xs text-amber-700 tracking-widest uppercase">Fine Dining</p>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver a Demos</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-950">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-amber-900/30 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-amber-700/30">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 text-sm font-medium">Reconocido con Estrella Michelin 2025</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            Experiencia <span className="text-amber-500">Culinaria</span> Única
          </h2>
          
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Donde la tradición francesa se encuentra con los sabores costarricenses. 
            Una experiencia gastronómica que deleitará todos tus sentidos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservar"
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-amber-900/50 transition-all duration-300 hover:scale-105"
            >
              Reservar Mesa
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Ver Menú
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-900/20 px-4 py-2 rounded-full mb-6">
                <ChefHat className="w-5 h-5 text-amber-500" />
                <span className="text-amber-400 text-sm font-medium">Nuestro Chef</span>
              </div>
              
              <h3 className="text-4xl font-serif font-bold text-white mb-6">
                Cocina de <span className="text-amber-500">Autor</span>
              </h3>
              
              <p className="text-neutral-200 mb-6 leading-relaxed">
                Bajo la dirección del Chef Jean-Pierre Morales, cada plato es una obra de arte 
                que combina técnicas francesas clásicas con ingredientes locales de la más alta calidad.
              </p>
              
              <p className="text-neutral-200 mb-8 leading-relaxed">
                Con más de 20 años de experiencia en restaurantes de prestigio internacional, 
                nuestro chef ha creado un menú que celebra los sabores auténticos y las presentaciones elegantes.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-1">20+</div>
                  <div className="text-sm text-neutral-300">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-1">★</div>
                  <div className="text-sm text-neutral-300">Estrella Michelin</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-1">95%</div>
                  <div className="text-sm text-neutral-300">Satisfacción</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-900 to-amber-950 rounded-2xl flex items-center justify-center text-9xl">
                👨‍🍳
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center rotate-12">
                <Award className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-900/20 px-4 py-2 rounded-full mb-6">
              <Wine className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 text-sm font-medium">Nuestro Menú</span>
            </div>
            
            <h3 className="text-4xl font-serif font-bold text-white mb-4">
              Carta <span className="text-amber-500">Degustación</span>
            </h3>
            <p className="text-neutral-200 max-w-2xl mx-auto">
              Platos elaborados con ingredientes de temporada y las mejores técnicas culinarias
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
            {menuCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/50'
                    : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-750 hover:text-amber-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories
              .find((cat) => cat.name === selectedCategory)
              ?.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-amber-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/10 overflow-hidden group"
                >
                  {/* Menu Item Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 right-3 px-4 py-2 bg-amber-600 text-white font-bold text-lg rounded-lg shadow-lg">
                      {item.price}
                    </span>
                  </div>
                  
                  {/* Menu Item Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-serif font-semibold text-white mb-3">
                      {item.name}
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-300 text-sm">
              * Todos nuestros platillos pueden ser adaptados para dietas especiales. 
              Consulte con nuestro personal.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservar" className="py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-900/20 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 text-sm font-medium">Reservaciones</span>
            </div>
            
            <h3 className="text-4xl font-serif font-bold text-white mb-4">
              Reserve su <span className="text-amber-500">Experiencia</span>
            </h3>
            <p className="text-neutral-200">
              Complete el formulario y nuestro equipo confirmará su reservación
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">¡Reservación Recibida!</h4>
              <p className="text-neutral-200">
                Nos pondremos en contacto con usted pronto para confirmar los detalles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={reservationData.nombre}
                    onChange={(e) => setReservationData({...reservationData, nombre: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Teléfono *</label>
                  <input
                    type="tel"
                    required
                    value={reservationData.telefono}
                    onChange={(e) => setReservationData({...reservationData, telefono: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="8888-8888"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    value={reservationData.email}
                    onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Número de Personas *</label>
                  <select
                    required
                    value={reservationData.personas}
                    onChange={(e) => setReservationData({...reservationData, personas: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Fecha *</label>
                  <input
                    type="date"
                    required
                    value={reservationData.fecha}
                    onChange={(e) => setReservationData({...reservationData, fecha: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Hora *</label>
                  <select
                    required
                    value={reservationData.hora}
                    onChange={(e) => setReservationData({...reservationData, hora: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="">Seleccione una hora</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-neutral-300 mb-2 font-medium">Comentarios Especiales</label>
                <textarea
                  value={reservationData.comentarios}
                  onChange={(e) => setReservationData({...reservationData, comentarios: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Alergias, ocasión especial, preferencias de mesa, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-amber-900/50 transition-all duration-300 hover:scale-105"
              >
                Confirmar Reservación
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="text-white font-semibold mb-2">Dirección</h4>
              <p className="text-neutral-200 text-sm">
                Escazú Village, San José<br />
                Costa Rica
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="text-white font-semibold mb-2">Horario</h4>
              <p className="text-neutral-200 text-sm">
                Martes - Domingo<br />
                6:00 PM - 11:00 PM
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="text-white font-semibold mb-2">Contacto</h4>
              <p className="text-neutral-200 text-sm">
                +506 2289-5000<br />
                info@lamaison.cr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-serif font-bold text-amber-500">La Maison</div>
                <div className="text-xs text-neutral-600">Fine Dining Experience</div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-amber-900/30 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5 text-amber-500" />
                </div>
                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-amber-900/30 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
            <p>© 2026 La Maison Restaurant • Demo por Keter Software</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
