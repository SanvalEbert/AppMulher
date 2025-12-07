import React from 'react';
import { PageContainer, SectionTitle, Card, InfoBox, Button } from '../components/WireframeComponents';
import { AlertTriangle, Search, UserX, Lock, MicOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signs: React.FC = () => {
  const signs = [
    {
      title: "Isolamento",
      desc: "O parceiro afasta você de amigos e familiares, controla suas ligações ou diz que ninguém mais gosta de você.",
      icon: UserX
    },
    {
      title: "Controle Excessivo",
      desc: "Exige senhas de redes sociais, controla sua roupa, seus horários e onde você vai. Aparece de surpresa para 'conferir'.",
      icon: Lock
    },
    {
      title: "Ciúme Possessivo",
      desc: "Justifica comportamentos agressivos como 'amor demais'. Acusa você constantemente de traição sem motivos.",
      icon: Search
    },
    {
      title: "Silenciamento",
      desc: "Impede você de trabalhar, estudar ou ter seu próprio dinheiro. Toma decisões por você sem consultar.",
      icon: MicOff
    },
    {
      title: "Explosões de Raiva",
      desc: "Quebra objetos, soca paredes ou grita para intimidar durante discussões. Depois pede desculpas e promete mudar.",
      icon: AlertTriangle
    }
  ];

  return (
    <PageContainer>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch gap-8 mb-8">
        <div className="w-full lg:w-2/3">
           <SectionTitle subtitle="A violência raramente começa com a agressão física. Fique atenta aos sinais sutis de um relacionamento abusivo.">
            Sinais e Indícios
          </SectionTitle>
        </div>
        
        {/* Visual Context Image - SUBSTITUÍDO PELA IMAGEM FORNECIDA PELO USUÁRIO */}
        <div className="w-full lg:w-1/3 min-h-[280px] rounded-xl overflow-hidden relative shadow-lg group border border-gray-200">
          <img 
            src="/AppMulher/images/mulher_sozinha.png" 
            alt="Mulher sentada sozinha no sofá, abraçando os joelhos" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
           {signs.map((item, idx) => (
             <div key={idx} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="shrink-0 text-alert">
                 <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                   <item.icon size={24} />
                 </div>
               </div>
               <div>
                 <h3 className="text-lg font-bold text-brand-900 mb-2">{item.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>

        <div className="space-y-6">
          <Card className="bg-brand-50 border-brand-100">
            <h3 className="font-bold text-xl mb-4 text-brand-900">O "Termômetro"</h3>
            <p className="text-sm text-gray-700 mb-4">
              Muitas vezes normalizamos comportamentos que não são saudáveis. Se você sente <strong>medo</strong> da reação do seu parceiro, isso é o maior sinal de alerta.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Respeito à individualidade
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Controle e ciúme
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Ameaças verbais
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span> Agressão física
              </li>
            </ul>
          </Card>

          <Card className="bg-white border-alert/30">
            <h3 className="font-bold text-lg mb-2 text-alert flex items-center gap-2">
              <AlertTriangle size={20} /> Segurança Digital
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Se você suspeita que está sendo monitorada, use a "Navegação Anônima" (Ctrl+Shift+N) e não salve senhas.
            </p>
          </Card>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Link to="/help">
          <Button size="lg" variant="primary">
            Saiba Como Buscar Ajuda
          </Button>
        </Link>
      </div>

    </PageContainer>
  );
};

export default Signs;
