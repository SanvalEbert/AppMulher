import React from 'react';
import { PageContainer, SectionTitle } from '../components/WireframeComponents';
import { ArrowRight, ArrowDown, Layout } from 'lucide-react';

const Sitemap: React.FC = () => {
  const Node = ({ label }: { label: string }) => (
    <div className="border border-gray-300 px-4 py-2 bg-white rounded shadow-sm text-sm font-semibold text-brand-800 min-w-[120px] text-center">
      {label}
    </div>
  );

  return (
    <PageContainer>
      <SectionTitle subtitle="Estrutura e fluxo de navegação do sistema.">
        Mapa do Site e Fluxos
      </SectionTitle>

      <div className="space-y-12">
        
        {/* Tree Structure */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 overflow-x-auto">
          <h3 className="font-bold text-brand-900 mb-8 flex items-center gap-2">
            <Layout size={20} /> Arquitetura da Informação
          </h3>
          
          <div className="flex flex-col items-center min-w-[800px]">
              <Node label="Página Inicial" />
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="h-px w-[80%] bg-gray-300"></div>
              <div className="flex justify-between w-[80%] pt-4 gap-4">
                   <div className="flex flex-col items-center relative">
                     <div className="h-4 w-px bg-gray-300 absolute -top-4"></div>
                     <Node label="Tipos de Violência" />
                   </div>
                   <div className="flex flex-col items-center relative">
                     <div className="h-4 w-px bg-gray-300 absolute -top-4"></div>
                     <Node label="Sinais e Indícios" />
                   </div>
                   <div className="flex flex-col items-center relative">
                     <div className="h-4 w-px bg-gray-300 absolute -top-4"></div>
                     <Node label="Como Buscar Ajuda" />
                   </div>
                   <div className="flex flex-col items-center relative">
                     <div className="h-4 w-px bg-gray-300 absolute -top-4"></div>
                     <Node label="Rede de Atendimento" />
                   </div>
                   <div className="flex flex-col items-center relative">
                     <div className="h-4 w-px bg-gray-300 absolute -top-4"></div>
                     <Node label="Legislação" />
                   </div>
                   <div className="flex flex-col items-center relative">
                     <div className="h-4 w-px bg-gray-300 absolute -top-4"></div>
                     <Node label="FAQ" />
                   </div>
              </div>
          </div>
        </div>

        {/* User Flow */}
        <div>
          <h3 className="font-bold text-brand-900 mb-6">Fluxo Principal: Busca por Ajuda</h3>
          <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
             <span className="px-3 py-1 bg-brand-100 text-brand-800 rounded-full text-xs font-bold">INÍCIO</span>
             <ArrowRight size={16} className="text-gray-400" />
             <Node label="Acessa Portal" />
             <ArrowRight size={16} className="text-gray-400" />
             <Node label="Clica em 'Buscar Ajuda'" />
             <ArrowRight size={16} className="text-gray-400" />
             <div className="p-3 border border-action border-dashed rounded bg-blue-50 text-center text-xs font-medium text-action">
                Decisão: Emergência?
             </div>
             
             <div className="flex flex-col gap-2 ml-4 border-l-2 border-gray-200 pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-alert">SIM</span>
                  <ArrowRight size={14} />
                  <Node label="Ligar 190" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-green-600">NÃO</span>
                  <ArrowRight size={14} />
                  <Node label="Ler Passo a Passo" />
                  <ArrowRight size={14} />
                  <Node label="Consultar Mapa" />
                </div>
             </div>
          </div>
        </div>

      </div>
    </PageContainer>
  );
};

export default Sitemap;