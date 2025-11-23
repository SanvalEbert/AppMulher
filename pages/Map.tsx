import React from 'react';
import { PageContainer, SectionTitle, Button } from '../components/WireframeComponents';
import { MapPin, Search, Phone, Clock, ArrowUpRight, Globe, MessageCircle } from 'lucide-react';

const MapPage: React.FC = () => {
  // Dados reais atualizados conforme solicitação do Relatório de V&V (Dados Bahia)
  const services = [
    { 
      name: "Casa da Mulher Brasileira - Salvador", 
      type: "Integrado", 
      address: "Av. Tancredo Neves, ao lado da Rodoviária, Salvador-BA", 
      phone: "(71) 3611-6530", 
      hours: "24 horas",
      link: "https://www.gov.br/mdh/casa-mulher-brasileira"
    },
    { 
      name: "Secretaria de Políticas para as Mulheres (SPM-BA)", 
      type: "Institucional", 
      address: "Fórmula e executa políticas públicas", 
      phone: "(71) 3117-2815 / 3117-2820",
      whatsapp: "(71) 9978-9160",
      hours: "Administrativo",
      link: "http://www.spm.ba.gov.br"
    },
    { 
      name: "NUDEM - Defensoria Pública da Bahia", 
      type: "Jurídico", 
      address: "Assistência jurídica especializada", 
      phone: "129 ou 0800-071-3121", 
      hours: "08h às 17h",
      link: "https://www.defensoria.ba.def.br"
    },
    { 
      name: "GEDEM - Ministério Público da Bahia", 
      type: "Jurídico", 
      address: "Sede MP-BA - Nazaré, Salvador-BA", 
      phone: "(71) 3322-6734", 
      hours: "Administrativo",
      link: "https://www.mpba.mp.br"
    },
    { 
      name: "Delegacia Virtual da Bahia", 
      type: "Policial", 
      address: "Atendimento Online", 
      phone: "Disque Denúncia: 181", 
      hours: "24 horas",
      link: "https://www.delegaciavirtual.ssp.ba.gov.br"
    },
  ];

  return (
    <PageContainer>
      <SectionTitle subtitle="Encontre os serviços oficiais atualizados da rede de proteção na Bahia.">
        Rede de Atendimento
      </SectionTitle>

      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px]">
        
        {/* Sidebar List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 h-full">
          
          {/* Filters */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Filtrar serviços..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm" 
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              <span className="bg-brand-900 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">Todos</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer whitespace-nowrap">Policial</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer whitespace-nowrap">Jurídico</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer whitespace-nowrap">Acolhimento</span>
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-gray-300">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 hover:border-action hover:shadow-md transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                    s.type === 'Integrado' ? 'bg-purple-100 text-purple-700' : 'bg-blue-50 text-action'
                  }`}>
                    {s.type}
                  </span>
                  <a href={s.link} target="_blank" rel="noreferrer" title="Acessar site">
                    <ArrowUpRight size={16} className="text-gray-300 hover:text-action" />
                  </a>
                </div>
                <h4 className="font-bold text-brand-900 text-sm mb-1">{s.name}</h4>
                <p className="text-xs text-gray-500 mb-3 flex items-start gap-1">
                  <MapPin size={12} className="shrink-0 mt-0.5" /> 
                  <span>{s.address}</span>
                </p>
                <div className="flex flex-col gap-2 text-xs text-gray-600 border-t border-gray-50 pt-2">
                  <span className="flex items-center gap-1 font-semibold"><Phone size={12} /> {s.phone}</span>
                  {s.whatsapp && (
                     <span className="flex items-center gap-1 text-green-700 font-semibold"><MessageCircle size={12} /> WhatsApp: {s.whatsapp}</span>
                  )}
                  <span className="flex items-center gap-1"><Clock size={12} /> {s.hours}</span>
                  {s.link && (
                    <a href={s.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-action hover:underline mt-1">
                      <Globe size={12} /> Site Oficial
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Map with Image */}
        <div className="flex-1 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative group h-[400px] lg:h-auto">
           {/* Realistic Map Texture */}
           <div 
             className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')" }}
           ></div>
           
           <div className="absolute inset-0 flex items-center justify-center bg-black/10">
             <div className="text-center p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-xl max-w-sm border border-white/50">
               <div className="bg-brand-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-action">
                 <MapPin className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-xl text-brand-900 mb-2">Mapa de Serviços</h3>
               <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                 Este mapa é ilustrativo. Consulte a lista ao lado para endereços exatos e atualizados das unidades de Salvador e região.
               </p>
               <Button size="sm" variant="primary" className="w-full shadow-lg">
                 Verificar Rota no Google Maps
               </Button>
             </div>
           </div>
        </div>

      </div>
    </PageContainer>
  );
};

export default MapPage;