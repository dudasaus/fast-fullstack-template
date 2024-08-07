import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src/styles'],
      },
    },
  },
  test: {
    environment: 'happy-dom',
  },
});
