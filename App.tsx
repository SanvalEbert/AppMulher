import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ExternalLink, Phone } from 'lucide-react';
import { BrandLogo } from './components/WireframeComponents';

// Import pages
import Home from './pages/Home';
import Types from './pages/Types';
import Signs from './pages/Signs';
import Help from './pages/Help';
import Legislation from './pages/Legislation';
import MapPage from './pages/Map';
import FAQ from './pages/FAQ';
import Sitemap from './pages/Sitemap';
import Documentation from './pages/Documentation';

const NavLink: React.FC<{ to: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }> = ({ to, children, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const baseStyles = "text-sm font-medium transition-colors duration-200";
  const desktopStyles = isActive 
    ? "text-white bg-brand-800 px-3 py-2 rounded-md shadow-sm" 
    : "text-brand-100 hover:text-white hover:bg-brand-800/50 px-3 py-2 rounded-md";
  const mobileStyles = isActive 
    ? "block w-full text-left px-4 py-3 bg-brand-50 text-brand-900 font-bold border-l-4 border-brand-900" 
    : "block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-900 border-l-4 border-transparent";

  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`${mobile ? mobileStyles : desktopStyles} ${baseStyles}`}
    >
      {children}
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-50 relative">
      
      {/* Institutional Header */}
      <header className="bg-brand-900 border-b border-brand-800 sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                <BrandLogo className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none tracking-wide uppercase">Acolher</span>
                <span className="text-brand-300 text-[10px] uppercase tracking-wider">Informação e Proteção</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink to="/">Início</NavLink>
              {/* Updated Menu Name per V&V Report */}
              <NavLink to="/types">Tipos e Conceitos</NavLink>
              <NavLink to="/signs">Sinais</NavLink>
              <NavLink to="/help">Ajuda</NavLink>
              <NavLink to="/map">Atendimento</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </nav>

            {/* Desktop Utility / Emergency */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-6 w-px bg-brand-700"></div>
              <Link to="/help">
                <button className="bg-alert hover:bg-alert-hover text-white text-sm font-bold px-4 py-2 rounded shadow-sm transition-colors">
                  EMERGÊNCIA 190
                </button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-brand-800 rounded-md"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50">
            <nav className="flex flex-col py-2">
              <NavLink to="/" mobile>Início</NavLink>
              <NavLink to="/types" mobile>Tipos e Conceitos</NavLink>
              <NavLink to="/signs" mobile>Sinais e Indícios</NavLink>
              <NavLink to="/help" mobile>Como Buscar Ajuda</NavLink>
              <NavLink to="/map" mobile>Rede de Atendimento</NavLink>
              <NavLink to="/legislation" mobile>Legislação e Direitos</NavLink>
              <NavLink to="/faq" mobile>Dúvidas Frequentes</NavLink>
            </nav>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <Link to="/help" className="block">
                 <button className="w-full bg-alert text-white font-bold py-3 rounded-lg shadow-sm">
                   LIGAR PARA 190
                 </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* STICKY FLOATING BUTTON - High Priority Requirement */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden animate-fade-in">
        <a href="tel:180" className="group flex items-center justify-center">
           <div className="bg-brand-900 text-white rounded-full shadow-xl p-4 pr-6 flex items-center gap-3 border-4 border-white hover:bg-brand-800 transition-all transform hover:scale-105">
              <div className="bg-white text-brand-900 p-2 rounded-full animate-pulse">
                <Phone size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Central Mulher</span>
                <span className="text-xl font-black leading-none">LIGUE 180</span>
              </div>
           </div>
        </a>
      </div>

      {/* Institutional Footer */}
      <footer className="bg-brand-900 text-white pt-12 pb-6 border-t-4 border-action print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <BrandLogo className="h-6 w-6 text-brand-400" />
                <span className="font-bold text-lg uppercase">Acolher</span>
              </div>
              <p className="text-brand-300 text-sm leading-relaxed">
                Projeto de Extensão Universitária focado na conscientização e combate à violência doméstica através da informação.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-400">Acesso Rápido</h4>
              <ul className="space-y-2 text-sm text-brand-100">
                <li><Link to="/types" className="hover:text-white hover:underline">Tipos de Violência</Link></li>
                <li><Link to="/signs" className="hover:text-white hover:underline">Sinais de Alerta</Link></li>
                <li><Link to="/help" className="hover:text-white hover:underline">Como Buscar Ajuda</Link></li>
                <li><Link to="/map" className="hover:text-white hover:underline">Encontrar Serviços</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-400">Institucional</h4>
              <ul className="space-y-2 text-sm text-brand-100">
                <li><Link to="/legislation" className="hover:text-white hover:underline">Legislação</Link></li>
                <li><Link to="/sitemap" className="hover:text-white hover:underline">Mapa do Site</Link></li>
                <li><a href="#" className="hover:text-white hover:underline">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Sobre o Projeto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-400">Links Oficiais</h4>
              <ul className="space-y-2 text-sm text-brand-100">
                <li>
                  <a href="https://www.gov.br/mdh/pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                    Ministério Direitos Humanos <ExternalLink size={12}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.cnj.jus.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                    Conselho Nacional de Justiça <ExternalLink size={12}/>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-brand-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-500">
            <p>&copy; {new Date().getFullYear()} Projeto Acolher. Todos os direitos reservados.</p>
            <p className="text-center md:text-right">As informações contidas neste site não substituem o aconselhamento jurídico ou policial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/types" element={<Types />} />
          <Route path="/signs" element={<Signs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/legislation" element={<Legislation />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;