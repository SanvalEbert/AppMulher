import React, { useState, useMemo } from 'react';
import { PageContainer, SectionTitle, Button } from '../components/WireframeComponents';
import { MapPin, Search, Phone, Clock, ArrowUpRight, Globe, MessageCircle } from 'lucide-react';

// Definição da interface para os serviços
interface Service {
  name: string;
  type: string;
  address: string;
  phone: string;
  hours: string;
  link?: string;
  whatsapp?: string;
}

const ALL_SERVICES: Service[] = [
  // Dados reais atualizados conforme solicitação do Relatório de V&V (Dados Bahia)
  { 
    name: "Casa da Mulher Brasileira - Salvador", 
    type: "Acolhimento", // Alterado de "Integrado" para "Acolhimento" para o filtro
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
  { 
    name: "DEAM - Delegacia Especializada de Atendimento à Mulher", 
    type: "Policial", 
    address: "Rua do Salete, s/n - Barris, Salvador - BA", 
    phone: "(71) 3117-6530", 
    hours: "24 horas",
    link: "https://www.ssp.ba.gov.br/deam"
  },
];

const MapPage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Extrai as opções de filtro únicas
  const filterOptions = useMemo(() => {
    const types = ALL_SERVICES.map(s => s.type);
    return ['Todos', ...Array.from(new Set(types))];
  }, []);

  // Lógica de filtragem
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter(service => {
      const matchesType = filterType === 'Todos' || service.type === filterType;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.address.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [filterType, searchTerm]);

  // Função para gerar o link do Google Maps
  const getMapsLink = (service: Service): string => {
    const query = encodeURIComponent(`${service.name}, ${service.address}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm" 
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {filterOptions.map(type => (
                <span 
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1 rounded-full text-xs font-medium hover:bg-action/10 cursor-pointer whitespace-nowrap transition-colors ${
                    filterType === type 
                      ? 'bg-action text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-gray-300">
            {filteredServices.length > 0 ? (
              filteredServices.map((s, idx) => (
                <a 
                  key={idx} 
                  href={getMapsLink(s)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-xl border border-gray-200 hover:border-action hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                      s.type === 'Acolhimento' ? 'bg-purple-100 text-purple-700' : 'bg-blue-50 text-action'
                    }`}>
                      {s.type}
                    </span>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-action transition-colors" />
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
                </a>
              ))
            ) : (
              <div className="text-center p-8 text-gray-500 bg-white rounded-xl border border-gray-200">
                Nenhum serviço encontrado para o filtro aplicado.
              </div>
            )}
          </div>
        </div>

        {/* Visual Map with Button */}
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
                 Clique em um serviço na lista ao lado para abrir a localização no Google Maps.
               </p>
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=Rede+de+Atendimento+à+Mulher+Bahia" 
                 target="_blank" 
                 rel="noopener noreferrer"
               >
                 <Button size="sm" variant="primary" className="w-full shadow-lg">
                   Ver Serviços Próximos no Google Maps
                 </Button>
               </a>
             </div>
           </div>
        </div>

      </div>
    </PageContainer>
  );
};

export default MapPage;
