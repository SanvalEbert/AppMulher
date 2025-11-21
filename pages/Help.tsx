import React from 'react';
import { WTitle, WCard, WButton } from '../components/WireframeComponents';
import { PhoneCall, ShieldAlert, FileText, ChevronRight } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div>
      <WTitle>Como Buscar Ajuda</WTitle>

      {/* Emergency Block */}
      <div className="bg-black text-white p-6 border-2 border-black mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-black text-white uppercase flex items-center gap-2">
              <ShieldAlert /> Emergência Imediata
            </h2>
            <p className="text-sm mt-1">Se você corre risco de vida agora, não hesite.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 font-black text-xl border-2 border-white hover:bg-gray-200">
              LIGUE 190 (PM)
            </button>
            <button className="bg-transparent text-white px-6 py-3 font-black text-xl border-2 border-white hover:bg-gray-800">
              LIGUE 180 (Central)
            </button>
          </div>
        </div>
      </div>

      {/* Step by Step Flow */}
      <h3 className="font-bold text-lg mb-4 border-l-4 border-black pl-2">PASSO A PASSO PARA DENÚNCIA</h3>
      
      <div className="space-y-6 relative before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-gray-300 before:-z-10 md:before:hidden">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { step: "01", title: "Registro", text: "Dirija-se a uma Delegacia da Mulher (DEAM) ou delegacia comum para fazer o B.O." },
            { step: "02", title: "Medida Protetiva", text: "Solicite medidas protetivas de urgência no momento do registro." },
            { step: "03", title: "Acolhimento", text: "Busque um CRAS ou CREAS para apoio psicossocial e jurídico." }
          ].map((item, idx) => (
            <WCard key={idx} className="relative">
              <div className="absolute -top-3 -left-3 bg-black text-white w-8 h-8 flex items-center justify-center font-bold border-2 border-white shadow-sm">
                {item.step}
              </div>
              <h4 className="font-bold mt-2 mb-2 uppercase">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </WCard>
          ))}
        </div>
      </div>

      {/* Post-Report Info */}
      <div className="mt-8">
        <WCard title="O que acontece após a denúncia?">
          <ul className="list-disc list-inside space-y-2 text-sm mt-2">
            <li>O juiz tem 48h para decidir sobre as medidas protetivas.</li>
            <li>O agressor pode ser afastado do lar.</li>
            <li>Você pode ser encaminhada para uma Casa Abrigo se necessário.</li>
          </ul>
          <div className="mt-4 flex justify-end">
             <WButton className="flex items-center gap-2">
               Ver Direitos da Vítima <ChevronRight size={16} />
             </WButton>
          </div>
        </WCard>
      </div>

       {/* Useful Contacts Block */}
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
         <WCard title="Contatos Úteis">
           <div className="space-y-3">
              <div className="flex items-center gap-2">
                <PhoneCall size={16} /> <span>Defensoria Pública: 129</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall size={16} /> <span>Direitos Humanos: 100</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={16} /> <span>Delegacia Online (Link)</span>
              </div>
           </div>
         </WCard>
       </div>
    </div>
  );
};

export default Help;