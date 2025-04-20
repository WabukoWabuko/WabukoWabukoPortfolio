import { defineConfig } from 'vite';
       import react from '@vitejs/plugin-react';
       import ViteGhPages from 'vite-plugin-gh-pages';

       export default defineConfig({
         plugins: [react(), ViteGhPages],
         base: '/WabukoWabukoPortfolio/'
       });
