import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/',

    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: ['3000-ivln8ehi753po7b9mdijy-e5434c3d.manusvm.computer', '3001-ivln8ehi753po7b9mdijy-e5434c3d.manusvm.computer'],
    },

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
