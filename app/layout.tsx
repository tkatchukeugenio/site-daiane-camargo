'use client';

import React, { useState } from 'react';
import "./globals.css";
import ChatIA from "./components/ChatIA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-[#FAFAFA] flex flex-col min-h-screen">
        
        {/* HEADER */}
        <header className="w-full h-20 md:h-24 py-2 px-6 md:px-12 bg-white/95 backdrop-blur-md flex justify-between items-center z-[60] fixed top-0 border-b border-[#C8B4E4]/10">
          
          {/* Identidade Visual */}
          <div className="flex items-center gap-3 md:gap-4 h-full py-2">
            <img 
              src="/logo.png" 
              alt="Logo Daiane Camargo" 
              className="h-10 md:h-16 w-auto object-contain mix-blend-multiply"
            />
            <div className="flex flex-col border-l border-[#C8B4E4]/30 pl-3 md:pl-4">
              <span className="text-lg md:text-2xl font-semibold text-[#2D2D2D] leading-tight">
                Daiane Camargo
              </span>
              <span className="text-[9px] md:text-xs text-[#5C5C5C] font-light uppercase tracking-widest">
                Psicóloga Clínica
              </span>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-10 h-full">
            <nav className="flex gap-8 text-[#5C5C5C] font-medium text-sm lg:text-base">
              <a href="#sobre" className="hover:text-[#A890C8] transition-colors">Sobre Mim</a>
              <a href="#especialidades" className="hover:text-[#A890C8] transition-colors">Especialidades</a>
              <a href="#artigos" className="hover:text-[#A890C8] transition-colors">Artigos</a>
            </nav>
            <a href="#" className="px-6 py-2.5 bg-[#C8B4E4] hover:bg-[#A890C8] text-[#2D2D2D] font-bold rounded-full transition-all text-sm">
              Agendar Sessão
            </a>
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#5C5C5C] p-2 z-[70]"
          >
            {isMenuOpen ? (
              <span className="text-3xl">✕</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </header>

        {/* MENU LATERAL MOBILE (OVERLAY) */}
        <div className={`fixed inset-0 bg-white z-[55] lg:hidden transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-[#2D2D2D] font-medium">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A890C8]">Sobre Mim</a>
            <a href="#especialidades" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A890C8]">Especialidades</a>
            <a href="#artigos" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A890C8]">Artigos</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="mt-4 px-10 py-4 bg-[#C8B4E4] text-[#2D2D2D] rounded-full text-lg font-bold">
              Agendar Sessão
            </a>
          </nav>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-grow pt-24 md:pt-32">
          {children}
        </main>

        {/* RODAPÉ */}
        <footer className="bg-white border-t border-[#C8B4E4]/20 pt-16 pb-8">
          <div className="container mx-auto px-6 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="flex flex-col items-center md:items-start space-y-4">
                <img src="/logo.png" alt="Logo" className="w-12 h-auto mix-blend-multiply" />
                <span className="font-bold text-[#2D2D2D]">Daiane Camargo</span>
                <p className="text-sm text-[#5C5C5C]">CRP 00/00000</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2D2D2D] mb-6">Navegação</h4>
                <ul className="space-y-4 text-sm text-[#5C5C5C]">
                  <li><a href="#sobre">Sobre Mim</a></li>
                  <li><a href="#especialidades">Especialidades</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#2D2D2D] mb-6">Contato</h4>
                <p className="text-sm text-[#5C5C5C]">contato@daianecamargo.com.br</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2D2D2D] mb-6">Redes Sociais</h4>
                <div className="flex justify-center md:justify-start">
                   <a href="#" className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#C8B4E4]/20 flex items-center justify-center">IG</a>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-[#C8B4E4]/10 text-center text-[10px] text-[#9C9C9C] uppercase tracking-widest">
              © {new Date().getFullYear()} Daiane Camargo
            </div>
          </div>
        </footer>
        
        <ChatIA />
        
      </body>
    </html>
  );
}