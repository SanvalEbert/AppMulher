import React from 'react';
import { PageContainer, SectionTitle, Card, InfoBox, Button } from '../components/WireframeComponents';
import { Hand, HeartCrack, Wallet, MessageSquareWarning, EyeOff, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Types: React.FC = () => {
  const types = [
    { 
      icon: Hand, 
      title: "Violência Física", 
      desc: "Qualquer conduta que ofenda a integridade ou saúde corporal da mulher. Empurrões, tapas, socos, chutes e lesões.",
      example: "Ex: Apertar o braço, atirar objetos, queimar, torturar."
    },
    { 
      icon: HeartCrack, 
      title: "Violência Psicológica", 
      desc: "Qualquer conduta que cause dano emocional e diminuição da autoestima, ou que prejudique e perturbe o pleno desenvolvimento.",
      example: "Ex: Humilhação, xingamentos, isolamento, vigilância constante."
    },
    { 
      icon: EyeOff, 
      title: "Violência Sexual", 
      desc: "Qualquer conduta que a constranja a presenciar, a manter ou a participar de relação sexual não desejada.",
      example: "Ex: Forçar relação sexual (mesmo no casamento), impedir uso de anticoncepcionais."
    },
    { 
      icon: Wallet, 
      title: "Violência Patrimonial", 
      desc: "Qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos e bens.",
      example: "Ex: Quebrar celular, rasgar roupas, esconder documentos, reter dinheiro."
    },
    { 
      icon: MessageSquareWarning, 
      title: "Violência Moral", 
      desc: "Qualquer conduta que configure calúnia, difamação ou injúria.",
      example: "Ex: Acusar de traição publicamente, espalhar mentiras sobre a vítima, xingar a índole."
    },
  ];

  return (
    <PageContainer>
      <SectionTitle subtitle="A Lei Maria da Penha (Lei nº 11.340/2006) tipifica cinco formas de violência doméstica e familiar contra a mulher.">
        Tipos de Violência
      </SectionTitle>
      
      <div className="mb-10 max-w-4xl">
        <InfoBox icon={Info} title="Importante" type="info">
          A violência nem sempre deixa marcas visíveis. A violência psicológica e a patrimonial são tão graves quanto a física e também são crimes.
        </InfoBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {types.map((t, idx) => (
          <Card key={idx} className="flex flex-col h-full border-t-4 border-t-brand-900">
            <div className="mb-4 text-brand-900 bg-brand-50 w-14 h-14 rounded-full flex items-center justify-center">
              <t.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">{t.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{t.desc}</p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 font-medium border-l-2 border-brand-300 mt-auto">
              {t.example}
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-brand-900 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Você identificou algum desses comportamentos?</h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Não ignore os sinais. A violência tende a escalar com o tempo. Buscar informação é o primeiro passo para romper o ciclo.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/signs">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-900">
              Ver Outros Sinais
            </Button>
          </Link>
          <Link to="/help">
            <Button variant="secondary">
              Como Buscar Ajuda
            </Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default Types;