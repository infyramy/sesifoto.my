import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(() => {
  const securityHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Cross-Origin-Opener-Policy': 'same-origin',
  };

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      headers: securityHeaders,
    },
    preview: {
      headers: securityHeaders,
    },
    plugins: [
      react(),
      viteCompression({ algorithm: 'gzip' }),
      viteCompression({ algorithm: 'brotliCompress' }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-icons': ['lucide-react']
          }
        }
      }
    },
    esbuild: {
      drop: ['console', 'debugger'] as ('console' | 'debugger')[],
    }
  };
});
