import React from 'react';
import { PageContainer, SectionTitle, Card, Button } from '../components/WireframeComponents';
import { Printer } from 'lucide-react';

const Documentation: React.FC = () => {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <PageContainer className="max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <SectionTitle subtitle="Relatório técnico e decisões de design.">
          Processo Criativo
        </SectionTitle>
        
        <Button 
          onClick={handlePrint}
          variant="outline"
          icon={Printer}
          className="print:hidden"
        >
          Baixar PDF
        </Button>
      </div>

      {/* Print Header */}
      <div className="hidden print:block mb-12 border-b-2 border-brand-900 pb-6">
        <h1 className="text-4xl font-black uppercase text-brand-900 mb-2">Especificação de Design</h1>
        <p className="text-gray-600 text-xl">Protótipo de Alta Fidelidade - Site Violência Doméstica</p>
        <p className="text-sm mt-4 text-gray-400">Gerado automaticamente via sistema.</p>
      </div>

      <div className="space-y-12 print:space-y-8">
        <section className="print:break-inside-avoid">
          <h3 className="text-2xl font-bold text-brand-900 mb-4">1. Evolução do Design</h3>
          <Card className="bg-white">
            <div className="prose max-w-none text-gray-700">
              <p>
                A transição do <em>wireframe</em> (baixa fidelidade) para o protótipo final focou na criação de uma identidade visual que transmitisse <strong>confiança, seriedade e acolhimento</strong>.
              </p>
              <p className="mt-2">
                Foram eliminados elementos puramente esquemáticos em favor de componentes de interface (UI) padronizados e acessíveis.
              </p>
            </div>
          </Card>
        </section>

        <section className="print:break-inside-avoid">
          <h3 className="text-2xl font-bold text-brand-900 mb-4">2. Guia de Estilo (Style Guide)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Paleta de Cores">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-900 rounded shadow-sm"></div>
                  <div>
                    <span className="block font-bold text-brand-900">Brand Navy</span>
                    <span className="text-xs text-gray-500">#0f172a (Institucional)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-action rounded shadow-sm"></div>
                  <div>
                    <span className="block font-bold text-brand-900">Action Blue</span>
                    <span className="text-xs text-gray-500">#2563eb (Links/Botões)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-alert rounded shadow-sm"></div>
                  <div>
                    <span className="block font-bold text-brand-900">Alert Red</span>
                    <span className="text-xs text-gray-500">#b91c1c (Emergência)</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card title="Tipografia & Ícones">
               <div className="space-y-4">
                 <div>
                   <p className="font-sans text-3xl font-bold text-brand-900">Inter / Sans Serif</p>
                   <p className="text-sm text-gray-500">Família tipográfica escolhida pela alta legibilidade em telas.</p>
                 </div>
                 <hr/>
                 <div>
                   <p className="text-sm font-bold mb-2">Iconografia (Lucide React)</p>
                   <div className="flex gap-4 text-brand-600">
                      {/* Mock icons */}
                      <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center">A</div>
                      <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center">B</div>
                      <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center">C</div>
                   </div>
                   <p className="text-xs text-gray-500 mt-2">Traços limpos e geométricos para rápida identificação.</p>
                 </div>
               </div>
            </Card>
          </div>
        </section>

        <section className="print:break-inside-avoid">
           <h3 className="text-2xl font-bold text-brand-900 mb-4">3. Decisões de UX</h3>
           <div className="grid grid-cols-1 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-action">
                <h4 className="font-bold text-brand-900">Navegação Simplificada</h4>
                <p className="text-sm text-gray-700">O menu superior permanece fixo para garantir que a usuária nunca se sinta perdida. O botão de "Emergência 190" está sempre visível.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-action">
                <h4 className="font-bold text-brand-900">Sem Formulários</h4>
                <p className="text-sm text-gray-700">Para garantir a segurança digital e evitar rastros, todos os formulários de contato foram removidos. A orientação é exclusivamente para canais oficiais (Telefone/Presencial).</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-action">
                <h4 className="font-bold text-brand-900">Terminologia Acolhedora</h4>
                <p className="text-sm text-gray-700">Uso de termos como "Acolhimento" em vez de apenas "Denúncia", para reduzir a barreira do medo.</p>
              </div>
           </div>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm print:hidden">
        Documentação gerada automaticamente pelo sistema.
      </div>
    </PageContainer>
  );
};

export default Documentation;