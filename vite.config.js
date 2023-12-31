import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/neumorphic-form/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@styles' : path.resolve(__dirname, './src/styles'),
    }
  }
})
