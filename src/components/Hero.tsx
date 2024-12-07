import React from 'react';
import { Calendar } from 'lucide-react';
import imgcon from '../assets/2024-02-23.jpg';

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Seu sorriso perfeito</span>
                <span className="block text-[#252934]">Começa Aqui</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Experimente cuidados odontológicos de classe mundial em um ambiente confortável e moderno. Nossa equipe de especialistas está dedicada a proporcionar a você o sorriso saudável e bonito que você merece.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                
                <button
  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#FFD700] hover:bg-[#FFC300] md:py-4 md:text-lg md:px-10"
>
  <a href="https://w.app/StudioDentall">Converse conosco</a>
</button>



                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 full object-cover sm:h-102 md:h-96 lg:w-full lg:h-full"
          src={imgcon}
          alt="Modern dental clinic"
        />
      </div>
    </div>
  );
}