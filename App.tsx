import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Phone } from 'lucide-react';
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
import Privacy from './pages/Privacy';
import About from './pages/About';
import NotFound from './pages/NotFound';

const NavLink: React.FC<{ to: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }> = ({ to, children, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseStyles = 'text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const desktopStyles = isActive
    ? 'text-white bg-brand-800 px-3 py-2 rounded-md shadow-sm focus:ring-white focus:ring-offset-brand-900'
    : 'text-brand-100 hover:text-white hover:bg-brand-800/50 px-3 py-2 rounded-md focus:ring-white focus:ring-offset-brand-900';
  const mobileStyles = isActive
    ? 'block w-full text-left px-4 py-3 bg-brand-50 text-brand-900 font-bold border-l-4 border-brand-900 focus:ring-brand-900 focus:ring-inset'
    : 'block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-900 border-l-4 border-transparent focus:ring-brand-900 focus:ring-inset';

  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`${mobile ? mobileStyles : desktopStyles} ${baseStyles}`}
    >
      {children}
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fecha o menu e leva a nova página para o início após a troca de rota.
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  // Permite fechar o menu móvel pelo teclado.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-50 relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-brand-900 focus:px-4 focus:py-3 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-action"
      >
        Pular para o conteúdo principal
      </a>

      {/* Institutional Header */}
      <header className="bg-brand-900 border-b border-brand-800 sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white rounded-lg" aria-label="Ir para a página inicial do Portal Acolher">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                <BrandLogo className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none tracking-wide uppercase">Acolher</span>
                <span className="text-brand-300 text-[10px] uppercase tracking-wider">Informação e Proteção</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
              <NavLink to="/">Início</NavLink>
              <NavLink to="/types">Tipos e Conceitos</NavLink>
              <NavLink to="/signs">Sinais</NavLink>
              <NavLink to="/help">Ajuda</NavLink>
              <NavLink to="/map">Atendimento</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </nav>

            {/* Desktop Utility / Emergency */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-6 w-px bg-brand-700" aria-hidden="true" />
              <a
                href="tel:190"
                aria-label="Ligar para a Polícia Militar pelo número 190"
                className="bg-alert hover:bg-alert-hover text-white text-sm font-bold px-4 py-2 rounded shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-900"
              >
                LIGAR 190
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-brand-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50">
            <nav className="flex flex-col py-2" aria-label="Navegação móvel">
              <NavLink to="/" mobile>Início</NavLink>
              <NavLink to="/types" mobile>Tipos e Conceitos</NavLink>
              <NavLink to="/signs" mobile>Sinais e Indícios</NavLink>
              <NavLink to="/help" mobile>Como Buscar Ajuda</NavLink>
              <NavLink to="/map" mobile>Rede de Atendimento</NavLink>
              <NavLink to="/legislation" mobile>Legislação e Direitos</NavLink>
              <NavLink to="/faq" mobile>Dúvidas Frequentes</NavLink>
            </nav>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <a
                href="tel:190"
                aria-label="Ligar para a Polícia Militar pelo número 190"
                className="block w-full bg-alert text-white text-center font-bold py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-alert focus:ring-offset-2"
              >
                LIGAR PARA 190
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="flex-1 pb-20 sm:pb-24 focus:outline-none">
        {children}
      </main>

      {/* Acesso persistente ao Ligue 180, em formato compacto para reduzir sobreposição de conteúdo. */}
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 print:hidden animate-fade-in">
        <a
          href="tel:180"
          aria-label="Ligar para a Central de Atendimento à Mulher pelo número 180"
          className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-brand-900 text-white p-2 sm:p-2.5 sm:pr-4 shadow-lg ring-2 ring-white hover:bg-brand-800 transition-colors focus:outline-none focus:ring-4 focus:ring-action focus:ring-offset-2"
        >
          <span className="bg-white text-brand-900 p-2 rounded-full shrink-0" aria-hidden="true">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
          </span>
          <span className="flex flex-col items-start pr-1">
            <span className="hidden sm:block text-[9px] font-bold uppercase tracking-wider text-brand-100">Central de Atendimento à Mulher</span>
            <span className="text-sm sm:text-base font-black leading-tight">LIGUE 180</span>
          </span>
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
                Portal de informação e proteção sobre violência doméstica, desenvolvido como produto de extensão universitária.
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
                <li><Link to="/privacy" className="hover:text-white hover:underline">Política de Privacidade</Link></li>
                <li><Link to="/about" className="hover:text-white hover:underline">Sobre o Projeto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-400">Links Oficiais</h4>
              <ul className="space-y-2 text-sm text-brand-100">
                <li>
                  <a href="https://www.gov.br/mulheres/pt-br/ligue180" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                    Ligue 180 — Ministério das Mulheres <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.cnj.jus.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                    Conselho Nacional de Justiça <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-500">
            <p>&copy; {new Date().getFullYear()} Portal Acolher. Todos os direitos reservados.</p>
            <p className="text-center md:text-right">As informações contidas neste site não substituem o atendimento jurídico, policial, de saúde ou assistência social.</p>
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
