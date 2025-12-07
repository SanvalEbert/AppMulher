
import React from 'react';
import { PageContainer, SectionTitle, Card, Button, InfoBox } from '../components/WireframeComponents';
import { PhoneCall, ShieldAlert, FileText, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Help: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle subtitle="Siga este guia seguro para proteger sua integridade e seus direitos.">
        Como Buscar Ajuda
      </SectionTitle>

      {/* Emergency Block */}
      <div className="bg-alert text-white rounded-xl p-6 md:p-8 shadow-lg mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-3 rounded-full shrink-0">
            <ShieldAlert size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">Risco Imediato?</h2>
            <p className="text-red-100 text-lg">Se você está em perigo agora, ligue para a Polícia Militar.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="flex-1 bg-white text-alert font-black text-xl px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition-colors whitespace-nowrap">
            LIGUE 190
          </button>
          <button className="flex-1 bg-transparent border-2 border-white text-white font-bold text-xl px-8 py-4 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
            LIGUE 180
          </button>
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Flow */}
        <div className="lg:col-span-2">
          {/* Image Highlight - SUBSTITUÍDO PELA IMAGEM FORNECIDA PELO USUÁRIO */}
          <div className="mb-8 rounded-xl overflow-hidden h-48 md:h-64 relative shadow-lg border border-gray-200">
             <img 
               src="/AppMulher/images/sinal_vermelho.png" 
               alt="Sinal vermelho contra a violência doméstica" 
               className="w-full h-full object-cover object-center"
             />
          </div>

          <h3 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-brand-900 text-white rounded-full flex items-center justify-center text-sm">1</span>
            Passo a Passo da Denúncia
          </h3>

          <div className="space-y-8 relative pl-8 border-l-2 border-gray-200 ml-4">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-action rounded-full border-4 border-white shadow-sm"></div>
              <h4 className="text-lg font-bold text-brand-800 mb-2">Registro de Ocorrência</h4>
              <p className="text-gray-600 mb-3">
                Dirija-se a uma Delegacia Especializada de Atendimento à Mulher (DEAM). Se não houver uma na sua cidade, vá à Delegacia de Polícia Civil mais próxima.
              </p>
              <InfoBox icon={FileText} title="Leve seus documentos" type="info">
                RG, CPF e, se possível, provas (mensagens, fotos, laudos médicos).
              </InfoBox>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-brand-400 rounded-full border-4 border-white shadow-sm"></div>
              <h4 className="text-lg font-bold text-brand-800 mb-2">Solicite Medida Protetiva</h4>
              <p className="text-gray-600">
                No momento do boletim de ocorrência, peça explicitamente as Medidas Protetivas de Urgência. O juiz tem até 48 horas para decidir.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-brand-400 rounded-full border-4 border-white shadow-sm"></div>
              <h4 className="text-lg font-bold text-brand-800 mb-2">Exame de Corpo de Delito</h4>
              <p className="text-gray-600">
                Se houve violência física, a autoridade policial deve encaminhar você imediatamente para o exame pericial.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-brand-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-brand-900 text-white rounded-full flex items-center justify-center text-sm">2</span>
            Pós-Denúncia: O que acontece?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-50 border-none shadow-sm">
              <h5 className="font-bold text-brand-900 mb-2">Afastamento</h5>
              <p className="text-sm text-gray-600">O agressor pode ser obrigado a sair de casa e proibido de contatar você.</p>
            </Card>
            <Card className="bg-gray-50 border-none shadow-sm">
              <h5 className="font-bold text-brand-900 mb-2">Acolhimento</h5>
              <p className="text-sm text-gray-600">Você pode ser encaminhada para acompanhamento psicossocial no CREAS ou Casa Abrigo.</p>
            </Card>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
            <h4 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
              <PhoneCall size={20} /> Telefones Úteis
            </h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-brand-200 pb-2">
                <span className="text-gray-700">Polícia Militar</span>
                <span className="font-bold text-brand-900">190</span>
              </li>
              <li className="flex justify-between items-center border-b border-brand-200 pb-2">
                <span className="text-gray-700">Central da Mulher</span>
                <span className="font-bold text-brand-900">180</span>
              </li>
              <li className="flex justify-between items-center border-b border-brand-200 pb-2">
                <span className="text-gray-700">Direitos Humanos</span>
                <span className="font-bold text-brand-900">100</span>
              </li>
              <li className="flex justify-between items-center border-b border-brand-200 pb-2">
                <span className="text-gray-700">Defensoria Pública</span>
                <span className="font-bold text-brand-900">129</span>
              </li>
            </ul>
          </div>

          <Link to="/map" className="block">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all group">
               <div className="flex items-center gap-3 mb-2 text-action">
                 <MapPin size={24} />
                 <span className="font-bold">Encontrar Serviços</span>
               </div>
               <p className="text-sm text-gray-600 mb-4">Localize a delegacia ou centro de apoio mais próximo de você.</p>
               <span className="text-sm font-semibold text-brand-900 group-hover:text-action flex items-center gap-1">
                 Acessar Mapa <ChevronRight size={16} />
               </span>
            </div>
          </Link>
        </div>

      </div>
    </PageContainer>
  );
};

export default Help;
