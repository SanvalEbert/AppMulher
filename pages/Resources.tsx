import React from 'react';
import {
  BarChart3,
  Building2,
  ExternalLink,
  Globe2,
  Landmark,
  PhoneCall,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { PageContainer, SectionTitle } from '../components/WireframeComponents';

type Resource = {
  title: string;
  institution: string;
  description: string;
  url: string;
  scope: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
};

type ResourceGroup = {
  title: string;
  description: string;
  resources: Resource[];
};

const resourceGroups: ResourceGroup[] = [
  {
    title: 'Proteção e rede de atendimento',
    description: 'Canais e serviços para orientação, acolhimento e localização da rede de proteção.',
    resources: [
      {
        title: 'Conheça a rede de enfrentamento e prevenção à violência',
        institution: 'Câmara dos Deputados — Secretaria da Mulher',
        description:
          'Explica como se organiza a rede de atendimento às mulheres, incluindo serviços de saúde, justiça, segurança pública e assistência social.',
        url: 'https://www2.camara.leg.br/a-camara/estruturaadm/secretarias/secretaria-da-mulher/procuradoria-da-mulher-1/como-buscar-ajuda-em-caso-de-violencia/conheca-a-rede-que-atua-no-enfrentamento-e-na-prevencao-a-violencia',
        scope: 'Nacional',
        icon: Building2,
      },
      {
        title: 'Ligue 180 — Central de Atendimento à Mulher',
        institution: 'Ministério das Mulheres',
        description:
          'Informações oficiais sobre o serviço gratuito de orientação, localização de serviços da rede e registro e encaminhamento de denúncias.',
        url: 'https://www.gov.br/mulheres/pt-br/ligue180',
        scope: 'Nacional',
        icon: PhoneCall,
      },
      {
        title: 'Onde encontrar ajuda — Mulheres',
        institution: 'ACNUR Brasil',
        description:
          'Orientações sobre violência doméstica e contatos de assistência, com conteúdo especialmente útil para mulheres refugiadas, migrantes e pessoas em deslocamento.',
        url: 'https://help.unhcr.org/brazil/onde-encontrar-ajuda/mulheres/',
        scope: 'Brasil / ACNUR',
        icon: Globe2,
      },
      {
        title: 'Redes de atendimento — Violência doméstica e familiar',
        institution: 'Defensoria Pública do Estado de São Paulo',
        description:
          'Reúne informações sobre direitos, medidas protetivas, centros de atendimento, serviços de acolhimento e outros recursos disponíveis no Estado de São Paulo.',
        url: 'https://www.defensoria.sp.def.br/nucleos-especializados/pagina-inicial-nucleos-especializados/direitos-das-mulheres/redes-de-atendimento/violencia-domestica-e-familiar',
        scope: 'São Paulo',
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: 'Direitos e Justiça',
    description: 'Informações do sistema de Justiça sobre direitos, legislação e ações de enfrentamento à violência contra a mulher.',
    resources: [
      {
        title: 'Violência contra a Mulher',
        institution: 'Conselho Nacional de Justiça — CNJ',
        description:
          'Portal do CNJ com conteúdos sobre Lei Maria da Penha, formas de violência, denúncia, normas, precedentes, publicações, dados e ações institucionais.',
        url: 'https://www.cnj.jus.br/violencia-contra-a-mulher/',
        scope: 'Nacional',
        icon: Scale,
      },
    ],
  },
  {
    title: 'Dados, pesquisas e observatórios',
    description: 'Fontes para aprofundar a compreensão do fenômeno por meio de pesquisas, dados, relatórios e publicações.',
    resources: [
      {
        title: 'Observatório da Mulher contra a Violência',
        institution: 'Senado Federal',
        description:
          'Reúne pesquisas, dados, análises, publicações e acompanhamento legislativo sobre violência contra as mulheres e violência de gênero.',
        url: 'https://www12.senado.leg.br/institucional/omv',
        scope: 'Nacional',
        icon: BarChart3,
      },
      {
        title: 'Observatório da Violência Contra a Mulher',
        institution: 'Assembleia Legislativa de Santa Catarina — ALESC',
        description:
          'Sistema de informações sobre violência contra a mulher em Santa Catarina, com rede de atendimento, legislação, publicações, dados e painéis.',
        url: 'https://ovm.alesc.sc.gov.br/',
        scope: 'Santa Catarina',
        icon: Landmark,
      },
    ],
  },
];

const Resources: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle subtitle="Fontes oficiais e especializadas para ampliar sua rede de informação, apoio e proteção.">
        Recursos e Sites Confiáveis
      </SectionTitle>

      <div className="mb-10 rounded-2xl border border-brand-100 bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-brand-100 p-3 text-brand-900 shrink-0">
            <ExternalLink size={22} aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-bold text-brand-900 text-lg mb-1">Sobre os links externos</h2>
            <p className="text-gray-600 leading-relaxed">
              Esta página reúne fontes públicas e especializadas relacionadas à prevenção e ao enfrentamento da violência contra as mulheres. Ao selecionar um recurso, você sairá do Portal Acolher e o conteúdo passará a ser de responsabilidade da instituição de destino.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {resourceGroups.map((group) => (
          <section key={group.title} aria-labelledby={`resource-${group.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="mb-5">
              <h2
                id={`resource-${group.title.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-2xl font-bold text-brand-900"
              >
                {group.title}
              </h2>
              <p className="mt-1 text-gray-600 max-w-3xl">{group.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {group.resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${resource.title} — abrir site externo em nova aba`}
                    className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-action focus:ring-offset-2"
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center shrink-0 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                          <Icon size={22} aria-hidden="true" />
                        </div>
                        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                          {resource.scope}
                        </span>
                      </div>
                      <ExternalLink size={18} className="text-gray-400 group-hover:text-action shrink-0" aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-bold text-brand-900 leading-snug group-hover:text-action transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-gray-500">{resource.institution}</p>
                    <p className="mt-4 text-gray-600 leading-relaxed flex-1">{resource.description}</p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-action">
                      Acessar site oficial
                      <ExternalLink size={15} aria-hidden="true" />
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <aside className="mt-12 rounded-xl bg-brand-50 border border-brand-100 p-5 text-sm text-gray-600 leading-relaxed">
        <strong className="text-brand-900">Importante:</strong> a disponibilidade, atualização e abrangência territorial dos serviços apresentados nos sites externos são definidas pelas respectivas instituições. Em situação de emergência, acione a Polícia Militar pelo 190. Para orientação e atendimento à mulher, utilize o Ligue 180.
      </aside>
    </PageContainer>
  );
};

export default Resources;
