'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Heart,
  ArrowLeft,
  Sparkles,
  Leaf,
  Droplet,
  Wind,
  Sun,
  Moon,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  User,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'

const services = [
  {
    name: 'Masajes',
    icon: Sparkles,
    color: 'from-teal-400 to-cyan-500',
    items: [
      {
        name: 'Masaje Relajante',
        duration: '60 min',
        price: '₡35,000',
        description: 'Técnicas suaves para liberar tensión y promover la relajación profunda',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop'
      },
      {
        name: 'Masaje Terapéutico',
        duration: '90 min',
        price: '₡48,000',
        description: 'Masaje de tejido profundo para dolores musculares crónicos',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop'
      },
      {
        name: 'Masaje con Piedras Calientes',
        duration: '75 min',
        price: '₡42,000',
        description: 'Piedras volcánicas calientes para relajación muscular profunda',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop'
      },
      {
        name: 'Masaje Prenatal',
        duration: '60 min',
        price: '₡38,000',
        description: 'Diseñado específicamente para futuras mamás',
        image: 'https://images.unsplash.com/photo-1598901671243-00ca5f6c0fc8?w=400&h=300&fit=crop'
      }
    ]
  },
  {
    name: 'Faciales',
    icon: Leaf,
    color: 'from-emerald-400 to-green-500',
    items: [
      {
        name: 'Facial Hidratante',
        duration: '60 min',
        price: '₡32,000',
        description: 'Limpieza profunda con mascarilla hidratante y masaje facial',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop'
      },
      {
        name: 'Facial Anti-Edad',
        duration: '75 min',
        price: '₡45,000',
        description: 'Tratamiento con péptidos y colágeno para rejuvenecer la piel',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop'
      },
      {
        name: 'Facial Purificante',
        duration: '60 min',
        price: '₡35,000',
        description: 'Ideal para piel grasa y propensa al acné',
        image: 'https://images.unsplash.com/photo-1559599238-5cc6e4e4e991?w=400&h=300&fit=crop'
      }
    ]
  },
  {
    name: 'Tratamientos Corporales',
    icon: Droplet,
    color: 'from-blue-400 to-indigo-500',
    items: [
      {
        name: 'Exfoliación Corporal',
        duration: '45 min',
        price: '₡28,000',
        description: 'Exfoliación completa con sales marinas y aceites esenciales',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop'
      },
      {
        name: 'Envoltura Detox',
        duration: '90 min',
        price: '₡52,000',
        description: 'Envoltura de algas marinas para desintoxicar y tonificar',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop'
      },
      {
        name: 'Ritual de Chocolate',
        duration: '120 min',
        price: '₡68,000',
        description: 'Experiencia completa: exfoliación, envoltura y masaje',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop'
      }
    ]
  },
  {
    name: 'Paquetes Especiales',
    icon: Sun,
    color: 'from-amber-400 to-orange-500',
    items: [
      {
        name: 'Día de Spa',
        duration: '4 horas',
        price: '₡95,000',
        description: 'Masaje, facial, manicure y pedicure + almuerzo saludable',
        image: 'https://images.unsplash.com/photo-1610117025935-b88fe4cdc8a5?w=400&h=300&fit=crop'
      },
      {
        name: 'Escapada Romántica', 
        duration: '3 horas',
        price: '₡160,000',
        description: 'Para parejas: masaje, jacuzzi privado, champagne',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop'
      },
      {
        name: 'Retiro de Bienestar',
        duration: '6 horas',
        price: '₡125,000',
        description: 'Programa completo con yoga, meditación y tratamientos',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
      }
    ]
  }
]

const testimonials = [
  {
    name: 'María González',
    text: 'Una experiencia absolutamente mágica. El ambiente es tan relajante que te transporta a otro mundo. Los terapeutas son profesionales y muy atentos.',
    rating: 5,
    service: 'Masaje con Piedras Calientes'
  },
  {
    name: 'Carlos Ramírez',
    text: 'Mi esposa y yo disfrutamos del paquete para parejas. Fue el mejor regalo de aniversario. Totalmente recomendado.',
    rating: 5,
    service: 'Escapada Romántica'
  },
  {
    name: 'Sofia Vargas',
    text: 'Vengo cada mes para mi facial. Mi piel nunca ha lucido mejor. El personal es súper profesional y los productos son de primera calidad.',
    rating: 5,
    service: 'Facial Anti-Edad'
  }
]

