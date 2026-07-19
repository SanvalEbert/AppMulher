import React from 'react';
import { PageContainer, SectionTitle, Card, InfoBox } from '../components/WireframeComponents';
import { AlertTriangle, Database, ExternalLink, ShieldCheck, Smartphone } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle subtitle="Transparência sobre privacidade, dados e navegação segura.">
        Política de Privacidade
      </SectionTitle>

      <InfoBox icon={AlertTriangle} title="Em situação de emergência" type="warning">
        Este portal é informativo e não realiza atendimento emergencial. Em risco imediato, ligue para a Polícia Militar pelo número 190. Para orientação e denúncia de violência contra a mulher, ligue 180.
      </InfoBox>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Dados pessoais">
          <div className="flex gap-3">
            <Database className="w-6 h-6 text-action shrink-0 mt-1" />
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>O Portal Acolher não exige cadastro e não possui formulário ativo para o envio de relatos, denúncias ou dados pessoais.</p>
              <p>O projeto não solicita deliberadamente nome, CPF, endereço, localização ou informações sobre situações de violência.</p>
            </div>
          </div>
        </Card>

        <Card title="Registros técnicos">
          <div className="flex gap-3">
            <ShieldCheck className="w-6 h-6 text-action shrink-0 mt-1" />
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>O portal está hospedado no GitHub Pages. A plataforma de hospedagem e os serviços externos utilizados para exibir fontes, imagens ou outros recursos podem registrar informações técnicas, como endereço IP, navegador e horário de acesso, conforme suas próprias políticas.</p>
              <p>O Portal Acolher não utiliza esses registros para identificar pessoas ou criar perfis de usuárias.</p>
            </div>
          </div>
        </Card>

        <Card title="Chamadas e links externos">
          <div className="flex gap-3">
            <Smartphone className="w-6 h-6 text-action shrink-0 mt-1" />
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Ao tocar nos botões 190, 180, 100 ou 129, a chamada é iniciada pelo aplicativo de telefone do dispositivo. A ligação e seus registros são administrados pela operadora e pelo próprio aparelho.</p>
              <p>Links para páginas governamentais são abertos fora do portal e passam a seguir as políticas de privacidade desses serviços.</p>
            </div>
          </div>
        </Card>

        <Card title="Navegação segura">
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>Ao usar um dispositivo compartilhado, avalie se a navegação pode ser visualizada por outra pessoa. Use recursos de privacidade apenas quando isso não aumentar o risco.</p>
            <p>Evite inserir informações pessoais em páginas ou serviços cuja origem e finalidade não estejam claras.</p>
          </div>
        </Card>
      </div>

      <div className="mt-8 bg-brand-50 border border-brand-100 rounded-xl p-6">
        <h3 className="font-bold text-brand-900 mb-3">Fontes e serviços oficiais</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.gov.br/mulheres/pt-br/ligue180"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-action font-semibold hover:underline"
          >
            Ligue 180 — Ministério das Mulheres <ExternalLink size={16} />
          </a>
          <a
            href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-action font-semibold hover:underline"
          >
            Disque 100 — Direitos Humanos <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500">Última atualização: 19 de julho de 2026.</p>
    </PageContainer>
  );
};

export default Privacy;
