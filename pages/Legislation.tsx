import React from 'react';
import { PageContainer, SectionTitle, Card, Button } from '../components/WireframeComponents';
import { BookOpen, ShieldCheck, Gavel, FileText, Download } from 'lucide-react';

const Legislation: React.FC = () => {
  return (
    <div>
       {/* Thematic Banner */}
       <div className="w-full h-48 md:h-64 bg-brand-900 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 to-transparent"></div>
          <PageContainer className="relative z-10 h-full flex flex-col justify-end pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Legislação e Direitos</h1>
            <p className="text-brand-100 text-lg max-w-2xl">Conheça a base legal que garante sua proteção e pune a violência doméstica no Brasil.</p>
          </PageContainer>
       </div>

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Main Law Highlight */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-100 text-brand-900 rounded-lg">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-900">Lei Maria da Penha</h3>
                  <p className="text-sm text-brand-600 font-medium">Lei nº 11.340 de 07 de agosto de 2006</p>
                </div>
              </div>
              <div className="prose prose-slate max-w-none text-gray-700">
                <p>
                  Reconhecida pela ONU como uma das três melhores legislações do mundo no combate à violência contra a mulher, a Lei Maria da Penha criou mecanismos para coibir a violência doméstica e familiar.
                </p>
                <p>
                  <strong>Principais avanços:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Tipifica a violência física, psicológica, sexual, patrimonial e moral.</li>
                  <li>Proíbe a aplicação de penas pecuniárias (pagamento de cestas básicas).</li>
                  <li>Possibilita a prisão preventiva do agressor.</li>
                  <li>Institui as Medidas Protetivas de Urgência.</li>
                </ul>
              </div>
              <div className="mt-6">
                <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" icon={Gavel}>Ler Lei na Íntegra (Planalto)</Button>
                </a>
              </div>
            </section>

            {/* Protective Measures */}
            <section>
               <h3 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                 <ShieldCheck className="text-action" /> Medidas Protetivas de Urgência
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card className="bg-blue-50 border-blue-100 h-full">
                   <h4 className="font-bold text-brand-900 mb-3 flex items-center gap-2">
                     Para Proteger a Vítima
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex gap-2"><span className="text-action">•</span> Acompanhamento policial para buscar bens.</li>
                     <li className="flex gap-2"><span className="text-action">•</span> Encaminhamento a programas de proteção.</li>
                     <li className="flex gap-2"><span className="text-action">•</span> Separação de corpos (afastamento jurídico).</li>
                   </ul>
                 </Card>
                 <Card className="bg-red-50 border-red-100 h-full">
                   <h4 className="font-bold text-brand-900 mb-3 flex items-center gap-2">
                     Obrigações do Agressor
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex gap-2"><span className="text-alert">•</span> Afastamento imediato do lar.</li>
                     <li className="flex gap-2"><span className="text-alert">•</span> Proibição de contato com a vítima e familiares.</li>
                     <li className="flex gap-2"><span className="text-alert">•</span> Suspensão do porte de armas.</li>
                   </ul>
                 </Card>
               </div>
            </section>
          </div>

          {/* Sidebar Resources */}
          <div className="space-y-6">
            <Card title="Cartilhas e Materiais">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">Cartilha Simplificada</span>
                  </div>
                  <Download size={16} className="text-brand-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">Manual Polícia Civil</span>
                  </div>
                  <Download size={16} className="text-brand-500" />
                </div>
              </div>
            </Card>

            <div className="bg-brand-900 text-white p-6 rounded-xl">
              <h4 className="font-bold mb-2">Dúvidas Jurídicas?</h4>
              <p className="text-sm text-blue-200 mb-4">
                A Defensoria Pública oferece assistência jurídica gratuita.
              </p>
              <div className="font-bold text-2xl mb-1">Ligue 129</div>
            </div>
          </div>

        </div>
      </PageContainer>
    </div>
  );
};

export default Legislation;