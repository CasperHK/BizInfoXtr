import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@dialogs': path.resolve(__dirname, '../dialogs'),
    },
  },
});
