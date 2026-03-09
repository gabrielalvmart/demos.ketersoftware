'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Smile,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  Shield,
  Award,
  Users,
  Star,
  Sparkles,
  FileText
} from 'lucide-react'

const services = [
  {
    name: 'Limpieza Dental',
    description: 'Profilaxis profesional con detección temprana de problemas',
    price: '₡25,000',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
  },
  {
    name: 'Blanqueamiento',
    description: 'Tratamiento profesional para una sonrisa más blanca',
    price: '₡180,000',
    duration: '1 hora',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
  },
  {
    name: 'Resinas (Empastes)',
    description: 'Restauración dental con materiales estéticos',
    price: '₡35,000',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
  },
  {
    name: 'Endodoncia',
    description: 'Tratamiento de conductos para salvar dientes',
    price: '₡180,000',
    duration: '1.5 horas',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=400&h=300&fit=crop',
  },
  {
    name: 'Extracciones',
    description: 'Extracción dental con anestesia local',
    price: '₡45,000',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop',
  },
  {
    name: 'Corona Dental',
    description: 'Restauración completa del diente',
    price: '₡280,000',
    duration: '2 sesiones',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
  },
  {
    name: 'Ortodoncia',
    description: 'Brackets y alineadores invisibles',
    price: 'Desde ₡450,000',
    duration: '12-24 meses',
    image: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=400&h=300&fit=crop',
  },
  {
    name: 'Implantes',
    description: 'Reemplazo permanente de dientes perdidos',
    price: '₡650,000',
    duration: 'Múltiples sesiones',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=300&fit=crop',
  },
]

const insurances = [
  'INS - Instituto Nacional de Seguros',
  'Seguros del Magisterio',
  'IMAS - Seguro Social',
  'Blue Cross Blue Shield',
  'Aetna Internacional',
  'Cigna Global',
  'Sagicor Seguros',
  'CCSS - Caja Costarricense',
]

export default function DentistaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    servicio: '',
    mensaje: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState('all')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-950 to-blue-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-blue-950/90 backdrop-blur-md z-50 border-b border-cyan-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-900/50">
                <Smile className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-cyan-400">DentalCare Plus</h1>
                <p className="text-xs text-cyan-600 tracking-widest uppercase">Excellence in Dentistry</p>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver a Demos</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">20+ Años de Experiencia</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Sonrisas Saludables,<br />Vidas Felices
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Atención dental de primera clase con tecnología de vanguardia y un equipo de profesionales comprometidos con su bienestar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cita"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Cita
                </a>
                <a
                  href="tel:+50622345678"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-800/30 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-blue-800/40 transition-all duration-200 border-2 border-white/20"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +506 2234-5678
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Users className="w-10 h-10 mb-3" />
                  <div className="text-3xl font-bold mb-1">5,000+</div>
                  <div className="text-blue-100">Pacientes Satisfechos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8">
                  <Star className="w-10 h-10 mb-3 fill-yellow-300 text-yellow-300" />
                  <div className="text-3xl font-bold mb-1">4.9/5</div>
                  <div className="text-blue-100">Calificación</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Award className="w-10 h-10 mb-3" />
                  <div className="text-3xl font-bold mb-1">20+</div>
                  <div className="text-blue-100">Años Experiencia</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8">
                  <Shield className="w-10 h-10 mb-3" />
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-blue-100">Certificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="cita" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-2">Agendar Cita</h3>
            <p className="text-blue-700">Complete el formulario y nos pondremos en contacto con usted</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-green-900 mb-2">¡Solicitud Recibida!</h4>
              <p className="text-green-700">
                Gracias por contactarnos. Nos comunicaremos con usted en las próximas 24 horas para confirmar su cita.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-blue-900 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-blue-900 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="+506 8888-7777"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="juan@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fecha" className="block text-sm font-semibold text-blue-900 mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    required
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="hora" className="block text-sm font-semibold text-blue-900 mb-2">
                    Hora Preferida *
                  </label>
                  <select
                    id="hora"
                    name="hora"
                    required
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  >
                    <option value="">Seleccione una hora</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-semibold text-blue-900 mb-2">
                  Servicio Requerido *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                >
                  <option value="">Seleccione un servicio</option>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-blue-900 mb-2">
                  Mensaje Adicional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="Cuéntenos sobre su consulta o necesidades especiales..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Solicitar Cita
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios</h3>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales con tecnología de última generación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-cyan-600 px-3 py-1.5 rounded-full shadow-lg">
                  {service.duration}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-600">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance Section */}
      <section className="bg-gradient-to-r from-blue-100 to-cyan-100 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-blue-900 mb-4">Seguros Aceptados</h3>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Trabajamos con las principales aseguradoras de Costa Rica e internacionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {insurances.map((insurance) => (
              <div
                key={insurance}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-blue-200 flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-blue-900 font-medium text-sm">{insurance}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border border-blue-200">
            <h4 className="text-2xl font-bold text-blue-900 mb-4 text-center">Opciones de Pago</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-blue-900 mb-1">Tarjetas</h5>
                <p className="text-sm text-blue-700">Débito y Crédito</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-blue-900 mb-1">Efectivo</h5>
                <p className="text-sm text-blue-700">Colones y Dólares</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-semibold text-blue-900 mb-1">Financiamiento</h5>
                <p className="text-sm text-blue-700">Planes flexibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-900 mb-3">Teléfonos</h4>
            <p className="text-blue-800 mb-2">
              <a href="tel:+50622345678" className="hover:text-cyan-600 transition-colors">
                +506 2234-5678
              </a>
            </p>
            <p className="text-blue-800 mb-2">
              <a href="tel:+50687654321" className="hover:text-cyan-600 transition-colors">
                +506 8765-4321
              </a>
            </p>
            <div className="mt-4 pt-4 border-t border-blue-100">
              <div className="flex items-center space-x-2 text-blue-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Lun - Vie: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700 mt-1">
                <Clock className="w-4 h-4 opacity-0" />
                <span className="text-sm">Sáb: 8:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-900 mb-3">Email</h4>
            <p className="text-blue-800 mb-2">
              <a href="mailto:info@sonrisa.cr" className="hover:text-cyan-600 transition-colors break-all">
                info@sonrisa.cr
              </a>
            </p>
            <p className="text-blue-800 mb-2">
              <a href="mailto:citas@sonrisa.cr" className="hover:text-cyan-600 transition-colors break-all">
                citas@sonrisa.cr
              </a>
            </p>
            <div className="mt-4 pt-4 border-t border-blue-100">
              <p className="text-sm text-blue-700">Respuesta en menos de 24 horas</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-900 mb-3">Ubicación</h4>
            <p className="text-blue-800 leading-relaxed mb-4">
              Paseo Colón<br />
              Edificio Médico Torre Salud, Piso 3<br />
              San José, Costa Rica
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Ver en Google Maps
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Smile className="w-6 h-6" />
                <span className="text-xl font-bold">Clínica Dental Sonrisa</span>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Comprometidos con la salud y belleza de su sonrisa desde hace más de 20 años.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Servicios</h5>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Odontología General</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Odontología Estética</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ortodoncia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Implantes</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Emergencias</h5>
              <p className="text-blue-200 mb-4">
                ¿Emergencia dental? Contáctenos inmediatamente:
              </p>
              <a
                href="tel:+50687654321"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
            <p>© 2026 Clínica Dental Sonrisa. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
              Demo creado por <a href="/" className="text-white hover:underline">Keter Software</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
