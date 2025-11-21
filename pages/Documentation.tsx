import React from 'react';
import { WTitle, WCard, WButton } from '../components/WireframeComponents';
import { Printer, FileText } from 'lucide-react';

const Documentation: React.FC = () => {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <WTitle>Processo Criativo & Decisões</WTitle>
        
        <button 
          onClick={handlePrint}
          className="print:hidden flex items-center gap-2 bg-black text-white px-4 py-2 font-bold uppercase hover:bg-gray-800 border-2 border-transparent shadow-lg"
        >
          <Printer size={18} /> Baixar Documentação (PDF)
        </button>
      </div>

      {/* Print Header (Visible only on print) */}
      <div className="hidden print:block mb-8 border-b-2 border-black pb-4">
        <h1 className="text-3xl font-black uppercase">Relatório Técnico: Etapa 3 - Prototipação</h1>
        <p className="text-gray-600">Projeto de Extensão: Desenvolvimento de Site sobre Violência Doméstica</p>
        <p className="text-sm mt-2">Gerado em: {new Date().toLocaleDateString()}</p>
      </div>

      <section className="mb-8 print:break-inside-avoid">
        <h3 className="text-xl font-black uppercase mb-4 border-l-4 border-black pl-2 flex items-center gap-2">
          1. Metodologia de Design
        </h3>
        <p className="mb-4 text-justify text-gray-700">
          A concepção destes wireframes seguiu a metodologia de Design Centrado no Usuário (Garrett, 2011), 
          partindo das necessidades identificadas na <strong>Etapa 2 (Levantamento de Informações)</strong>. 
          Utilizou-se uma abordagem <em>mobile-first</em> devido à necessidade de acesso rápido e discreto em situações de risco.
        </p>
        <div className="bg-gray-100 p-4 border border-black">
          <h4 className="font-bold text-sm uppercase mb-2">Insumos Utilizados:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>Entrevistas com Personas:</strong> Foco nas dores de Maria Eduarda (medo de julgamento) e Luiz Almeida (necessidade de clareza processual).</li>
            <li><strong>Legislação:</strong> Diretrizes da Lei Maria da Penha (Lei 11.340/2006) para estruturar a página de Direitos.</li>
            <li><strong>Usabilidade:</strong> Aplicação das Heurísticas de Nielsen, priorizando a prevenção de erros e visibilidade do status do sistema.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-black uppercase mb-4 border-l-4 border-black pl-2">2. Soluções por Tela (Wireframes)</h3>
        
        <div className="space-y-6">
          <WCard title="Home (Página Inicial)" className="print:break-inside-avoid">
            <p className="text-sm mb-2"><strong>Desafio:</strong> Atender usuários em pânico vs. usuários buscando informação.</p>
            <p className="text-sm"><strong>Decisão de Design:</strong> Hierarquia visual clara com "Ações Rápidas" (Botões grandes) logo abaixo do banner. O botão de "Emergência" possui destaque visual (contraste invertido) para acesso imediato (Lei de Fitts).</p>
          </WCard>

          <WCard title="Como Buscar Ajuda" className="print:break-inside-avoid">
            <p className="text-sm mb-2"><strong>Desafio:</strong> A burocracia do processo pode desestimular a denúncia (feedback da Persona Maria Eduarda).</p>
            <p className="text-sm"><strong>Decisão de Design:</strong> Organização da informação em "Passo a Passo" linear (1, 2, 3) para reduzir a carga cognitiva. Inclusão clara de "O que acontece depois" para mitigar o medo do desconhecido e alinhar expectativas.</p>
          </WCard>

          <WCard title="Mapa de Serviços" className="print:break-inside-avoid">
            <p className="text-sm mb-2"><strong>Desafio:</strong> Dificuldade em encontrar a delegacia ou CRAS mais próximo (Persona Carolina/Assistente Social).</p>
            <p className="text-sm"><strong>Decisão de Design:</strong> Interface de mapa com geolocalização e filtros laterais simples. Permite encontrar rapidamente o ponto de apoio específico sem navegação complexa.</p>
          </WCard>
          
          <WCard title="Tipos de Violência" className="print:break-inside-avoid">
            <p className="text-sm mb-2"><strong>Desafio:</strong> Falta de conhecimento sobre violência psicológica e patrimonial (Persona João Victor/Estudante).</p>
            <p className="text-sm"><strong>Decisão de Design:</strong> Uso de ícones representativos e textos curtos. A "Nota Educativa" no topo visa quebrar estigmas imediatamente, educando o usuário antes da navegação profunda.</p>
          </WCard>
        </div>
      </section>

      <section className="mb-8 print:break-inside-avoid">
        <h3 className="text-xl font-black uppercase mb-4 border-l-4 border-black pl-2">3. Acessibilidade e Estilo Visual</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-black p-4">
                <h4 className="font-bold uppercase mb-2">Baixa Fidelidade (Low-Fi)</h4>
                <p className="text-sm">O uso de preto e branco elimina distrações estéticas, forçando o foco na estrutura, navegação e clareza dos textos (Planos de Estrutura e Esqueleto de Garrett).</p>
            </div>
            <div className="border border-black p-4">
                <h4 className="font-bold uppercase mb-2">WCAG 2.1</h4>
                <p className="text-sm">Botões com áreas de clique generosas (min 44px para touch), alto contraste para leitura sob stress ou baixa visão, e navegação simplificada.</p>
            </div>
        </div>
      </section>

      <div className="text-center mt-12 text-sm text-gray-500 border-t border-gray-300 pt-4 print:hidden">
        <p>Esta documentação faz parte do relatório da atividade extensionista.</p>
      </div>
    </div>
  );
};

export default Documentation;