'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  ChefHat,
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Star,
  Utensils,
  Wine,
} from 'lucide-react'

const menuCategories = [
  {
    name: 'Entradas',
    image: 'https://images.unsplash.com/photo-1559058922-6c5d82c9f3b2?w=1000&h=760&fit=crop',
    items: [
      {
        name: 'Carpaccio de Res',
        description: 'Láminas finas, rúcula, parmesano y reducción balsámica.',
        price: '₡8,500',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=650&fit=crop',
      },
      {
        name: 'Bruschetta Tricolor',
        description: 'Pan rustico, tomate maduro, albahaca y mozzarella fresca.',
        price: '₡6,800',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=900&h=650&fit=crop',
      },
      {
        name: 'Ceviche de Corvina',
        description: 'Pescado fresco, limón mandarina, chile dulce y culantro.',
        price: '₡9,200',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=900&h=650&fit=crop',
      },
    ],
  },
  {
    name: 'Principales',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&h=760&fit=crop',
    items: [
      {
        name: 'Filete Mignon',
        description: 'Res premium, salsa de vino tinto, pure trufado y vegetales.',
        price: '₡18,500',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=900&h=650&fit=crop',
      },
      {
        name: 'Salmón a la Parrilla',
        description: 'Salmón atlántico, risotto de espárragos y mantequilla de limón.',
        price: '₡16,800',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=900&h=650&fit=crop',
      },
      {
        name: 'Fettuccine Carbonara',
        description: 'Pasta hecha en casa, panceta, huevo, parmesano y pimienta.',
        price: '₡12,500',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=900&h=650&fit=crop',
      },
    ],
  },
  {
    name: 'Postres',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1000&h=760&fit=crop',
    items: [
      {
        name: 'Tiramisú Clásico',
        description: 'Cafe intenso, mascarpone, cacao y bizcocho delicado.',
        price: '₡5,500',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=900&h=650&fit=crop',
      },
      {
        name: 'Lava Cake Belga',
        description: 'Chocolate tibio, centro fluido y helado de vainilla.',
        price: '₡6,200',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=900&h=650&fit=crop',
      },
      {
        name: 'Panna Cotta',
        description: 'Vainilla natural, coulis de frutos rojos y crumble.',
        price: '₡5,800',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&h=650&fit=crop',
      },
    ],
  },
]

