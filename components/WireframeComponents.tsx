import React from 'react';
import { LucideIcon } from 'lucide-react';

// --- Typography ---

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="mb-8 border-b border-gray-200 pb-4">
    <h2 className="text-3xl font-bold text-brand-900 tracking-tight">{children}</h2>
    {subtitle && <p className="text-brand-600 mt-2 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

// --- Layout Containers ---

export const PageContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
    {children}
  </div>
);

// --- Cards ---

export const Card: React.FC<{ 
  title?: string; 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void 
}> = ({ title, children, className = '', onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${onClick ? 'hover:shadow-md cursor-pointer hover:-translate-y-1' : ''} ${className}`}
  >
    {title && (
      <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50">
        <h3 className="font-semibold text-lg text-brand-900">{title}</h3>
      </div>
    )}
    <div className="p-6">{children}</div>
  </div>
);

// --- Buttons ---

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'alert' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  onClick,
  icon: Icon
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-900 text-white hover:bg-brand-800 focus:ring-brand-900",
    secondary: "bg-action text-white hover:bg-action-hover focus:ring-action",
    outline: "border-2 border-brand-900 text-brand-900 hover:bg-brand-50 focus:ring-brand-900",
    alert: "bg-alert text-white hover:bg-alert-hover focus:ring-alert shadow-md hover:shadow-lg",
    ghost: "text-brand-700 hover:bg-brand-100 hover:text-brand-900",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5 mr-2 -ml-1" />}
      {children}
    </button>
  );
};

// --- Visual Placeholders (High Fi) ---

export const InfoBox: React.FC<{ icon: LucideIcon; title: string; children: React.ReactNode; type?: 'info' | 'warning' | 'success' }> = ({ icon: Icon, title, children, type = 'info' }) => {
  const styles = {
    info: "bg-blue-50 text-blue-900 border-blue-100",
    warning: "bg-amber-50 text-amber-900 border-amber-100",
    success: "bg-green-50 text-green-900 border-green-100"
  };

  return (
    <div className={`p-4 rounded-lg border ${styles[type]} flex gap-4`}>
      <div className="shrink-0 mt-0.5">
        <Icon className="w-6 h-6 opacity-80" />
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
};

export const PlaceholderImage: React.FC<{ label: string; height?: string }> = ({ label, height = 'h-48' }) => (
  <div className={`w-full ${height} bg-brand-100 rounded-lg flex flex-col items-center justify-center text-brand-400 border-2 border-dashed border-brand-200`}>
    <span className="font-semibold text-sm uppercase tracking-wider">{label}</span>
  </div>
);