'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import * as Toast from '@radix-ui/react-toast'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

type FormData = {
  name: string
  email: string
  message: string
  botField?: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (message: string) => {
    setToastMessage(message)
    setToastOpen(true)
    setTimeout(() => setToastOpen(false), 4000)
  }

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      if (res.ok) {
        reset()
        showToast('Message sent successfully.')
      } else {
        showToast('Failed to send message.')
      }
    } catch (err) {
      console.error(err)
      showToast('Something went wrong.')
    }
  }

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">We’d love to hear from you. Whether it’s a quick question or a request for service, we’re here to help.</p>
        </div>
      </section>

      {/* CALLOUT CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
        {[
          {
            icon: <MapPin className="text-blue-700 w-8 h-8" />,
            title: 'Our Office',
            text: '123 Harbour Road\nHalifax, NS B3J 2X1',
          },
          {
            icon: <Phone className="text-blue-700 w-8 h-8" />,
            title: 'Phone',
            text: '+1 (902) 555-1234',
          },
          {
            icon: <Mail className="text-blue-700 w-8 h-8" />,
            title: 'Email',
            text: 'info@breakwatermarine.ca',
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200"
          >
            <div className="flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-line">{card.text}</p>
          </motion.div>
        ))}
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-2xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            type="text"
            {...register('botField')}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name', { required: 'Name is required' })} placeholder="Your Name" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
              })}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              placeholder="How can we help you?"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            open={toastOpen}
            onOpenChange={setToastOpen}
            className="fixed bottom-4 right-4 z-50 bg-white shadow-md rounded-md px-4 py-3 border border-gray-200 text-sm text-gray-900 w-[300px]"
          >
            <Toast.Title>{toastMessage}</Toast.Title>
          </Toast.Root>
          <Toast.Viewport className="fixed bottom-0 right-0 p-6 w-96 max-w-full outline-none" />
        </Toast.Provider>
      </section>
    </main>
  )
}
