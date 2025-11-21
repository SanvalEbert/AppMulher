import React from 'react';
import { WTitle, WCard, WButton } from '../components/WireframeComponents';
import { Hand, HeartCrack, Wallet, MessageSquareWarning, EyeOff } from 'lucide-react';

const Types: React.FC = () => {
  const types = [
    { icon: Hand, title: "Violência Física", desc: "Qualquer conduta que ofenda a integridade ou saúde corporal." },
    { icon: HeartCrack, title: "Violência Psicológica", desc: "Danos emocional, diminuição da autoestima, controle." },
    { icon: EyeOff, title: "Violência Sexual", desc: "Constrangimento a presenciar, manter ou participar de relação sexual indesejada." },
    { icon: Wallet, title: "Violência Patrimonial", desc: "Retenção, subtração ou destruição de objetos e bens." },
    { icon: MessageSquareWarning, title: "Violência Moral", desc: "Calúnia, difamação ou injúria." },
  ];

  return (
    <div>
      <WTitle>Tipos de Violência</WTitle>
      
      <div className="mb-6 p-4 bg-yellow-50 border-2 border-black border-dashed">
        <p className="font-bold text-sm mb-2 uppercase">Nota Educativa</p>
        <p className="text-sm">Muitas vítimas não reconhecem a violência psicológica ou patrimonial. Leia abaixo para entender.</p>
      </div>

      <div className="space-y-4">
        {types.map((t, idx) => (
          <WCard key={idx} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="p-3 bg-black text-white rounded-none">
              <t.icon size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg uppercase">{t.title}</h3>
              <p className="text-sm text-gray-700">{t.desc}</p>
            </div>
            <WButton className="whitespace-nowrap text-xs">Saiba Mais</WButton>
          </WCard>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-100 border-2 border-black text-center">
        <h3 className="font-black text-xl mb-2">VOCÊ SE IDENTIFICOU?</h3>
        <p className="mb-4">Não tenha medo. A lei protege você.</p>
        <WButton primary>O Que Fazer Agora?</WButton>
      </div>
    </div>
  );
};

export default Types;