'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Droplet,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star,
  Sun,
  User,
  Wind,
} from 'lucide-react'

const services = [
  {
    name: 'Masajes',
    icon: Sparkles,
    color: 'bg-[#4f7f66] text-white',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=900&fit=crop',
    items: [
      {
        name: 'Masaje Relajante',
        duration: '60 min',
        price: '₡35,000',
        description: 'Técnicas suaves para liberar tensión y bajar el ritmo del sistema nervioso.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=650&fit=crop',
      },
      {
        name: 'Masaje Terapeutico',
        duration: '90 min',
        price: '₡48,000',
        description: 'Trabajo profundo para dolores musculares, postura y recuperación.',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&h=650&fit=crop',
      },
      {
        name: 'Piedras Calientes',
        duration: '75 min',
        price: '₡42,000',
        description: 'Calor mineral y presión controlada para relajación muscular profunda.',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&h=650&fit=crop',
      },
    ],
  },
  {
    name: 'Faciales',
    icon: Leaf,
    color: 'bg-[#7c8f58] text-white',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=900&fit=crop',
    items: [
      {
        name: 'Facial Hidratante',
        duration: '60 min',
        price: '₡32,000',
        description: 'Limpieza profunda, mascarilla nutritiva y masaje facial drenante.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&h=650&fit=crop',
      },
      {
        name: 'Facial Anti-Edad',
        duration: '75 min',
        price: '₡45,000',
        description: 'Peptidos, colageno y tecnologia no invasiva para luminosidad.',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&h=650&fit=crop',
      },
      {
        name: 'Facial Purificante',
        duration: '60 min',
        price: '₡35,000',
        description: 'Ideal para piel grasa, brotes y poros visibles.',
        image: 'https://images.unsplash.com/photo-1559599238-5cc6e4e4e991?w=900&h=650&fit=crop',
      },
    ],
  },
  {
    name: 'Corporales',
    icon: Droplet,
    color: 'bg-[#6f93a1] text-white',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=900&fit=crop',
    items: [
      {
        name: 'Exfoliación Corporal',
        duration: '45 min',
        price: '₡28,000',
        description: 'Sales marinas, aceites botánicos y piel renovada al tacto.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&h=650&fit=crop',
      },
      {
        name: 'Envoltura Detox',
        duration: '90 min',
        price: '₡52,000',
        description: 'Algas, arcillas y descanso térmico para desintoxicar y tonificar.',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&h=650&fit=crop',
      },
      {
        name: 'Ritual de Chocolate',
        duration: '120 min',
        price: '₡68,000',
        description: 'Exfoliación, envoltura aromática y masaje con notas de cacao.',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=900&h=650&fit=crop',
      },
    ],
  },
  {
    name: 'Paquetes',
    icon: Sun,
    color: 'bg-[#c58f6a] text-white',
    image: 'https://images.unsplash.com/photo-1610117025935-b88fe4cdc8a5?w=1200&h=900&fit=crop',
    items: [
      {
        name: 'Día de Spa',
        duration: '4 horas',
        price: '₡95,000',
        description: 'Masaje, facial, manicure, pedicure y almuerzo saludable.',
        image: 'https://images.unsplash.com/photo-1610117025935-b88fe4cdc8a5?w=900&h=650&fit=crop',
      },
      {
        name: 'Escapada Romántica',
        duration: '3 horas',
        price: '₡160,000',
        description: 'Experiencia para dos con masaje, jacuzzi privado y brindis.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&h=650&fit=crop',
      },
      {
        name: 'Retiro de Bienestar',
        duration: '6 horas',
        price: '₡125,000',
        description: 'Yoga, meditacion, tratamientos y guia de autocuidado.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&h=650&fit=crop',
      },
    ],
  },
]

const testimonials = [
  {
    name: 'María González',
    text: 'El ambiente se siente privado, natural y muy cuidado. Salí con la piel luminosa y una calma que me duró toda la semana.',
    service: 'Facial Hidratante',
  },
  {
    name: 'Carlos Ramirez',
    text: 'Reservé el paquete para parejas y fue una experiencia impecable. Todo estaba preparado, sin esperas y con muchísimo detalle.',
    service: 'Escapada Romántica',
  },
  {
    name: 'Sofia Vargas',
    text: 'Vengo cada mes por el facial anti-edad. El equipo explica todo con claridad y los productos se sienten premium.',
    service: 'Facial Anti-Edad',
  },
]

