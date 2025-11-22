import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Monitor, MessageCircle, User } from 'lucide-react';

// Import pages
import Home from './pages/Home';
import Types from './pages/Types';
import Help from './pages/Help';
import Legislation from './pages/Legislation';
import MapPage from './pages/Map';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import Documentation from './pages/Documentation';

const NavLink: React.FC<{ to: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }> = ({ to, children, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`${mobile ? 'block py-3 border-b border-gray-200' : 'px-3 py-1'} 
        ${isActive ? 'bg-black text-white font-bold' : 'text-black hover:bg-gray-200'} 
        text-sm uppercase tracking-wide transition-colors`}
    >
      {children}
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Close mobile menu on route change
  const location = useLocation();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-all duration-300 
      ${viewMode === 'mobile' ? 'max-w-[400px] mx-auto border-x-8 border-gray-800 my-8 shadow-2xl rounded-3xl overflow-hidden bg-white min-h-[800px] relative print:max-w-full print:border-0 print:shadow-none print:my-0 print:rounded-none' : 'bg-white'}
    `}>
      
      {/* Simulation Header (View Mode Toggle) - Only visible in "Desktop" container view */}
      {viewMode === 'mobile' && (
        <div className="absolute top-0 left-0 w-full h-6 bg-gray-800 flex justify-center items-center z-50 print:hidden">
           <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
        </div>
      )}

      {/* App Header */}
      <header className="border-b-4 border-black bg-white p-4 sticky top-0 z-40 print:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-xl">
              VD
            </div>
            <span className="font-bold text-lg uppercase hidden md:block">Violência Doméstica</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/types">Tipos</NavLink>
            <NavLink to="/help">Ajuda</NavLink>
            <NavLink to="/map">Mapa</NavLink>
            <NavLink to="/legislation">Leis</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </nav>

          {/* Mobile Toggle & Accessibility Placeholder */}
          <div className="flex items-center gap-4">
             <div className="flex text-xs font-bold border border-black">
                 <button className="px-2 hover:bg-gray-200">A+</button>
                 <button className="px-2 hover:bg-gray-200 border-l border-black">A-</button>
             </div>
             
             <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
               {isMobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 border-t-2 border-black pt-2">
            <NavLink to="/" mobile>Home</NavLink>
            <NavLink to="/types" mobile>Tipos de Violência</NavLink>
            <NavLink to="/help" mobile>Como Buscar Ajuda</NavLink>
            <NavLink to="/map" mobile>Mapa de Serviços</NavLink>
            <NavLink to="/legislation" mobile>Legislação</NavLink>
            <NavLink to="/faq" mobile>Dúvidas Frequentes</NavLink>
            <NavLink to="/contact" mobile>Contato</NavLink>
            <NavLink to="/sitemap" mobile>Fluxo / Sitemap</NavLink>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className={`flex-1 p-6 ${viewMode === 'mobile' ? 'overflow-y-auto h-[700px] print:h-auto print:overflow-visible' : ''}`}>
        {children}
      </main>

      {/* Chatbot Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
         <button className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1),4px_4px_0px_2px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform">
             <MessageCircle size={24} />
         </button>
      </div>

      {/* Wireframe Controls (Outside the app interface) */}
      <div className="fixed bottom-4 left-4 flex gap-2 z-50 hidden md:flex print:hidden">
         <button 
           onClick={() => setViewMode('desktop')}
           className={`p-2 border-2 border-black flex items-center gap-2 text-xs font-bold uppercase shadow-md ${viewMode === 'desktop' ? 'bg-black text-white' : 'bg-white'}`}
         >
           <Monitor size={16} /> Desktop
         </button>
         <button 
           onClick={() => setViewMode('mobile')}
           className={`p-2 border-2 border-black flex items-center gap-2 text-xs font-bold uppercase shadow-md ${viewMode === 'mobile' ? 'bg-black text-white' : 'bg-white'}`}
         >
           <Smartphone size={16} /> Mobile Sim
         </button>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center text-xs uppercase tracking-widest border-t-4 border-gray-500 print:hidden">
        Projeto de Extensão - Protótipo de Baixa Fidelidade
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
          <Route path="/help" element={<Help />} />
          <Route path="/legislation" element={<Legislation />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;