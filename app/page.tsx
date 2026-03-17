'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a modalidade de atendimento?",
      answer: "Ofereço sessões Online (via Google Meet ou WhatsApp) com a mesma eficácia do presencial, permitindo que você seja atendido no conforto da sua casa. Também realizo atendimentos presenciais em consultório preparado para o seu acolhimento.",
      icon: "📍"
    },
    {
      question: "Para quem é indicada a terapia?",
      answer: "A terapia é para qualquer pessoa que busque autoconhecimento ou esteja passando por sofrimento emocional. Sou especializada no público LGBT+, pessoas em processo de luto, ansiedade e depressão, mas acolho adultos em diversas demandas clínicas.",
      icon: "👥"
    },
    {
      question: "Quanto tempo dura cada sessão e o tratamento?",
      answer: "As sessões individuais duram em média 50 minutos. A duração do tratamento é relativa, pois cada processo é único. O ritmo é ditado pela sua jornada e pelas metas que construiremos juntos nas primeiras sessões.",
      icon: "⏳"
    },
    {
      question: "Como é a primeira sessão?",
      answer: "A primeira sessão é um momento de escuta e acolhimento. É onde você compartilha o que te trouxe até aqui e eu explico como trabalharemos juntos. É o início da construção do nosso vínculo de confiança.",
      icon: "✨"
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      
      {/* --- HEADER / MENU --- */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#C8B4E4]/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <div>
              <span className="block font-bold text-[#2D2D2D] text-lg leading-none">Daiane Camargo</span>
              <span className="text-[10px] uppercase tracking-widest text-[#A890C8]">Psicóloga Clínica</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-[#5C5C5C] hover:text-[#A890C8] transition-colors">Sobre Mim</a>
            <a href="#especialidades" className="text-sm font-medium text-[#5C5C5C] hover:text-[#A890C8] transition-colors">Especialidades</a>
            <a href="#" className="px-5 py-2.5 bg-[#C8B4E4] text-[#2D2D2D] rounded-full text-sm font-bold hover:shadow-lg transition-all">Agendar Sessão</a>
          </nav>
        </div>
      </header>

      {/* --- SEÇÃO HERO --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#C8B4E4] rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0 animate-pulse" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col space-y-8 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[#2D2D2D]">
              Ressignifique a sua história num espaço seguro, com <span className="text-[#A890C8] font-bold">empatia e acolhimento.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed max-w-lg font-light">
              Dar o primeiro passo é um ato de coragem. Estou aqui para caminhar ao seu lado em uma jornada de aceitação e autodescoberta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/SEU_NUMERO" target="_blank" className="px-8 py-4 bg-[#C8B4E4] hover:bg-[#A890C8] text-[#2D2D2D] font-semibold rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Quero iniciar minha jornada
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative z-10 w-full max-w-[420px] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img src="/daiane.jpg" alt="Daiane Camargo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO ESPECIALIDADES --- */}
      <section id="especialidades" className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-4">
              Como posso te ajudar?
            </h2>
            <div className="w-20 h-1 bg-[#C8B4E4] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Psicoterapia Afirmativa LGBT+", i: "🌈", d: "Um espaço seguro para validar sua identidade e vivência." },
              { t: "Processos de Luto e Perdas", i: "🌿", d: "Escuta sensível para ressignificar sua história no seu tempo." },
              { t: "Terapia Clínica", i: "🧠", d: "Diálogos ativos para construir ferramentas para uma vida equilibrada." }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-[40px] bg-[#FAFAFA] border border-[#C8B4E4]/10 hover:border-[#C8B4E4]/40 transition-all duration-500 hover:shadow-2xl group">
                <div className="w-14 h-14 bg-[#C8B4E4]/20 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{s.i}</div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">{s.t}</h3>
                <p className="text-[#5C5C5C] leading-relaxed mb-6 font-light">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO SOBRE MIM --- */}
      <section id="sobre" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D]">Sobre a Daiane Camargo</h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed font-light italic border-l-4 border-[#C8B4E4] pl-6">
                "Acredito que a terapia não é sobre cura, mas sobre encontrar o seu caminho, ainda que dentro de uma jornada difícil."
              </p>
              <p className="text-[#5C5C5C] leading-relaxed">
                Minha atuação é pautada pelo diálogo ativo e pela construção de um espaço onde a aceitação é o ponto de partida. Especializada em acolhimento LGBT+ e luto.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="bg-white p-10 rounded-[50px] shadow-xl border border-[#C8B4E4]/10 text-center">
                  <span className="text-6xl block mb-6">🤝</span>
                  <h4 className="text-[#2D2D2D] font-bold text-2xl mb-4">Compromisso Ético</h4>
                  <p className="text-[#5C5C5C]">Espaço seguro e sigiloso, respeitando todas as vivências e identidades.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-4">Dúvidas Frequentes</h2>
            <p className="text-[#5C5C5C] font-light italic">Esclarecendo o processo terapêutico.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#C8B4E4]/20 rounded-[24px] overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-[#C8B4E4]/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className="font-semibold text-[#2D2D2D]">{faq.question}</span>
                  </div>
                  <span className={`text-[#A890C8] transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-[#5C5C5C] leading-relaxed border-t border-[#C8B4E4]/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-[#2D2D2D] text-white/60 text-center text-sm">
        <p>© 2024 Daiane Camargo - Todos os direitos reservados</p>
      </footer>

    </main>
  );
}
