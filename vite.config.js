import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: process.env.NODE_ENV === 'production' ? '' : '/WabukoWabukoPortfolio/',
     build: {
       assetsDir: 'assets',
       outDir: 'dist',
     },
     server: {
    // Ensure SPA routing works by redirecting all requests to index.html
    historyApiFallback: true,
  },
   });

