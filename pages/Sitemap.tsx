import React from 'react';
import { WTitle } from '../components/WireframeComponents';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Sitemap: React.FC = () => {
  const Box = ({ label }: { label: string }) => (
    <div className="border-2 border-black px-4 py-2 bg-white text-center text-xs font-bold uppercase min-w-[100px]">
      {label}
    </div>
  );

  return (
    <div className="space-y-12">
      <WTitle>Arquitetura de Informação</WTitle>

      {/* Sitemap */}
      <section>
        <h3 className="font-bold text-lg mb-6">Mapa do Site</h3>
        <div className="flex flex-col items-center">
            <Box label="Home" />
            <div className="h-8 w-0.5 bg-black"></div>
            <div className="h-0.5 w-[80%] bg-black"></div>
            <div className="flex justify-between w-[80%] pt-2 overflow-x-auto pb-4 gap-2">
                 <div className="flex flex-col items-center"><div className="h-2 w-0.5 bg-black absolute -mt-2"></div><Box label="Tipos Violência" /></div>
                 <div className="flex flex-col items-center"><div className="h-2 w-0.5 bg-black absolute -mt-2"></div><Box label="Buscar Ajuda" /></div>
                 <div className="flex flex-col items-center"><div className="h-2 w-0.5 bg-black absolute -mt-2"></div><Box label="Legislação" /></div>
                 <div className="flex flex-col items-center"><div className="h-2 w-0.5 bg-black absolute -mt-2"></div><Box label="Mapa Serviços" /></div>
                 <div className="flex flex-col items-center"><div className="h-2 w-0.5 bg-black absolute -mt-2"></div><Box label="FAQ" /></div>
                 <div className="flex flex-col items-center"><div className="h-2 w-0.5 bg-black absolute -mt-2"></div><Box label="Contato" /></div>
            </div>
        </div>
      </section>

      {/* User Flow: Denúncia */}
      <section className="border-t-4 border-gray-300 pt-8">
         <h3 className="font-bold text-lg mb-6">Fluxo de Usuário: Busca por Ajuda (Persona Maria Eduarda/Vítima)</h3>
         <div className="flex flex-col md:flex-row items-center gap-4 overflow-x-auto p-4 bg-gray-50 border border-gray-300">
             <Box label="Acessa Home" />
             <ArrowRight className="hidden md:block text-gray-400" />
             <ArrowDown className="md:hidden text-gray-400" />
             
             <Box label="Clica 'Buscar Ajuda'" />
             <ArrowRight className="hidden md:block text-gray-400" />
             <ArrowDown className="md:hidden text-gray-400" />

             <div className="border border-dashed border-black p-2 bg-white text-center">
                 <p className="text-[10px] text-gray-500 uppercase mb-1">Decisão</p>
                 <span className="font-bold text-xs">É emergência?</span>
             </div>
             
             <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-red-600">SIM</span>
                    <ArrowRight size={12} />
                    <Box label="Botão 190 / Botão Pânico" />
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-green-600">NÃO</span>
                    <ArrowRight size={12} />
                    <Box label="Lê Passo a Passo" />
                    <ArrowRight size={12} />
                    <Box label="Ver Mapa de Delegacias" />
                 </div>
             </div>
         </div>
      </section>
    </div>
  );
};

export default Sitemap;