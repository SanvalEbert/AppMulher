import React from 'react';
import { AlertTriangle, Search, UserX, Lock, MicOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageContainer, SectionTitle, Card } from '../components/WireframeComponents';

const SIGNS_IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Free_image_to_use_for_domestic_abuse_victims_f9ree_picture_public_domain_domesti_woman_human_rights_%2824%29_01.jpg';

const Signs: React.FC = () => {
  const signs = [
    {
      title: 'Isolamento',
      desc: 'O parceiro afasta você de amigos e familiares, controla suas ligações ou diz que ninguém mais gosta de você.',
      icon: UserX,
    },
    {
      title: 'Controle Excessivo',
      desc: "Exige senhas de redes sociais, controla sua roupa, seus horários e onde você vai. Aparece de surpresa para 'conferir'.",
      icon: Lock,
    },
    {
      title: 'Ciúme Possessivo',
      desc: "Justifica comportamentos agressivos como 'amor demais'. Acusa você constantemente de traição sem motivos.",
      icon: Search,
    },
    {
      title: 'Silenciamento',
      desc: 'Impede você de trabalhar, estudar ou ter seu próprio dinheiro. Toma decisões por você sem consultar.',
      icon: MicOff,
    },
    {
      title: 'Explosões de Raiva',
      desc: 'Quebra objetos, soca paredes ou grita para intimidar durante discussões. Depois pede desculpas e promete mudar.',
      icon: AlertTriangle,
    },
  ];

  return (
    <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch mb-10">
        <div className="lg:col-span-3">
          <SectionTitle subtitle="A violência raramente começa com a agressão física. Fique atenta aos sinais sutis de um relacionamento abusivo.">
            Sinais e Indícios
          </SectionTitle>
          <p className="text-gray-600 leading-relaxed max-w-2xl -mt-2">
            Mudanças de comportamento, controle e medo podem aparecer de forma gradual. Reconhecer esses sinais ajuda a compreender a situação e buscar proteção com mais segurança.
          </p>
        </div>

        {/* Imagem CC0: Wikimedia Commons / Commonpersoon. O espaço lateral da própria imagem é usado como área editorial. */}
        <figure className="lg:col-span-2 relative min-h-[250px] sm:min-h-[280px] overflow-hidden rounded-2xl bg-brand-800">
          <img
            src={SIGNS_IMAGE_URL}
            alt="Mulher em imagem de conscientização sobre violência doméstica"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-900/90 via-brand-900/25 to-transparent" aria-hidden="true" />
          <figcaption className="absolute inset-y-0 right-0 w-1/2 flex items-center p-5 sm:p-6">
            <p className="text-white text-sm sm:text-base font-semibold leading-relaxed drop-shadow-sm">
              Reconhecer os sinais é um passo importante para buscar apoio e proteção.
            </p>
          </figcaption>
        </figure>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          {signs.map((item) => (
            <div key={item.title} className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="shrink-0 text-alert">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <item.icon size={24} aria-hidden="true" />
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
            <h3 className="font-bold text-xl mb-4 text-brand-900">O “Termômetro”</h3>
            <p className="text-sm text-gray-700 mb-4">
              Muitas vezes normalizamos comportamentos que não são saudáveis. Se você sente <strong>medo</strong> da reação do seu parceiro, isso é um importante sinal de alerta.
            </p>
            <ul className="space-y-3 text-sm" aria-label="Escala de sinais em um relacionamento">
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" /> Respeito à individualidade
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" aria-hidden="true" /> Controle e ciúme
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-orange-500 rounded-full" aria-hidden="true" /> Ameaças verbais
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-red-600 rounded-full" aria-hidden="true" /> Agressão física
              </li>
            </ul>
          </Card>

          <Card className="bg-white border-alert/30">
            <h3 className="font-bold text-lg mb-2 text-alert flex items-center gap-2">
              <AlertTriangle size={20} aria-hidden="true" /> Segurança Digital
            </h3>
            <p className="text-sm text-gray-600">
              Se você suspeita que está sendo monitorada, prefira um dispositivo seguro, considere a navegação privativa e evite salvar senhas em equipamentos compartilhados.
            </p>
          </Card>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/help"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-lg font-medium text-white hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2"
        >
          Saiba como buscar ajuda
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </PageContainer>
  );
};

export default Signs;
