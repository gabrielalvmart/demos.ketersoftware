'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'

const services = [
  {
    name: 'Limpieza Dental',
    description: 'Profilaxis profesional, pulido y revision preventiva completa.',
    price: '₡25,000',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=650&fit=crop',
  },
  {
    name: 'Blanqueamiento',
    description: 'Tratamiento seguro para una sonrisa mas luminosa en una visita.',
    price: '₡180,000',
    duration: '1 hora',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&h=650&fit=crop',
  },
  {
    name: 'Ortodoncia',
    description: 'Brackets y alineadores transparentes con seguimiento digital.',
    price: 'Desde ₡450,000',
    duration: '12-24 meses',
    image: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=900&h=650&fit=crop',
  },
  {
    name: 'Implantes',
    description: 'Reemplazo permanente de piezas dentales con planificación 3D.',
    price: '₡650,000',
    duration: 'Plan integral',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=650&fit=crop',
  },
  {
    name: 'Restauraciones',
    description: 'Resinas esteticas, coronas y reconstrucciones de apariencia natural.',
    price: 'Desde ₡35,000',
    duration: '45-90 min',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=650&fit=crop',
  },
  {
    name: 'Emergencias',
    description: 'Atención prioritaria para dolor, fracturas, infecciones y traumatismos.',
    price: 'Valoracion',
    duration: 'Mismo dia',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&h=650&fit=crop',
  },
]

const insurances = [
  'INS',
  'Blue Cross Blue Shield',
  'Cigna Global',
  'Aetna Internacional',
  'Seguros del Magisterio',
  'Sagicor Seguros',
  'CCSS',
  'Planes corporativos',
]