export default function RestaurantePage() {
  const [selectedCategory, setSelectedCategory] = useState('Principales')
  const [reservationData, setReservationData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    personas: '2',
    comentarios: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const selectedMenu = menuCategories.find((category) => category.name === selectedCategory) || menuCategories[1]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[#11100e] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d6aa5b]/20 bg-[#11100e]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#8f2f2f] text-[#f8e4b0]">
              <Utensils className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#f8e4b0]">La Maison Obsidiana</h1>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6aa5b]">Fine dining</p>
            </div>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#d6aa5b] transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Volver a demos</span>
          </Link>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden pt-24">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=2400&h=1500&fit=crop"
          alt="Restaurante elegante con mesas preparadas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,14,.96)_0%,rgba(17,16,14,.72)_48%,rgba(17,16,14,.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#11100e] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#d6aa5b]/30 bg-[#d6aa5b]/10 px-4 py-2 text-sm font-bold text-[#f8e4b0] backdrop-blur">
              <Award className="h-4 w-4" />
              Cocina de autor | Temporada 2026
            </div>
            <h2 className="max-w-[22rem] break-words font-serif text-4xl font-semibold leading-[1.02] tracking-tight sm:max-w-3xl sm:text-6xl lg:text-8xl">
              Reservas para una noche que se recuerda.
            </h2>
            <p className="mt-6 max-w-[22rem] text-lg leading-8 text-[#e6d3ad] sm:max-w-2xl">
              Un restaurante de alta cocina necesita apetito visual, elegancia sobria y una ruta de reserva directa. Esta
              demo vende atmósfera antes de mostrar el menú.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#reservar" className="inline-flex items-center gap-2 bg-[#d6aa5b] px-5 py-3 text-sm font-bold text-[#11100e] transition hover:bg-[#f8e4b0]">
                Reservar mesa
                <Calendar className="h-4 w-4" />
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Ver menú
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-[22rem] min-w-0 border border-[#d6aa5b]/25 bg-[#11100e]/70 p-6 backdrop-blur sm:max-w-none">
            <Wine className="h-8 w-8 text-[#d6aa5b]" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.26em] text-[#d6aa5b]">Menú degustación</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold text-white">7 tiempos, maridaje opcional.</h3>
            <p className="mt-4 break-words text-sm leading-7 text-[#e6d3ad]">
              Ingredientes costarricenses, técnica francesa y una selección de vinos pensada para cenas privadas,
              aniversarios y experiencias corporativas.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ['4.9', 'rating'],
                ['36', 'cubiertos'],
                ['7', 'tiempos'],
              ].map(([value, label]) => (
                <div key={label} className="border border-[#d6aa5b]/20 bg-white/5 p-3">
                  <div className="text-2xl font-semibold text-[#f8e4b0]">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#d6aa5b]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#171411]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d6aa5b]">Chef y origen</p>
            <h3 className="mt-3 font-serif text-5xl font-semibold tracking-tight">Cocina de precisión con alma local.</h3>
            <p className="mt-6 text-base leading-8 text-[#d8c6a3]">
              Bajo la dirección del chef Jean-Pierre Morales, el menú combina técnicas europeas, producto nacional y
              una presentacion sobria que se siente exclusiva sin perder calidez.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: '20+', label: 'años de oficio' },
                { value: '95%', label: 'satisfacción' },
                { value: '48h', label: 'mise en place' },
              ].map((item) => (
                <div key={item.label} className="border border-white/10 bg-[#11100e] p-4">
                  <div className="text-3xl font-semibold text-[#f8e4b0]">{item.value}</div>
                  <p className="mt-1 text-sm text-[#d8c6a3]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1400&h=1000&fit=crop"
              alt="Chef preparando un plato en cocina profesional"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/70 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <ChefHat className="h-8 w-8 text-[#d6aa5b]" />
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.22em] text-[#f8e4b0]">Chef Morales</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d6aa5b]">Carta</p>
          <h3 className="mt-3 font-serif text-5xl font-semibold tracking-tight">Platos que justifican la reserva.</h3>
        </div>

        <div className="mb-8 flex justify-center gap-3 overflow-x-auto pb-2">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setSelectedCategory(category.name)}
              className={`shrink-0 border px-5 py-3 text-sm font-bold transition ${
                selectedCategory === category.name
                  ? 'border-[#d6aa5b] bg-[#d6aa5b] text-[#11100e]'
                  : 'border-white/10 bg-white/5 text-[#d8c6a3] hover:border-[#d6aa5b] hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <div className="relative min-h-[430px] overflow-hidden border border-white/10">
            <img src={selectedMenu.image} alt={selectedMenu.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/90 via-[#11100e]/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <Wine className="h-8 w-8 text-[#d6aa5b]" />
              <h4 className="mt-4 font-serif text-4xl font-semibold">{selectedMenu.name}</h4>
              <p className="mt-3 text-sm leading-7 text-[#d8c6a3]">Seleccion curada para mostrar calidad, precio y composicion sin romper la experiencia visual.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {selectedMenu.items.map((item) => (
              <article key={item.name} className="group overflow-hidden border border-white/10 bg-[#171411] transition hover:-translate-y-1 hover:border-[#d6aa5b]/60">
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 right-3 bg-[#d6aa5b] px-3 py-2 text-sm font-bold text-[#11100e]">{item.price}</span>
                </div>
                <div className="p-5">
                  <h5 className="font-serif text-2xl font-semibold text-white">{item.name}</h5>
                  <p className="mt-3 text-sm leading-7 text-[#d8c6a3]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reservar" className="bg-[#f5efe2] text-[#211814]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8f2f2f]">Reservaciones</p>
            <h3 className="mt-3 font-serif text-5xl font-semibold tracking-tight">Una mesa excelente empieza con un formulario simple.</h3>
            <p className="mt-5 text-base leading-8 text-[#6d5748]">
              El formulario captura los datos justos para confirmar la reserva y permite que el equipo atienda alergias,
              fechas especiales y preferencias de mesa.
            </p>
            <div className="mt-8 flex items-center gap-3 border border-[#dac6a2] bg-white p-4">
              <Star className="h-6 w-6 fill-[#d6aa5b] text-[#d6aa5b]" />
              <p className="text-sm font-semibold text-[#211814]">Ideal para cenas románticas, reuniones privadas y eventos ejecutivos.</p>
            </div>
          </div>

          {submitted ? (
            <div className="border border-[#b7d7a8] bg-white p-10 text-center shadow-xl">
              <CheckCircle className="mx-auto h-14 w-14 text-[#2f855a]" />
              <h4 className="mt-4 font-serif text-3xl font-semibold">Reservación recibida</h4>
              <p className="mt-2 text-[#6d5748]">El equipo confirmará los detalles por teléfono o correo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 border border-[#dac6a2] bg-white p-6 shadow-xl md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Nombre completo *</span>
                <input
                  type="text"
                  required
                  value={reservationData.nombre}
                  onChange={(e) => setReservationData({ ...reservationData, nombre: e.target.value })}
                  placeholder="Juan Perez"
                  className="w-full border border-[#dac6a2] bg-[#fbf7ee] px-4 py-3 outline-none transition focus:border-[#8f2f2f] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Telefono *</span>
                <input
                  type="tel"
                  required
                  value={reservationData.telefono}
                  onChange={(e) => setReservationData({ ...reservationData, telefono: e.target.value })}
                  placeholder="+506 8888-8888"
                  className="w-full border border-[#dac6a2] bg-[#fbf7ee] px-4 py-3 outline-none transition focus:border-[#8f2f2f] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Email *</span>
                <input
                  type="email"
                  required
                  value={reservationData.email}
                  onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })}
                  placeholder="correo@ejemplo.com"
                  className="w-full border border-[#dac6a2] bg-[#fbf7ee] px-4 py-3 outline-none transition focus:border-[#8f2f2f] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Personas *</span>
                <select
                  required
                  value={reservationData.personas}
                  onChange={(e) => setReservationData({ ...reservationData, personas: e.target.value })}
                  className="w-full border border-[#dac6a2] bg-[#fbf7ee] px-4 py-3 outline-none transition focus:border-[#8f2f2f] focus:bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Fecha *</span>
                <input
                  type="date"
                  required
                  value={reservationData.fecha}
                  onChange={(e) => setReservationData({ ...reservationData, fecha: e.target.value })}
                  className="w-full border border-[#dac6a2] bg-[#fbf7ee] px-4 py-3 outline-none transition focus:border-[#8f2f2f] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Hora *</span>
                <select
                  required
                  value={reservationData.hora}
                  onChange={(e) => setReservationData({ ...reservationData, hora: e.target.value })}
                  className="w-full border border-[#dac6a2] bg-[#fbf7ee] px-4 py-3 outline-none transition focus:border-[#8f2f2f] focus:bg-white"
                >
                  <option value="">Seleccione una hora</option>
                  {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold">Comentarios especiales</span>
                <textarea
                  rows={4}
                  value={reservationData.comentarios}
                  onChange={(e) => setReservationData({ ...reservationData, comentarios: e.target.value })}
                  placeholder="Alergias, ocasión especial o preferencia de mesa."
                  className="w-full resize-none border border-[#dac6a2] bg-[#fbf7ee] px-4 py-3 outline-none transition focus:border-[#8f2f2f] focus:bg-white"
                />
              </label>
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#8f2f2f] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#211814] md:col-span-2">
                Confirmar reservación
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#171411]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 text-center sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { title: 'Dirección', body: 'Escazú Village, San José', icon: MapPin },
            { title: 'Horario', body: 'Martes a domingo | 6:00 PM - 11:00 PM', icon: Clock },
            { title: 'Contacto', body: '+506 2289-5000 | reservas@obsidiana.cr', icon: Phone },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="border border-white/10 bg-[#11100e] p-6">
                <Icon className="mx-auto h-7 w-7 text-[#d6aa5b]" />
                <h4 className="mt-4 font-serif text-2xl font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#d8c6a3]">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <footer className="bg-[#0b0a09]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-serif text-xl font-semibold text-[#f8e4b0]">La Maison Obsidiana</div>
            <p className="mt-1 text-sm text-[#8f816d]">Fine dining experience | Demo por Keter Software</p>
          </div>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-[#d6aa5b] transition hover:bg-[#8f2f2f] hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-[#d6aa5b] transition hover:bg-[#8f2f2f] hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
