import React from 'react';
import { AlertTriangle, Phone, MapPin, Scale } from 'lucide-react';
import { WTitle, WPlaceholder, WButton, WCard } from '../components/WireframeComponents';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        {/* Hero Section */}
        <section className="space-y-4">
          <WPlaceholder height="h-64" label="Banner: Campanha de Conscientização" />
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black">COMBATE À VIOLÊNCIA DOMÉSTICA</h1>
            <p className="text-gray-600 italic">"Frase de impacto sobre acolhimento e informação"</p>
          </div>
        </section>

        {/* Quick Actions - Identified as essential by Personas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <WCard className="flex flex-col items-center text-center gap-3 hover:bg-gray-50 cursor-pointer">
            <AlertTriangle size={40} />
            <h3 className="font-bold text-lg">RECONHECER SINAIS</h3>
            <p className="text-sm">Saiba identificar os tipos de violência.</p>
            <WButton className="w-full mt-auto">Ver Tipos</WButton>
          </WCard>
          
          <WCard className="flex flex-col items-center text-center gap-3 hover:bg-gray-50 cursor-pointer">
            <Phone size={40} />
            <h3 className="font-bold text-lg">BUSCAR AJUDA</h3>
            <p className="text-sm">Canais de denúncia e passo a passo.</p>
            <WButton className="w-full mt-auto" primary>Emergência</WButton>
          </WCard>
          
          <WCard className="flex flex-col items-center text-center gap-3 hover:bg-gray-50 cursor-pointer">
            <MapPin size={40} />
            <h3 className="font-bold text-lg">REDE DE APOIO</h3>
            <p className="text-sm">Encontre delegacias e centros de apoio próximos.</p>
            <WButton className="w-full mt-auto">Ver Mapa</WButton>
          </WCard>
        </section>

        {/* Legislation Highlight */}
        <section className="border-t-2 border-black pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Scale /> LEI MARIA DA PENHA
              </h2>
              <p className="text-justify">
                [Resumo breve sobre a Lei 11.340/2006 e sua importância na proteção da mulher e punição do agressor. Link para texto completo.]
              </p>
              <WButton>Ler sobre seus direitos</WButton>
            </div>
            <div className="w-full md:w-1/3">
              <WPlaceholder height="h-40" label="Infográfico: Ciclo da Violência" />
            </div>
          </div>
        </section>

        {/* Footer Placeholder inside page content for wireframe completeness */}
        <div className="border-t-4 border-black mt-8 py-8 text-center bg-gray-100">
          <p className="font-bold">RODAPÉ</p>
          <p className="text-sm">Links Institucionais | Parceiros | Contato</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="w-8 h-8 border border-black bg-white rounded-full flex items-center justify-center text-xs">FB</div>
            <div className="w-8 h-8 border border-black bg-white rounded-full flex items-center justify-center text-xs">IG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;