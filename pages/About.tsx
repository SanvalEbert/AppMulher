import React from 'react';
import { PageContainer, SectionTitle, Card, InfoBox } from '../components/WireframeComponents';
import { Code2, ExternalLink, GraduationCap, Info, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle subtitle="Conheça a finalidade, o contexto acadêmico e os limites do Portal Acolher.">
        Sobre o Projeto
      </SectionTitle>

      <InfoBox icon={Info} title="Acolher — Informação e Proteção" type="info">
        O portal reúne conteúdos educativos e orientações para facilitar o reconhecimento da violência doméstica e o acesso a canais e serviços da rede de proteção.
      </InfoBox>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Origem acadêmica">
          <div className="flex gap-3">
            <GraduationCap className="w-7 h-7 text-action shrink-0 mt-1" />
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>O Portal Acolher foi desenvolvido como produto da atividade de extensão “Desenvolvimento de sites ou aplicativos sobre violência doméstica”, vinculada ao curso de Segunda Licenciatura em Informática da UNIASSELVI.</p>
              <p>Acadêmico responsável: Sanval Ebert de Freitas Santos.</p>
            </div>
          </div>
        </Card>

        <Card title="Parceria extensionista">
          <div className="flex gap-3">
            <Users className="w-7 h-7 text-action shrink-0 mt-1" />
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>A atividade foi desenvolvida em diálogo com a instituição concedente RRM Educação & Tecnologia, envolvendo planejamento, levantamento de necessidades, prototipação, validação e apresentação da solução.</p>
              <p>O projeto está relacionado ao ODS 16 — Paz, Justiça e Instituições Eficazes.</p>
            </div>
          </div>
        </Card>

        <Card title="Tecnologias utilizadas">
          <div className="flex gap-3">
            <Code2 className="w-7 h-7 text-action shrink-0 mt-1" />
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>A aplicação web foi construída com React, TypeScript e Vite, com navegação por React Router e publicação pelo GitHub Pages.</p>
              <a
                href="https://github.com/SanvalEbert/AppMulher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-action font-semibold hover:underline"
              >
                Consultar o repositório do projeto <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </Card>

        <Card title="Escopo e limites">
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>O Portal Acolher tem finalidade educativa e informativa. Ele não substitui atendimento policial, jurídico, de saúde, psicológico ou de assistência social.</p>
            <p>O portal não recebe denúncias nem acompanha casos individuais. Em risco imediato, ligue 190. Para orientação e denúncia de violência contra a mulher, ligue 180.</p>
          </div>
        </Card>
      </div>

      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-brand-900 mb-3">Processo de desenvolvimento</h3>
        <p className="text-gray-700 leading-relaxed">
          A solução foi estruturada em etapas de pesquisa, levantamento de informações, especificação de requisitos, prototipação de baixa e alta fidelidade, implementação, verificação de usabilidade, ajustes e apresentação à instituição parceira.
        </p>
      </div>
    </PageContainer>
  );
};

export default About;
