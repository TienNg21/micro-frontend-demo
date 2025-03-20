import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        products: {
          external: 'http://localhost:5001/assets/remoteEntry.js',
          from: 'vite',
          format: 'esm'
        },
        cart: {
          external: 'http://localhost:5002/assets/remoteEntry.js',
          from: 'vite',
          format: 'esm'
        }
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5000
  },
  preview: {
    port: 5000
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});