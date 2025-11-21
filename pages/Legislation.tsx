import React from 'react';
import { WTitle, WCard, WPlaceholder, WButton } from '../components/WireframeComponents';
import { BookOpen, ShieldCheck, Gavel } from 'lucide-react';

const Legislation: React.FC = () => {
  return (
    <div>
      <WTitle>Legislação e Direitos</WTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h3 className="font-black text-xl mb-3 flex items-center gap-2">
              <BookOpen /> LEI MARIA DA PENHA (11.340/2006)
            </h3>
            <p className="text-justify mb-4">
              Texto explicativo simplificado sobre o que é a lei, quem ela protege (todas as pessoas que se identificam com o gênero feminino) e como ela alterou o código penal brasileiro para punir com mais rigor a violência doméstica.
            </p>
            <WButton>Ler Lei na Íntegra (Planalto)</WButton>
          </section>

          <section className="border-t-2 border-gray-300 pt-6">
             <h3 className="font-black text-xl mb-3 flex items-center gap-2">
              <ShieldCheck /> MEDIDAS PROTETIVAS
            </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <WCard className="bg-gray-50">
                 <h4 className="font-bold text-sm uppercase mb-2">Para a Vítima</h4>
                 <ul className="text-sm list-disc list-inside">
                   <li>Acompanhamento policial</li>
                   <li>Acolhimento em abrigo</li>
                   <li>Pensão provisória</li>
                 </ul>
               </WCard>
               <WCard className="bg-gray-50">
                 <h4 className="font-bold text-sm uppercase mb-2">Contra o Agressor</h4>
                 <ul className="text-sm list-disc list-inside">
                   <li>Afastamento do lar</li>
                   <li>Proibição de contato</li>
                   <li>Suspensão de porte de armas</li>
                 </ul>
               </WCard>
             </div>
          </section>
        </div>

        {/* Sidebar / Downloads */}
        <div className="space-y-4">
          <WCard title="Documentos">
            <div className="space-y-2">
              <div className="p-2 border border-black flex items-center justify-between cursor-pointer hover:bg-gray-100">
                <span className="text-sm">Cartilha Simplificada PDF</span>
                <Gavel size={16} />
              </div>
              <div className="p-2 border border-black flex items-center justify-between cursor-pointer hover:bg-gray-100">
                <span className="text-sm">Cartilha da Polícia Civil</span>
                <Gavel size={16} />
              </div>
            </div>
          </WCard>
          
          <WPlaceholder height="h-64" label="Vídeo: Seus Direitos em Libras" />
        </div>
      </div>
    </div>
  );
};

export default Legislation;