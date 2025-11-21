import React from 'react';
import { WTitle, WInput, WPlaceholder, WCard, WButton } from '../components/WireframeComponents';
import { MapPin, Search, Filter } from 'lucide-react';

const MapPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-150px)] flex flex-col">
      <WTitle>Mapa da Rede de Atendimento</WTitle>

      <div className="flex flex-col md:flex-row gap-4 h-full">
        {/* Sidebar Filter/List */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-white border-2 border-black p-4">
            <div className="flex gap-2 mb-4">
              <div className="flex-1">
                 <input type="text" placeholder="Cidade ou Bairro" className="w-full border-2 border-black p-2 text-sm" />
              </div>
              <button className="bg-black text-white p-2 border-2 border-black"><Search size={18} /></button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="text-xs font-bold uppercase flex items-center gap-1"><Filter size={12}/> Filtros:</span>
              <span className="text-xs border border-black px-1 bg-black text-white">DEAM</span>
              <span className="text-xs border border-black px-1 cursor-pointer">CRAS</span>
              <span className="text-xs border border-black px-1 cursor-pointer">ONGs</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <WCard key={i} className="hover:bg-gray-50 cursor-pointer group">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm uppercase group-hover:underline">Delegacia da Mulher - Centro</h4>
                    <MapPin size={16} className="text-gray-400 group-hover:text-black" />
                </div>
                <p className="text-xs mt-1">Rua das Flores, 123 - Centro</p>
                <p className="text-xs font-mono mt-1">Tel: (11) 3333-4444</p>
                <div className="mt-2 flex gap-2">
                    <span className="text-[10px] border border-gray-400 px-1 text-gray-500">24h</span>
                    <span className="text-[10px] border border-gray-400 px-1 text-gray-500">Acessível</span>
                </div>
              </WCard>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 bg-gray-200 border-2 border-black relative">
           <WPlaceholder height="h-full" label="Mapa Interativo (Google Maps/OpenStreet)" className="border-0" />
           
           {/* Floating Location Button */}
           <div className="absolute bottom-4 right-4">
             <WButton primary className="shadow-lg flex items-center gap-2">
               <MapPin size={16} /> Minha Localização
             </WButton>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;