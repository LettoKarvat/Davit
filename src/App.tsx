import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { downloadPDF } from "./utils/pdfGenerator";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Davit Markaryants"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-amber-500 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2">Davit Markaryants</h1>
          <p className="text-xl text-slate-300 mb-4">
            Acadêmico de Administração (8º período) & Assistente Administrativo
          </p>
          <button
            onClick={downloadPDF}
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Download size={20} />
            <span>Baixar Currículo PDF</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Sobre */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Sobre Mim
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Acadêmico de Administração com experiência sólida em processos
            administrativos, controle de almoxarifado, compras, atendimento ao
            público e vendas. Procuro oportunidade como Assistente
            Administrativo ou áreas correlatas para aplicar minha organização,
            visão sistêmica e foco em melhoria contínua, contribuindo com
            proatividade, facilidade de comunicação e resultados em ambientes
            dinâmicos.
          </p>
        </section>

        {/* Experiência */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            {/* TJSC */}
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
                <span className="text-slate-600">set 2023 – set 2025</span>
              </div>
              <ul className="text-slate-700 space-y-1">
                <li>
                  • Organização e controle de patrimônio e estoque do
                  almoxarifado
                </li>
                <li>• Controle de folhas ponto dos terceirizados</li>
                <li>
                  • Elaboração de requisições de compra e contato com
                  fornecedores
                </li>
                <li>
                  • Utilização de ERP, SEI, Pergamum e Teams para gestão de
                  processos
                </li>
                <li>
                  • Organização de documentos físicos e digitais em pastas
                  específicas
                </li>
                <li>
                  • Desenvolvimento de proatividade, sociabilidade e visão
                  sistêmica para demandas administrativas
                </li>
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
                    Loja de Aparelhos Eletrônicos & Celulares
                  </p>
                </div>
                <span className="text-slate-600">dez 2022 – fev 2023</span>
              </div>
              <ul className="text-slate-700 space-y-1">
                <li>
                  • Atendimento ao cliente e venda consultiva de celulares e
                  eletrônicos
                </li>
                <li>• Atingimento de metas mensais de vendas</li>
                <li>
                  • Suporte pós-venda e esclarecimento de dúvidas técnicas
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Habilidades
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Técnicas */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Técnicas
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc ml-5">
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
              <ul className="space-y-2 text-slate-700 list-disc ml-5">
                <li>Sociabilidade e trabalho em equipe</li>
                <li>Proatividade & aprendizado rápido</li>
                <li>Organização e visão sistêmica</li>
                <li>Boa comunicação e honestidade</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Projetos Acadêmicos
          </h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <img
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
              alt="Projeto 5S"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Implementação do Programa 5S
            </h3>
            <p className="text-slate-700 mb-4">
              Trabalho de Conclusão de Estágio na Móveis Esquadrias MACE Ltda.:
              aplicação do 5S para melhoria de organização e eficiência no
              ambiente produtivo (23 páginas).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                Qualidade
              </span>
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                Gestão Industrial
              </span>
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                5S
              </span>
            </div>
            {/* Links opcionais */}
          </div>
        </section>

        {/* Educação */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Formação
          </h2>
          <div className="bg-slate-50 p-6 rounded-lg">
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
                Conclusão prevista: dez 2026
              </span>
            </div>
          </div>

          {/* Idiomas */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Idiomas
            </h3>
            <ul className="space-y-2 text-slate-700 list-disc ml-5">
              <li>Português – Fluente</li>
              <li>Armênio – Nativo</li>
              <li>Inglês – Intermediário → Avançado (Business English)</li>
            </ul>
          </div>
        </section>

        {/* Contato */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">
            Contato
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-100 p-3 rounded-full">
                <Mail size={24} className="text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Email</h4>
                <a
                  href="mailto:davitermeliksetyan@gmail.com"
                  className="text-slate-600 hover:text-amber-600"
                >
                  davitermeliksetyan@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-amber-100 p-3 rounded-full">
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

            <div className="flex items-center space-x-3">
              <div className="bg-amber-100 p-3 rounded-full">
                <MapPin size={24} className="text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Localização</h4>
                <p className="text-slate-600">São Bento do Sul / SC • Remoto</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://linkedin.com/in/davit-markaryants-824188294"
              className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/davitmarkaryants"
              className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
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

export default App;
