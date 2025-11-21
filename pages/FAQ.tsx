import React, { useState } from 'react';
import { WTitle, WCard, WInput, WButton } from '../components/WireframeComponents';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    { q: "A denúncia é anônima?", a: "Sim, as denúncias feitas pelo 180 são anônimas e sigilosas." },
    { q: "Preciso de advogado para pedir medida protetiva?", a: "Não. A vítima pode solicitar diretamente na delegacia, mas a Defensoria Pública pode auxiliar no processo." },
    { q: "O que é violência psicológica?", a: "Qualquer conduta que cause dano emocional e diminuição da autoestima (humilhação, controle, isolamento)." },
    { q: "Posso fazer B.O. online?", a: "Sim, na maioria dos estados existe a Delegacia Eletrônica com opção específica para violência doméstica." }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <WTitle>Perguntas Frequentes</WTitle>

      <div className="space-y-4 mb-12">
        {questions.map((item, idx) => (
          <div key={idx} className="border-2 border-black bg-white">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50 font-bold"
            >
              <span>{item.q}</span>
              {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === idx && (
              <div className="p-4 border-t-2 border-black bg-gray-50 text-sm">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <WCard title="Ainda tem dúvidas?" className="text-center">
        <p className="mb-4 text-sm">Nossa assistente virtual ou equipe de apoio pode ajudar.</p>
        <div className="flex justify-center gap-4 flex-wrap">
            <WButton className="flex items-center gap-2">
                <MessageCircle size={16} /> Iniciar Chatbot
            </WButton>
            <WButton className="flex items-center gap-2">
                 Enviar Pergunta
            </WButton>
        </div>
      </WCard>

      <div className="mt-12 border-t-4 border-black pt-8">
          <h3 className="font-bold text-lg mb-4 text-center">Glossário de Termos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-center">
              <span className="p-2 border border-gray-300">Medida Protetiva</span>
              <span className="p-2 border border-gray-300">Feminicídio</span>
              <span className="p-2 border border-gray-300">Ciclo da Violência</span>
              <span className="p-2 border border-gray-300">Rede de Apoio</span>
          </div>
      </div>
    </div>
  );
};

export default FAQ;