export default function SpaPage() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [bookingData, setBookingData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    servicio: '',
    comentarios: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-light text-teal-900">Serenity Spa</h1>
                <p className="text-xs text-teal-600 tracking-wide">Wellness & Beauty</p>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-teal-700 hover:text-teal-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver a Demos</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-100/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span className="text-teal-800 text-sm font-medium">Tu Oasis de Tranquilidad</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-light text-teal-900 mb-6">
              Encuentra tu <span className="font-semibold text-teal-600">Equilibrio</span>
            </h2>

            <p className="text-xl text-teal-700 mb-12 leading-relaxed">
              Un espacio dedicado a tu bienestar físico, mental y emocional. 
              Descubre la armonía perfecta entre cuerpo y mente.
            </p>

            <a
              href="#reservar"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Reservar Cita</span>
            </a>
          </div>

          {/* Floating Elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-teal-900 mb-2">Ambiente Zen</h3>
              <p className="text-sm text-teal-700">
                Espacios diseñados para la relajación total
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-teal-900 mb-2">Productos Naturales</h3>
              <p className="text-sm text-teal-700">
                100% orgánicos y cruelty-free
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-teal-900 mb-2">Personal Certificado</h3>
              <p className="text-sm text-teal-700">
                Terapeutas expertos y profesionales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-teal-900 mb-4">
              Nuestros <span className="font-semibold text-teal-600">Servicios</span>
            </h3>
            <p className="text-teal-700 max-w-2xl mx-auto">
              Experiencias personalizadas para restaurar tu energía y belleza natural
            </p>
          </div>

          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all ${
                    selectedService.name === service.name
                      ? `bg-gradient-to-r ${service.color} text-white shadow-xl`
                      : 'bg-white text-teal-700 hover:shadow-lg'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{service.name}</span>
                </button>
              )
            })}
          </div>

          {/* Service Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedService.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${selectedService.color} rounded-full flex items-center space-x-1`}>
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{item.duration}</span>
                  </div>
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-teal-900 mb-3">{item.name}</h4>
                  <p className="text-teal-700 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-teal-100">
                    <span className="text-2xl font-bold text-teal-900">{item.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-teal-900 mb-4">
              Lo que dicen <span className="font-semibold text-teal-600">nuestros clientes</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <Quote className="w-10 h-10 text-teal-300 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                  ))}
                </div>

                <p className="text-teal-800 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-teal-100 pt-4">
                  <p className="font-semibold text-teal-900">{testimonial.name}</p>
                  <p className="text-sm text-teal-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="reservar" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-light text-teal-900 mb-4">
              Reserva tu <span className="font-semibold text-teal-600">Momento</span>
            </h3>
            <p className="text-teal-700">
              Completa el formulario y te confirmaremos tu cita
            </p>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-12 text-center shadow-xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-12 h-12 text-teal-600" />
              </div>
              <h4 className="text-3xl font-semibold text-teal-900 mb-4">¡Reserva Confirmada!</h4>
              <p className="text-teal-700 text-lg">
                Gracias por confiar en nosotros. Te contactaremos pronto para confirmar los detalles de tu cita.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-teal-800 mb-2 font-medium flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Nombre Completo *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.nombre}
                    onChange={(e) => setBookingData({...bookingData, nombre: e.target.value})}
                    className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-100 rounded-xl text-teal-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-teal-800 mb-2 font-medium flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Teléfono *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.telefono}
                    onChange={(e) => setBookingData({...bookingData, telefono: e.target.value})}
                    className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-100 rounded-xl text-teal-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="8888-8888"
                  />
                </div>

                <div>
                  <label className="block text-teal-800 mb-2 font-medium flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-100 rounded-xl text-teal-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-teal-800 mb-2 font-medium flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Servicio *</span>
                  </label>
                  <select
                    required
                    value={bookingData.servicio}
                    onChange={(e) => setBookingData({...bookingData, servicio: e.target.value})}
                    className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-100 rounded-xl text-teal-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((category) =>
                      category.items.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name} - {item.price}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-teal-800 mb-2 font-medium flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Fecha *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.fecha}
                    onChange={(e) => setBookingData({...bookingData, fecha: e.target.value})}
                    className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-100 rounded-xl text-teal-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-teal-800 mb-2 font-medium flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Hora *</span>
                  </label>
                  <select
                    required
                    value={bookingData.hora}
                    onChange={(e) => setBookingData({...bookingData, hora: e.target.value})}
                    className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-100 rounded-xl text-teal-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                  >
                    <option value="">Selecciona una hora</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-teal-800 mb-2 font-medium">Comentarios o Peticiones Especiales</label>
                <textarea
                  value={bookingData.comentarios}
                  onChange={(e) => setBookingData({...bookingData, comentarios: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-100 rounded-xl text-teal-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="¿Alguna preferencia especial? ¿Primera vez en un spa?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Confirmar Reserva</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-teal-100 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-teal-900 font-semibold mb-2 text-lg">Ubicación</h4>
              <p className="text-teal-700">
                Santa Ana, San José<br />
                Frente al Parque Central
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-teal-900 font-semibold mb-2 text-lg">Horario</h4>
              <p className="text-teal-700">
                Lunes - Sábado: 9:00 AM - 7:00 PM<br />
                Domingo: 10:00 AM - 5:00 PM
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-teal-900 font-semibold mb-2 text-lg">Contacto</h4>
              <p className="text-teal-700">
                +506 2203-4000<br />
                info@serenityspa.cr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-light">Serenity Spa</div>
                  <div className="text-xs text-teal-300">Wellness & Beauty</div>
                </div>
              </div>
              <p className="text-teal-300 text-sm mb-4 max-w-md">
                Tu refugio de paz y bienestar. Descubre la armonía perfecta entre cuerpo, 
                mente y espíritu en nuestro espacio dedicado a tu relajación.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-teal-200">Servicios</h4>
              <ul className="space-y-2 text-sm text-teal-300">
                <li>Masajes</li>
                <li>Faciales</li>
                <li>Tratamientos Corporales</li>
                <li>Paquetes Especiales</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-teal-200">Síguenos</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                  <span className="text-lg">📷</span>
                </div>
                <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                  <span className="text-lg">f</span>
                </div>
                <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                  <span className="text-lg">▶</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-800 mt-8 pt-8 text-center text-sm text-teal-400">
            <p>© 2026 Serenity Spa & Wellness • Demo por Keter Software</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
