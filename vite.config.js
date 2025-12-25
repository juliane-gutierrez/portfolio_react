import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss() ],
  //I'm adding an alias "@" in the resolve valeu to avoid calling components by using ./../components, instead I'll use @//
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //imported path above to direct to the components/src folder, @ is representing the source folder//
    },
  },
});
