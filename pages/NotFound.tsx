import React from 'react';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../components/WireframeComponents';

const NotFound: React.FC = () => {
  return (
    <PageContainer className="min-h-[55vh] flex items-center justify-center">
      <section className="max-w-2xl w-full text-center bg-white rounded-2xl p-8 sm:p-10 shadow-sm" aria-labelledby="not-found-title">
        <p className="text-sm font-bold uppercase tracking-widest text-action mb-3">Erro 404</p>
        <h1 id="not-found-title" className="text-3xl sm:text-4xl font-bold text-brand-900 mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          O endereço acessado não existe ou pode ter sido alterado. Você pode retornar à página inicial ou consultar as orientações para buscar ajuda.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 py-3 font-semibold text-white hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2"
          >
            <HomeIcon size={18} aria-hidden="true" />
            Ir para o início
          </Link>
          <Link
            to="/help"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-900 px-5 py-3 font-semibold text-brand-900 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Como buscar ajuda
          </Link>
        </div>
      </section>
    </PageContainer>
  );
};

export default NotFound;
