import React from 'react';
import { PageContainer, SectionTitle, Button, Card } from '../components/WireframeComponents';
import { Lock } from 'lucide-react';

// Local Input component to replace missing WInput
const Input: React.FC<{ label: string; placeholder: string; textarea?: boolean }> = ({ label, placeholder, textarea }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-brand-900 mb-1">{label}</label>
    {textarea ? (
      <textarea 
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm min-h-[100px] resize-y"
        placeholder={placeholder}
      />
    ) : (
      <input 
        type="text" 
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm"
        placeholder={placeholder}
      />
    )}
  </div>
);

const Contact: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle subtitle="Estamos aqui para ouvir você com segurança e sigilo.">
        Fale Conosco
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <div className="mb-6">
             <h3 className="text-xl font-bold text-brand-900 mb-2">Canal de Acolhimento</h3>
             <p className="text-sm text-gray-600">
               Este formulário é para dúvidas gerais ou pedido de orientação. 
               <br/><span className="font-bold bg-black text-white px-1">EMERGÊNCIAS: LIGUE 190.</span>
             </p>
          </div>

          <form className="p-6 border border-gray-200 bg-white rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-xs text-gray-600 border-b border-gray-100 pb-2">
              <Lock size={12} /> Seus dados são mantidos em sigilo.
            </div>
            
            <Input label="Nome (Opcional)" placeholder="Como prefere ser chamada?" />
            <Input label="Email ou Telefone" placeholder="Para retorno" />
            <Input label="Assunto" placeholder="Ex: Dúvida sobre abrigo" />
            <Input label="Mensagem" placeholder="Escreva aqui..." textarea />
            
            <div className="flex items-center gap-2 mb-6">
               <input type="checkbox" className="w-4 h-4 accent-black" />
               <span className="text-xs text-gray-600">Concordo com a Política de Privacidade.</span>
            </div>

            <Button variant="primary" className="w-full">Enviar Mensagem</Button>
          </form>
        </div>

        <div className="space-y-6">
           <Card title="Outros Canais">
               <div className="space-y-4">
                   <div>
                       <h4 className="font-bold text-sm text-brand-900">Central de Atendimento à Mulher</h4>
                       <p className="text-2xl font-black text-action">Ligue 180</p>
                       <p className="text-xs text-gray-500">24h, gratuito e anônimo.</p>
                   </div>
                   <hr className="border-gray-200"/>
                   <div>
                       <h4 className="font-bold text-sm text-brand-900">WhatsApp (Me Direitos Humanos)</h4>
                       <p className="text-lg font-bold text-gray-800">(61) 99656-5008</p>
                   </div>
               </div>
           </Card>

           <Card title="Privacidade e Segurança">
               <p className="text-sm text-gray-600 text-justify mb-4">
                   Ao navegar neste site, não salvamos seu histórico de forma explícita, mas recomendamos que use uma aba anônima caso compartilhe o computador com o agressor.
               </p>
               <Button variant="outline" size="sm" className="w-full">Como limpar histórico de navegação</Button>
           </Card>
        </div>

      </div>
    </PageContainer>
  );
};

export default Contact;