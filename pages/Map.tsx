import React from 'react';
import { PageContainer, SectionTitle, Card, Button } from '../components/WireframeComponents';
import { MapPin, Search, Filter, Phone, Clock, ArrowUpRight } from 'lucide-react';

const MapPage: React.FC = () => {
  // Mock data for services
  const services = [
    { name: "Delegacia Especializada (DEAM) - Centro", type: "DEAM", address: "Rua das Flores, 123, Centro", phone: "(11) 3333-4444", hours: "24 horas" },
    { name: "CRAS Norte - Acolhimento", type: "CRAS", address: "Av. das Nações, 500, Zona Norte", phone: "(11) 3333-5555", hours: "08h às 17h" },
    { name: "Defensoria Pública da Mulher", type: "Jurídico", address: "Rua da Justiça, 100, Fórum", phone: "129", hours: "13h às 18h" },
    { name: "Casa da Mulher Brasileira", type: "Integrado", address: "Via Expressa, km 2", phone: "(11) 3333-6666", hours: "24 horas" },
  ];

  return (
    <PageContainer>
      <SectionTitle subtitle="Encontre os serviços da rede de proteção mais próximos de você.">
        Rede de Atendimento
      </SectionTitle>

      <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
        
        {/* Sidebar List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 h-full">
          
          {/* Filters */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar por bairro ou cidade..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm" 
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              <span className="bg-brand-900 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">Todos</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer whitespace-nowrap">Delegacias</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer whitespace-nowrap">Saúde</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer whitespace-nowrap">Jurídico</span>
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-gray-300">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 hover:border-action hover:shadow-md transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-blue-50 text-action text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">{s.type}</span>
                  <ArrowUpRight size={16} className="text-gray-300 group-hover:text-action" />
                </div>
                <h4 className="font-bold text-brand-900 text-sm mb-1">{s.name}</h4>
                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                  <MapPin size={12} /> {s.address}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600 border-t border-gray-50 pt-2">
                  <span className="flex items-center gap-1"><Phone size={12} /> {s.phone}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {s.hours}</span>
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
                 Este é um mapa ilustrativo. Por razões de segurança, não rastreamos sua localização automaticamente.
               </p>
               <Button size="sm" variant="primary" className="w-full shadow-lg">
                 Selecionar Estado/Cidade
               </Button>
             </div>
           </div>
        </div>

      </div>
    </PageContainer>
  );
};

export default MapPage;