import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Fale conosco
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We're here to help with all your dental care needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-[#FFD700]" />
                <span className="ml-3 text-gray-600">
                R. Barão do Triunfo, 550 - Brooklin, São Paulo
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#FFD700]" />
                <span className="ml-3 text-gray-600">(11) 97086-2714</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#FFD700]" />
                <span className="ml-3 text-gray-600">ss.studiodental@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-[#FFD700]" />
                <div className="ml-3 text-gray-600">
                  <p>Seg-Sex: 8:00 - 17:00</p>
                  <p>Sáb: Fechado</p>
                  <p>Dom: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-black bg-[#FFD700] px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}