import React, { useState } from 'react';
import { PageContainer, SectionTitle, Button } from '../components/WireframeComponents';
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    { 
      q: "A denúncia é anônima?", 
      a: "Sim. As denúncias feitas pelo telefone 180 são totalmente anônimas e sigilosas. Você não precisa se identificar para denunciar." 
    },
    { 
      q: "Preciso de advogado para pedir medida protetiva?", 
      a: "Não. A vítima pode solicitar as medidas protetivas de urgência diretamente na delegacia no momento do boletim de ocorrência. O pedido é encaminhado ao juiz. No entanto, a Defensoria Pública pode acompanhar o caso posteriormente." 
    },
    { 
      q: "Meu marido controla meu dinheiro. Isso é violência?", 
      a: "Sim. Isso configura Violência Patrimonial. Reter documentos, controlar dinheiro, quebrar celular ou destruir bens materiais são crimes previstos na Lei Maria da Penha." 
    },
    { 
      q: "Posso fazer Boletim de Ocorrência pela internet?", 
      a: "Sim. A maioria dos estados brasileiros possui a Delegacia Eletrônica, onde é possível registrar ocorrências de violência doméstica (ameaça, injúria, lesão corporal leve) sem sair de casa." 
    },
    {
      q: "O que acontece se eu sair de casa com meus filhos?",
      a: "Sair de casa para se proteger de violência não configura 'abandono de lar'. A lei garante que você busque segurança. É recomendado procurar a Defensoria Pública ou um advogado assim que possível para regularizar a guarda."
    }
  ];

  return (
    <PageContainer className="max-w-4xl">
      <SectionTitle subtitle="Respostas objetivas para as dúvidas mais comuns sobre segurança e legislação.">
        Dúvidas Frequentes (FAQ)
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {questions.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all shadow-sm hover:shadow-md">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === idx ? 'text-action' : 'text-brand-900'}`}>
                  {item.q}
                </span>
                {openIndex === idx ? <ChevronUp className="text-action" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === idx && (
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/30">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-brand-900 rounded-xl p-6 text-white text-center">
             <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
               <MessageCircle />
             </div>
             <h4 className="font-bold text-lg mb-2">Ainda tem dúvidas?</h4>
             <p className="text-blue-100 text-sm mb-6">
               Nossa assistente virtual pode guiar você para a informação correta.
             </p>
             <Button variant="secondary" className="w-full">
               Chat Automático
             </Button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm">
             <HelpCircle className="mx-auto text-gray-400 mb-3" size={32} />
             <h4 className="font-bold text-brand-900 mb-1">Glossário</h4>
             <p className="text-sm text-gray-500 mb-4">Entenda os termos jurídicos</p>
             <div className="flex flex-wrap justify-center gap-2">
               <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">Feminicídio</span>
               <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">Medida Protetiva</span>
               <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">Dano Moral</span>
             </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default FAQ;