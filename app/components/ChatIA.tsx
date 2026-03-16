'use client';

import React, { useState } from 'react';

export default function ChatIA() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  // Mensagens simuladas com a Persona da Daiane
  const flow = [
    {
      msg: "Olá. Sou a assistente virtual da Daiane. Percebo que dar este passo pode não ser fácil, mas fico feliz por estares aqui. Como te sentes hoje?",
      options: ["Sinto-me ansioso(a)", "Estou a passar por um luto", "Preciso de um espaço seguro"]
    },
    {
      msg: "Compreendo perfeitamente. A terapia é justamente sobre achar o seu caminho, mesmo dentro de uma jornada difícil. Queres saber como a Daiane trabalha com isso?",
      options: ["Sim, por favor", "Gostava de agendar"]
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Botão Flutuante (Bolinha) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#C8B4E4] rounded-full shadow-2xl flex items-center justify-center text-3xl animate-bounce hover:scale-110 transition-transform"
        >
          ✨
        </button>
      )}

      {/* Janela do Chat */}
      {isOpen && (
        <div className="w-[320px] md:w-[380px] bg-white rounded-[30px] shadow-2xl border border-[#C8B4E4]/20 overflow-hidden flex flex-col">
          {/* Cabeçalho do Chat */}
          <div className="bg-[#C8B4E4] p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">🤝</div>
              <div className="text-[#2D2D2D]">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Acolhimento</p>
                <p className="font-bold text-sm">Espaço de Escuta</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#2D2D2D] hover:rotate-90 transition-transform">✕</button>
          </div>

          {/* Área de Mensagens */}
          <div className="p-6 h-[300px] overflow-y-auto flex flex-col gap-4 bg-[#FAFAFA]">
            <div className="bg-white p-4 rounded-[20px] rounded-tl-none shadow-sm border border-[#C8B4E4]/10">
              <p className="text-sm text-[#5C5C5C] leading-relaxed">
                {flow[step]?.msg || "A Daiane terá todo o gosto em conversar contigo. Vamos agendar um momento?"}
              </p>
            </div>

            {/* Opções de Resposta */}
            <div className="flex flex-col gap-2 mt-2">
              {flow[step]?.options.map((opt, index) => (
                <button 
                  key={index}
                  onClick={() => setStep(step + 1)}
                  className="text-left p-3 rounded-xl border border-[#C8B4E4]/30 bg-white text-xs text-[#5C5C5C] hover:bg-[#C8B4E4] hover:text-[#2D2D2D] transition-all"
                >
                  {opt}
                </button>
              ))}
              {step >= 2 && (
                <a 
                  href="https://wa.me/SEUNUMERO" 
                  className="text-center p-4 rounded-xl bg-[#A890C8] text-[#2D2D2D] font-bold text-sm shadow-lg hover:scale-105 transition-transform"
                >
                  Falar diretamente com a Daiane
                </a>
              )}
            </div>
          </div>

          <div className="p-4 text-center bg-white border-t border-gray-50">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Inteligência de Acolhimento Ativa</p>
          </div>
        </div>
      )}
    </div>
  );
}