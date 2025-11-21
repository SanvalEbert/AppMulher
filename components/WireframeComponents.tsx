import React from 'react';
import { X } from 'lucide-react';

// A generic box placeholder for images/maps
export const WPlaceholder: React.FC<{ height?: string; label?: string; className?: string }> = ({ 
  height = 'h-32', 
  label = 'Imagem / Mídia',
  className = ''
}) => (
  <div className={`bg-gray-100 border-2 border-black flex flex-col items-center justify-center relative overflow-hidden ${height} ${className}`}>
    <X className="text-gray-300 w-full h-full absolute top-0 left-0 stroke-1" />
    <span className="relative z-10 bg-white px-2 border border-black text-xs font-bold uppercase tracking-wider">{label}</span>
  </div>
);

// A generic button wireframe
export const WButton: React.FC<{ children: React.ReactNode; primary?: boolean; className?: string }> = ({ 
  children, 
  primary = false,
  className = ''
}) => (
  <button className={`px-4 py-2 border-2 border-black font-bold text-sm uppercase transition-transform active:translate-y-0.5 ${
    primary ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'
  } ${className}`}>
    {children}
  </button>
);

// A generic input wireframe
export const WInput: React.FC<{ label: string; placeholder?: string; textarea?: boolean }> = ({ 
  label, 
  placeholder,
  textarea = false
}) => (
  <div className="flex flex-col gap-1 mb-4">
    <label className="font-bold text-xs uppercase">{label}</label>
    {textarea ? (
      <textarea 
        className="border-2 border-black p-2 min-h-[100px] bg-white resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder={placeholder}
      />
    ) : (
      <input 
        type="text" 
        className="border-2 border-black p-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder={placeholder}
      />
    )}
  </div>
);

// A generic card wireframe
export const WCard: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ 
  title, 
  children,
  className = ''
}) => (
  <div className={`bg-white border-2 border-black p-4 ${className}`}>
    {title && <h3 className="font-bold text-lg mb-2 border-b-2 border-black pb-1">{title}</h3>}
    {children}
  </div>
);

// Section Title
export const WTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2 mb-6">{children}</h2>
);