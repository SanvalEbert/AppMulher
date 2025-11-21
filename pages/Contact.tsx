import React from 'react';
import { WTitle, WInput, WButton, WCard } from '../components/WireframeComponents';
import { Lock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div>
        <WTitle>Canal de Acolhimento</WTitle>
        <p className="mb-6 text-sm">
          Este formulário é para dúvidas gerais ou pedido de orientação. 
          <br/><span className="font-bold bg-black text-white px-1">EMERGÊNCIAS: LIGUE 190.</span>
        </p>

        <form className="p-6 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 mb-4 text-xs text-gray-600 border-b border-gray-200 pb-2">
            <Lock size={12} /> Seus dados são mantidos em sigilo.
          </div>
          
          <WInput label="Nome (Opcional)" placeholder="Como prefere ser chamada?" />
          <WInput label="Email ou Telefone" placeholder="Para retorno" />
          <WInput label="Assunto" placeholder="Ex: Dúvida sobre abrigo" />
          <WInput label="Mensagem" placeholder="Escreva aqui..." textarea />
          
          <div className="flex items-center gap-2 mb-4">
             <input type="checkbox" className="w-4 h-4 accent-black" />
             <span className="text-xs">Concordo com a Política de Privacidade.</span>
          </div>

          <WButton primary className="w-full">Enviar Mensagem</WButton>
        </form>
      </div>

      <div className="space-y-6">
         <WCard title="Outros Canais">
             <div className="space-y-4">
                 <div>
                     <h4 className="font-bold text-sm">Central de Atendimento à Mulher</h4>
                     <p className="text-2xl font-black">Ligue 180</p>
                     <p className="text-xs text-gray-500">24h, gratuito e anônimo.</p>
                 </div>
                 <hr className="border-gray-300"/>
                 <div>
                     <h4 className="font-bold text-sm">WhatsApp (Me Direitos Humanos)</h4>
                     <p className="text-lg font-bold">(61) 99656-5008</p>
                 </div>
             </div>
         </WCard>

         <WCard title="Privacidade e Segurança">
             <p className="text-xs text-justify mb-2">
                 Ao navegar neste site, não salvamos seu histórico de forma explícita, mas recomendamos que use uma aba anônima caso compartilhe o computador com o agressor.
             </p>
             <WButton className="text-xs w-full">Como limpar histórico de navegação</WButton>
         </WCard>
      </div>

    </div>
  );
};

export default Contact;