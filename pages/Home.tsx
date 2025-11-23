import React from 'react';
import { AlertTriangle, Phone, MapPin, Scale, Info, ChevronRight, ShieldAlert, PhoneCall } from 'lucide-react';
import { PageContainer, Button, Card, SectionTitle, InfoBox, BrandLogo } from '../components/WireframeComponents';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-brand-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600')" }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-900 via-brand-900/90 to-transparent"></div>

        <PageContainer className="!py-0 relative z-20">
          <div className="max-w-3xl space-y-6">
            <div className="mb-4 animate-fade-in-up">
              <BrandLogo className="w-20 h-20 text-white opacity-90 drop-shadow-lg" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-blue-100 backdrop-blur-sm border border-white/10">
              <Info size={16} />
              <span>Informação é o primeiro passo para a proteção.</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
              Você não está sozinha. <br/>
              <span className="text-blue-400">A lei protege você.</span>
            </h1>
            <p className="text-lg text-blue-50 max-w-2xl leading-relaxed drop-shadow-md font-medium">
              Este portal reúne informações oficiais sobre como identificar a violência doméstica, buscar ajuda e acessar a rede de proteção do Estado.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/help">
                <Button variant="alert" size="lg" icon={PhoneCall} className="shadow-lg shadow-red-900/20">
                  Como Buscar Ajuda
                </Button>
              </Link>
              <Link to="/signs">
                <Button variant="secondary" size="lg" icon={AlertTriangle} className="shadow-lg shadow-blue-900/20">
                  Identificar Sinais
                </Button>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        
        {/* Emergency Banner */}
        <div className="bg-white rounded-xl shadow-xl border-l-8 border-alert overflow-hidden mb-12 transform -translate-y-6 md:-translate-y-10 relative z-30">
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full text-alert shrink-0 animate-pulse">
                <ShieldAlert size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Emergência Imediata?</h3>
                <p className="text-gray-600 mt-1">
                  Se você ou alguém está em risco de vida agora, acione a Polícia Militar.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-center px-4">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Polícia Militar</span>
                <span className="block text-3xl font-black text-brand-900">190</span>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center px-4">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Central da Mulher</span>
                <span className="block text-3xl font-black text-brand-900">180</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link to="/types" className="block group">
            <Card className="h-full hover:border-action/30 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-action mb-4 group-hover:bg-action group-hover:text-white transition-colors">
                <Info size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-action transition-colors">Tipos de Violência</h3>
              <p className="text-gray-600 mb-4">Entenda as 5 formas de violência previstas na Lei Maria da Penha.</p>
              <span className="text-action font-semibold text-sm flex items-center">Saiba mais <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></span>
            </Card>
          </Link>
          
          <Link to="/map" className="block group">
            <Card className="h-full hover:border-action/30 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-action mb-4 group-hover:bg-action group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-action transition-colors">Rede de Atendimento</h3>
              <p className="text-gray-600 mb-4">Encontre delegacias, centros de referência e casas abrigo.</p>
              <span className="text-action font-semibold text-sm flex items-center">Ver serviços <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></span>
            </Card>
          </Link>
          
          <Link to="/legislation" className="block group">
            <Card className="h-full hover:border-action/30 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-action mb-4 group-hover:bg-action group-hover:text-white transition-colors">
                <Scale size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-action transition-colors">Seus Direitos</h3>
              <p className="text-gray-600 mb-4">Conheça as Medidas Protetivas e o que a lei garante para sua segurança.</p>
              <span className="text-action font-semibold text-sm flex items-center">Ler legislação <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></span>
            </Card>
          </Link>
        </div>

        {/* Educational Highlight - Language Simplified per V&V */}
        <div className="bg-white rounded-2xl p-8 md:p-0 flex flex-col md:flex-row gap-0 items-stretch shadow-md border border-gray-100 overflow-hidden">
          <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-brand-900">Entendendo o Ciclo da Violência</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Muitas agressões seguem um padrão que se repete. Saber identificar essas fases ajuda a perceber o risco:
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
               <li><strong>1. Tensão:</strong> O agressor fica irritado, faz ameaças e humilhações. A mulher tenta "acalmar" a situação.</li>
               <li><strong>2. Explosão:</strong> Acontece a agressão física ou verbal grave. É o momento de maior perigo.</li>
               <li><strong>3. Lua de Mel:</strong> O agressor pede desculpas, diz que "perdeu a cabeça" e promete mudar.</li>
            </ul>
            <p className="text-gray-700 text-lg">
              Com o tempo, a fase de carinho diminui e as agressões ficam piores. 
            </p>
            <div>
              <Link to="/signs">
                <Button variant="outline" className="mt-2">Entenda os Sinais de Alerta</Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/5 bg-brand-50 flex items-center justify-center p-8 relative">
             {/* SVG Visualization of the Cycle */}
             <div className="relative w-64 h-64 rounded-full border-4 border-brand-200 flex items-center justify-center bg-white shadow-sm z-10">
                <div className="text-center">
                  <div className="font-bold text-brand-900">CICLO</div>
                  <div className="text-xs text-brand-500 uppercase tracking-widest">Repetitivo</div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white px-3 py-1 rounded-full shadow-sm font-bold text-sm text-brand-700 border border-brand-100">Tensão</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white px-3 py-1 rounded-full shadow-sm font-bold text-sm text-brand-700 border border-brand-100">Lua de Mel</div>
                <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-sm font-bold text-sm text-alert border border-red-100">Explosão</div>
             </div>
             {/* Decorative circles */}
             <div className="absolute top-10 right-10 w-20 h-20 bg-brand-200/50 rounded-full blur-xl"></div>
             <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200/50 rounded-full blur-xl"></div>
          </div>
        </div>

      </PageContainer>
    </div>
  );
};

export default Home;