const stats = [
  { value: '5,000+', label: 'pacientes atendidos', icon: Users },
  { value: '4.9/5', label: 'calificación promedio', icon: Star },
  { value: '20+', label: 'años de experiencia', icon: Award },
  { value: '100%', label: 'equipo certificado', icon: Shield },
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
    <div className="min-h-screen bg-[#f5fbff] text-[#092235]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d6edf8] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#0f7490] text-white">
              <Smile className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#092235]">Clínica Nerea</h1>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#0f7490]">Odontología avanzada</p>
            </div>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f7490] transition hover:text-[#092235]">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Volver a demos</span>
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=2200&h=1300&fit=crop"
            alt="Clínica dental moderna"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#f5fbff_0%,rgba(245,251,255,.96)_42%,rgba(245,251,255,.68)_100%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_460px] lg:px-8 lg:py-28">
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#bde8f4] bg-white px-4 py-2 text-sm font-bold text-[#0f7490] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Sonrisas naturales con tecnología digital
            </div>
            <h2 className="max-w-[22rem] break-words text-4xl font-semibold leading-[1.02] tracking-tight text-[#092235] sm:max-w-3xl sm:text-6xl lg:text-7xl">
              Odontología que se siente clara, moderna y humana.
            </h2>
            <p className="mt-6 max-w-[22rem] text-lg leading-8 text-[#405d6f] sm:max-w-2xl">
              Una landing para clínicas que necesitan generar confianza antes de la primera llamada: servicios visibles,
              agenda rápida, seguros aceptados y mensajes médicos sin fricción.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cita" className="inline-flex items-center gap-2 bg-[#0f7490] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#092235]">
                Agendar cita
                <Calendar className="h-4 w-4" />
              </a>
              <a href="tel:+50622345678" className="inline-flex items-center gap-2 border border-[#bde8f4] bg-white px-5 py-3 text-sm font-bold text-[#0f7490] transition hover:border-[#0f7490]">
                Llamar ahora
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className={`border border-[#d6edf8] bg-white p-5 shadow-sm ${index % 2 ? 'lg:translate-y-7' : ''}`}>
                  <Icon className="h-7 w-7 text-[#0f7490]" />
                  <div className="mt-5 text-3xl font-semibold text-[#092235]">{stat.value}</div>
                  <div className="mt-1 text-sm leading-6 text-[#557082]">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="cita" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="border border-[#d6edf8] bg-white p-6 shadow-2xl shadow-[#0f7490]/10 md:p-10">
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#0f7490]">Agenda prioritaria</p>
              <h3 className="mt-3 text-4xl font-semibold tracking-tight text-[#092235]">Solicite su cita</h3>
              <p className="mt-3 text-sm leading-7 text-[#557082]">
                El formulario demuestra una ruta de conversion sencilla para pacientes nuevos y recurrentes.
              </p>
            </div>
            <div className="border border-[#d6edf8] bg-[#f5fbff] px-4 py-3 text-sm font-semibold text-[#0f7490]">
              Respuesta en menos de 24 horas
            </div>
          </div>

          {submitted ? (
            <div className="border border-[#b7ebc6] bg-[#f0fff4] p-8 text-center">
              <CheckCircle className="mx-auto h-14 w-14 text-[#1f9d55]" />
              <h4 className="mt-4 text-2xl font-semibold text-[#092235]">Solicitud recibida</h4>
              <p className="mt-2 text-[#405d6f]">El equipo le contactara pronto para confirmar fecha, hora y especialista.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#092235]">Nombre completo *</span>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Juan Perez"
                  className="w-full border border-[#c8e3ef] bg-[#f8fcff] px-4 py-3 text-[#092235] outline-none transition focus:border-[#0f7490] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#092235]">Teléfono *</span>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+506 8888-7777"
                  className="w-full border border-[#c8e3ef] bg-[#f8fcff] px-4 py-3 text-[#092235] outline-none transition focus:border-[#0f7490] focus:bg-white"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#092235]">Correo electrónico *</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  className="w-full border border-[#c8e3ef] bg-[#f8fcff] px-4 py-3 text-[#092235] outline-none transition focus:border-[#0f7490] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#092235]">Fecha preferida *</span>
                <input
                  type="date"
                  name="fecha"
                  required
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full border border-[#c8e3ef] bg-[#f8fcff] px-4 py-3 text-[#092235] outline-none transition focus:border-[#0f7490] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#092235]">Hora preferida *</span>
                <select
                  name="hora"
                  required
                  value={formData.hora}
                  onChange={handleChange}
                  className="w-full border border-[#c8e3ef] bg-[#f8fcff] px-4 py-3 text-[#092235] outline-none transition focus:border-[#0f7490] focus:bg-white"
                >
                  <option value="">Seleccione una hora</option>
                  {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'].map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#092235]">Servicio requerido *</span>
                <select
                  name="servicio"
                  required
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full border border-[#c8e3ef] bg-[#f8fcff] px-4 py-3 text-[#092235] outline-none transition focus:border-[#0f7490] focus:bg-white"
                >
                  <option value="">Seleccione un servicio</option>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#092235]">Mensaje adicional</span>
                <textarea
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Dolor, urgencia, seguro medico o necesidades especiales."
                  className="w-full resize-none border border-[#c8e3ef] bg-[#f8fcff] px-4 py-3 text-[#092235] outline-none transition focus:border-[#0f7490] focus:bg-white"
                />
              </label>
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#0f7490] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#092235] md:col-span-2">
                Solicitar cita
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="border-y border-[#d6edf8] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#0f7490]">Tratamientos</p>
              <h3 className="mt-3 text-5xl font-semibold tracking-tight text-[#092235]">Servicios claros, precios visibles.</h3>
            </div>
            <p className="text-base leading-8 text-[#557082]">
              La pagina presenta los servicios con fotografia clinica, duracion y precio para reducir dudas y acelerar
              la decisión de agendar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="group overflow-hidden border border-[#d6edf8] bg-[#f8fcff] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0f7490]/10">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute right-3 top-3 bg-white px-3 py-1 text-xs font-bold text-[#0f7490] shadow-sm">{service.duration}</span>
                </div>
                <div className="p-5">
                  <h4 className="text-2xl font-semibold text-[#092235]">{service.name}</h4>
                  <p className="mt-3 min-h-[76px] text-sm leading-7 text-[#557082]">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#d6edf8] pt-4">
                    <span className="text-xl font-bold text-[#0f7490]">{service.price}</span>
                    <a href="#cita" className="inline-flex items-center gap-1 text-sm font-bold text-[#092235] hover:text-[#0f7490]">
                      Agendar <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#092235] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <Shield className="h-10 w-10 text-[#67e8f9]" />
            <h3 className="mt-5 text-5xl font-semibold tracking-tight">Seguros y pagos sin sorpresas.</h3>
            <p className="mt-5 text-base leading-8 text-[#c3e7f3]">
              La confianza financiera tambien vende. Esta seccion deja claro con quien trabaja la clinica y como puede
              pagar el paciente.
            </p>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {insurances.map((insurance) => (
                <div key={insurance} className="flex items-center gap-3 border border-white/10 bg-white/10 p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#67e8f9]" />
                  <span className="text-sm font-semibold text-white">{insurance}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Tarjetas', detail: 'Credito y debito', icon: CreditCard },
                { label: 'Financiamiento', detail: 'Planes flexibles', icon: FileText },
                { label: 'Emergencias', detail: 'Atención prioritaria', icon: Phone },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="border border-white/10 bg-white p-5 text-[#092235]">
                    <Icon className="h-6 w-6 text-[#0f7490]" />
                    <h4 className="mt-4 font-bold">{item.label}</h4>
                    <p className="mt-1 text-sm text-[#557082]">{item.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: 'Teléfonos', icon: Phone, body: '+506 2234-5678', extra: 'Emergencias: +506 8765-4321' },
            { title: 'Email', icon: Mail, body: 'citas@clinicanerea.cr', extra: 'info@clinicanerea.cr' },
            { title: 'Ubicación', icon: MapPin, body: 'Paseo Colón, San José', extra: 'Torre Salud, piso 3' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="border border-[#d6edf8] bg-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-[#0f7490]" />
                <h4 className="mt-5 text-2xl font-semibold">{item.title}</h4>
                <p className="mt-3 font-bold text-[#092235]">{item.body}</p>
                <p className="mt-1 text-sm text-[#557082]">{item.extra}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-5 flex flex-col gap-3 border border-[#d6edf8] bg-white p-5 text-sm text-[#557082] sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#0f7490]" />
            Lunes a viernes 8:00 AM - 6:00 PM | Sábados 8:00 AM - 1:00 PM
          </div>
          <a href="#cita" className="inline-flex items-center gap-2 font-bold text-[#0f7490]">
            Reservar valoración <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#d6edf8] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-[#557082] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Clínica Nerea. Demo creado por Keter Software.</p>
          <p>Odontología general, estética, implantes y emergencias.</p>
        </div>
      </footer>
    </div>
  )
}