const wellnessPlans = [
  {
    title: 'Membresía Serena',
    price: '₡58,000 / mes',
    description: 'Un tratamiento mensual, prioridad de agenda y 10% en productos de cabina.',
    icon: Leaf,
  },
  {
    title: 'Tarjeta de regalo',
    price: 'Desde ₡35,000',
    description: 'Voucher digital para cumpleaños, agradecimientos corporativos o detalles de pareja.',
    icon: Heart,
  },
  {
    title: 'Ritual para dos',
    price: '₡160,000',
    description: 'Masaje en pareja, jacuzzi privado, aromaterapia y brindis saludable.',
    icon: Sparkles,
  },
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
    comentarios: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const SelectedServiceIcon = selectedService.icon

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="animate-page-in min-h-screen bg-[#f7f1e8] text-[#28342d]">
      <header className="sticky top-0 z-50 border-b border-[#ded3c3] bg-[#fbf7ef]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#4f7f66] text-white">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-light tracking-tight text-[#28342d]">Serena Ritual Spa</h1>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8b6b57]">Wellness & beauty</p>
            </div>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f7f66] transition hover:text-[#28342d]">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Volver a demos</span>
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&h=1400&fit=crop"
          alt="Sala de spa con camillas, luz natural y ambiente sereno"
          className="animate-image-drift absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,.97)_0%,rgba(247,241,232,.82)_46%,rgba(247,241,232,.24)_100%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="animate-fade-up min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#d8c8b3] bg-[#fbf7ef]/80 px-4 py-2 text-sm font-bold text-[#4f7f66] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Rituales de descanso, belleza y recuperación
            </div>
            <h2 className="max-w-[22rem] break-words text-4xl font-light leading-[1.05] tracking-tight text-[#28342d] sm:max-w-3xl sm:text-6xl lg:text-7xl">
              Bienestar que se ve tan cuidado como se siente.
            </h2>
            <p className="mt-6 max-w-[22rem] text-lg leading-8 text-[#627064] sm:max-w-2xl">
              Un sitio para spas necesita serenidad, confianza y deseo sensorial. Esta demo combina fotografía cálida,
              servicios claros y reservas fáciles sin perder elegancia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#reservar" className="shine-cta inline-flex items-center gap-2 bg-[#4f7f66] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#28342d]">
                Reservar cita
                <Calendar className="h-4 w-4" />
              </a>
              <a href="#servicios" className="inline-flex items-center gap-2 border border-[#d8c8b3] bg-[#fbf7ef] px-5 py-3 text-sm font-bold text-[#4f7f66] transition hover:border-[#4f7f66]">
                Ver servicios
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay-1 grid min-w-0 gap-4">
            {[
              { title: 'Ambiente sensorial', text: 'Aromas, luz natural y salas silenciosas.', icon: Wind },
              { title: 'Productos botánicos', text: 'Líneas orgánicas, veganas y cruelty-free.', icon: Leaf },
              { title: 'Terapeutas expertos', text: 'Protocolos personalizados para cada visita.', icon: Heart },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="interactive-card border border-[#d8c8b3] bg-[#fbf7ef]/90 p-5 shadow-sm backdrop-blur">
                  <Icon className="h-7 w-7 text-[#4f7f66]" />
                  <h3 className="mt-4 text-xl font-semibold text-[#28342d]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#627064]">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8b6b57]">Menu de bienestar</p>
            <h3 className="mt-3 text-5xl font-light tracking-tight text-[#28342d]">Servicios para bajar el volumen del mundo.</h3>
          </div>
          <p className="text-base leading-8 text-[#627064]">
            La arquitectura de servicios permite navegar por categoría, comparar duración y precio, y pasar a reserva
            con un solo clic.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {services.map((service) => {
            const Icon = service.icon
            const active = selectedService.name === service.name
            return (
              <button
                key={service.name}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`inline-flex items-center gap-2 border px-4 py-3 text-sm font-bold transition ${
                  active ? service.color : 'border-[#d8c8b3] bg-[#fbf7ef] text-[#4f7f66] hover:border-[#4f7f66]'
                }`}
              >
                <Icon className="h-4 w-4" />
                {service.name}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[390px_1fr]">
          <div className="relative min-h-[430px] overflow-hidden border border-[#d8c8b3]">
            <img src={selectedService.image} alt={selectedService.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#28342d]/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <SelectedServiceIcon className="h-8 w-8 text-[#f4d9bd]" />
              <h4 className="mt-4 text-4xl font-light">{selectedService.name}</h4>
              <p className="mt-3 text-sm leading-7 text-[#f7efe5]">Tratamientos presentados con imagen, beneficio, duración y precio para facilitar la decisión.</p>
            </div>
          </div>

          <div className="stagger-children grid gap-5 md:grid-cols-3">
            {selectedService.items.map((item) => (
              <article key={item.name} className="interactive-card group overflow-hidden border border-[#d8c8b3] bg-[#fbf7ef] shadow-sm transition hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 bg-[#28342d] px-3 py-1 text-xs font-bold text-white">
                    <Clock className="h-3.5 w-3.5" />
                    {item.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h5 className="text-xl font-semibold text-[#28342d]">{item.name}</h5>
                  <p className="mt-3 min-h-[96px] text-sm leading-7 text-[#627064]">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#d8c8b3] pt-4">
                    <span className="text-xl font-semibold text-[#8b6b57]">{item.price}</span>
                    <a href="#reservar" className="inline-flex items-center gap-1 text-sm font-bold text-[#4f7f66] hover:text-[#28342d]">
                      Reservar <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8c8b3] bg-[#fbf7ef]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8b6b57]">Experiencias reales</p>
            <h3 className="mt-3 text-5xl font-light tracking-tight text-[#28342d]">Calma que se puede recomendar.</h3>
          </div>
          <div className="stagger-children grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="interactive-card border border-[#d8c8b3] bg-white p-6 shadow-sm">
                <Quote className="h-8 w-8 text-[#c58f6a]" />
                <div className="mt-4 flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[#c58f6a] text-[#c58f6a]" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[#627064]">"{testimonial.text}"</p>
                <div className="mt-6 border-t border-[#d8c8b3] pt-4">
                  <p className="font-semibold text-[#28342d]">{testimonial.name}</p>
                  <p className="text-sm text-[#8b6b57]">{testimonial.service}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8b6b57]">Ingresos recurrentes</p>
            <h3 className="mt-3 text-5xl font-light tracking-tight text-[#28342d]">Paquetes que convierten una visita en hábito.</h3>
          </div>
          <p className="text-base leading-8 text-[#627064]">
            Un spa vende mejor cuando también ofrece membresías, regalos y experiencias para dos. Esta sección abre
            caminos de compra claros antes del formulario de reserva.
          </p>
        </div>
        <div className="stagger-children grid gap-5 md:grid-cols-3">
          {wellnessPlans.map((plan) => {
            const Icon = plan.icon
            return (
              <article key={plan.title} className="interactive-card border border-[#d8c8b3] bg-[#fbf7ef] p-6 shadow-sm transition hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center bg-[#4f7f66] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-6 text-2xl font-semibold text-[#28342d]">{plan.title}</h4>
                <p className="mt-2 text-xl font-semibold text-[#8b6b57]">{plan.price}</p>
                <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#627064]">{plan.description}</p>
                <a href="#reservar" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#4f7f66] transition hover:text-[#28342d]">
                  Reservar o consultar
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section id="reservar" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8b6b57]">Reservas</p>
          <h3 className="mt-3 text-5xl font-light tracking-tight text-[#28342d]">Su proximo ritual empieza aqui.</h3>
          <p className="mt-5 text-base leading-8 text-[#627064]">
            La reserva solicita el servicio, fecha y necesidades especiales para que el spa pueda preparar sala,
            terapeuta y productos antes de la llegada.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              'Confirmación por teléfono o correo',
              'Opciones para parejas y regalos',
              'Recomendaciones segun primera visita',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border border-[#d8c8b3] bg-[#fbf7ef] p-4">
                <CheckCircle className="h-5 w-5 text-[#4f7f66]" />
                <span className="text-sm font-semibold text-[#28342d]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="animate-pop border border-[#b9d2bf] bg-[#fbf7ef] p-10 text-center shadow-xl">
            <CheckCircle className="icon-breathe mx-auto h-14 w-14 text-[#4f7f66]" />
            <h4 className="mt-4 text-3xl font-light text-[#28342d]">Reserva recibida</h4>
            <p className="mt-2 text-[#627064]">El equipo confirmará disponibilidad y recomendaciones para su cita.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 border border-[#d8c8b3] bg-[#fbf7ef] p-6 shadow-xl md:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#28342d]">
                <User className="h-4 w-4 text-[#4f7f66]" />
                Nombre completo *
              </span>
              <input
                type="text"
                required
                value={bookingData.nombre}
                onChange={(e) => setBookingData({ ...bookingData, nombre: e.target.value })}
                placeholder="Tu nombre"
                className="w-full border border-[#d8c8b3] bg-white px-4 py-3 outline-none transition focus:border-[#4f7f66]"
              />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#28342d]">
                <Phone className="h-4 w-4 text-[#4f7f66]" />
                Telefono *
              </span>
              <input
                type="tel"
                required
                value={bookingData.telefono}
                onChange={(e) => setBookingData({ ...bookingData, telefono: e.target.value })}
                placeholder="+506 8888-8888"
                className="w-full border border-[#d8c8b3] bg-white px-4 py-3 outline-none transition focus:border-[#4f7f66]"
              />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#28342d]">
                <Mail className="h-4 w-4 text-[#4f7f66]" />
                Email *
              </span>
              <input
                type="email"
                required
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                placeholder="correo@ejemplo.com"
                className="w-full border border-[#d8c8b3] bg-white px-4 py-3 outline-none transition focus:border-[#4f7f66]"
              />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#28342d]">
                <Sparkles className="h-4 w-4 text-[#4f7f66]" />
                Servicio *
              </span>
              <select
                required
                value={bookingData.servicio}
                onChange={(e) => setBookingData({ ...bookingData, servicio: e.target.value })}
                className="w-full border border-[#d8c8b3] bg-white px-4 py-3 outline-none transition focus:border-[#4f7f66]"
              >
                <option value="">Seleccione un servicio</option>
                {services.flatMap((category) =>
                  category.items.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} - {item.price}
                    </option>
                  )),
                )}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#28342d]">
                <Calendar className="h-4 w-4 text-[#4f7f66]" />
                Fecha *
              </span>
              <input
                type="date"
                required
                value={bookingData.fecha}
                onChange={(e) => setBookingData({ ...bookingData, fecha: e.target.value })}
                className="w-full border border-[#d8c8b3] bg-white px-4 py-3 outline-none transition focus:border-[#4f7f66]"
              />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#28342d]">
                <Clock className="h-4 w-4 text-[#4f7f66]" />
                Hora *
              </span>
              <select
                required
                value={bookingData.hora}
                onChange={(e) => setBookingData({ ...bookingData, hora: e.target.value })}
                className="w-full border border-[#d8c8b3] bg-white px-4 py-3 outline-none transition focus:border-[#4f7f66]"
              >
                <option value="">Seleccione una hora</option>
                {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-bold text-[#28342d]">Comentarios o peticiones especiales</span>
              <textarea
                rows={4}
                value={bookingData.comentarios}
                onChange={(e) => setBookingData({ ...bookingData, comentarios: e.target.value })}
                placeholder="Preferencias, primera visita, embarazo, lesiones o alergias."
                className="w-full resize-none border border-[#d8c8b3] bg-white px-4 py-3 outline-none transition focus:border-[#4f7f66]"
              />
            </label>
            <button type="submit" className="shine-cta inline-flex items-center justify-center gap-2 bg-[#4f7f66] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#28342d] md:col-span-2">
              Confirmar reserva
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </section>

      <section className="border-y border-[#d8c8b3] bg-[#28342d] text-white">
        <div className="stagger-children mx-auto grid max-w-7xl gap-5 px-4 py-14 text-center sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { title: 'Ubicación', body: 'Santa Ana, San José | Frente al Parque Central', icon: MapPin },
            { title: 'Horario', body: 'Lunes a sábado 9:00 AM - 7:00 PM | Domingo 10:00 AM - 5:00 PM', icon: Clock },
            { title: 'Contacto', body: '+506 2203-4000 | reservas@serenaritual.cr', icon: Phone },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="interactive-card border border-white/10 bg-white/5 p-6">
                <Icon className="mx-auto h-7 w-7 text-[#f4d9bd]" />
                <h4 className="mt-4 text-xl font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <footer className="bg-[#f7f1e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-[#627064] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Serena Ritual Spa. Demo creado por Keter Software.</p>
          <p>Masajes, faciales, rituales corporales y paquetes de bienestar.</p>
        </div>
      </footer>
    </div>
  )
}
