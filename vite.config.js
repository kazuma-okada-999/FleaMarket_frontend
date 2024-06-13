import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
//   build: {
//     outDir: path.join(__dirname , '../'),
// }
  build: {
    outDir: path.join(__dirname , '../../fleaMarket/src/main/resources/static'),
}
})
