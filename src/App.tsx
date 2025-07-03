/**************************************************************************
 * App.jsx
 * ------------------------------------------------------------------------
 * Currículo com:
 *  • Navegação (sumário) no topo que rola suavemente com easing
 *  • Destaque temporário na seção clicada (pulse + borda âmbar)
 *  • Todas as seções completas
 *  • Botão p/ baixar PDF (utils/pdfGenerator.ts)
 *
 * Requisitos:
 *  • Tailwind CSS com classes padrão (ring, animate-pulse, scroll-mt-24, …)
 *  • <html class="scroll-smooth"> no index.html (ou equivalente)
 **************************************************************************/

import React, { useRef } from "react";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import downloadPDF from "./utils/pdfGenerator";

/* ---------- rolagem suave com easeInOutCubic ---------- */
function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const ease = (t) =>
    t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2; /* easeInOutCubic */
  let start;
  function step(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * ease(progress));
    if (elapsed < duration) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function App() {
  /* refs para cada seção */
  const refs = {
    sobre: useRef(null),
    experiencia: useRef(null),
    habilidades: useRef(null),
    formacao: useRef(null),
    contato: useRef(null),
  };

  /* handler do menu */
  const goTo = (key) => () => {
    const el = refs[key]?.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 16; // offset 16 px
    smoothScrollTo(y, 800);

    /* highlight breve */
    el.classList.add("ring-4", "ring-amber-400/70", "animate-pulse");
    setTimeout(() => {
      el.classList.remove("ring-4", "ring-amber-400/70", "animate-pulse");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ---------- HEADER ---------- */}
      <header className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          {/* Avatar + nome */}
          <img
            src="https://iili.io/FakfZCl.png"
            alt="Davit Markaryants"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-amber-500 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2">Davit Markaryants</h1>
          <p className="text-xl text-slate-300 mb-6">
            Acadêmico de Administração (8º&nbsp;período) &amp; Assistente
            Administrativo
          </p>

          {/* Navegação */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              {[
                ["Sobre", "sobre"],
                ["Experiência", "experiencia"],
                ["Habilidades", "habilidades"],
                ["Formação", "formacao"],
                ["Contato", "contato"],
              ].map(([label, key]) => (
                <li key={key}>
                  <button
                    onClick={goTo(key)}
                    className="px-3 py-1 rounded hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão PDF */}
          <button
            onClick={downloadPDF}
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Download size={20} />
            <span>Baixar Currículo PDF</span>
          </button>
        </div>
      </header>

      {/* ---------- MAIN ---------- */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* SOBRE */}
        <section ref={refs.sobre} id="sobre" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Sobre Mim
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Acadêmico de Administração com experiência sólida em processos
            administrativos, controle de almoxarifado, compras, atendimento ao
            público e vendas. Procuro oportunidade como Assistente
            Administrativo ou áreas relacionadas para aplicar minha organização,
            visão sistêmica e foco em melhoria contínua, contribuindo com
            proatividade, facilidade de comunicação e resultados em ambientes
            dinâmicos.
          </p>
        </section>

        {/* EXPERIÊNCIA */}
        <section
          ref={refs.experiencia}
          id="experiencia"
          className="mb-12 scroll-mt-24"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Experiência Profissional
          </h2>

          <div className="space-y-6">
            {/* Estágio TJSC */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Estagiário Administrativo
                  </h3>
                  <p className="text-amber-600 font-medium">
                    Tribunal de Justiça de Santa Catarina
                  </p>
                </div>
                <span className="text-slate-600">
                  set&nbsp;2023 – set&nbsp;2025
                </span>
              </div>
              <ul className="list-disc ml-5 text-slate-700 space-y-1">
                <li>Organização e controle de patrimônio e estoque</li>
                <li>Controle de folhas ponto dos terceirizados</li>
                <li>Elaboração de requisições de compra</li>
                <li>Uso de ERP, SEI, Pergamum e Teams</li>
                <li>Organização de documentos físicos e digitais</li>
              </ul>
            </div>

            {/* Vendas */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Vendedor (Temporário)
                  </h3>
                  <p className="text-amber-600 font-medium">
                    Loja de Aparelhos Eletrônicos &amp; Celulares
                  </p>
                </div>
                <span className="text-slate-600">
                  dez&nbsp;2022 – fev&nbsp;2023
                </span>
              </div>
              <ul className="list-disc ml-5 text-slate-700 space-y-1">
                <li>Venda consultiva de celulares e acessórios</li>
                <li>Atingimento de metas mensais</li>
                <li>Suporte pós-venda e dúvidas técnicas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section
          ref={refs.habilidades}
          id="habilidades"
          className="mb-12 scroll-mt-24"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Habilidades
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Técnicas */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Técnicas
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-2">
                <li>Gestão de processos administrativos</li>
                <li>Controle de estoque e patrimônio</li>
                <li>Compras e negociação com fornecedores</li>
                <li>ERP, SEI, Pergamum, Teams</li>
                <li>Excel Básico</li>
              </ul>
            </div>

            {/* Comportamentais */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Comportamentais
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-2">
                <li>Sociabilidade e trabalho em equipe</li>
                <li>Proatividade &amp; aprendizado rápido</li>
                <li>Organização e visão sistêmica</li>
                <li>Boa comunicação e honestidade</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FORMAÇÃO + IDIOMAS */}
        <section
          ref={refs.formacao}
          id="formacao"
          className="mb-12 scroll-mt-24"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Formação
          </h2>

          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Bacharelado em Administração
                </h3>
                <p className="text-amber-600 font-medium">
                  Univille Universidade – São Bento do Sul / SC
                </p>
              </div>
              <span className="text-slate-600">
                Conclusão prevista: dez&nbsp;2026
              </span>
            </div>
          </div>

          {/* Idiomas */}
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Idiomas</h3>
          <div className="space-y-3">
            {[
              { name: "Português", level: 100 },
              { name: "Armênio (nativo)", level: 100 },
              { name: "Inglês", level: 87 },
            ].map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700">{name}</span>
                  <span className="text-slate-600 text-sm">{level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section ref={refs.contato} id="contato" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Contato
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 space-y-6 md:space-y-0">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full shrink-0">
                <Mail size={24} className="text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Email</h4>
                <a
                  href="mailto:davitermeliksetyan@gmail.com"
                  className="text-slate-600 hover:text-amber-600 break-all"
                >
                  davitermeliksetyan@gmail.com
                </a>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full shrink-0">
                <Phone size={24} className="text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Telefone</h4>
                <a
                  href="tel:+5547996482135"
                  className="text-slate-600 hover:text-amber-600"
                >
                  (47) 99648-2135
                </a>
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full shrink-0">
                <MapPin size={24} className="text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Localização</h4>
                <p className="text-slate-600">São Bento do Sul / SC • Remoto</p>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="www.linkedin.com/in/davit-markaryants-824188294"
              className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-slate-900 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Davit Markaryants. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
