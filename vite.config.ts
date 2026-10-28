import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// 고객사 쇼핑몰(캣북스) 시연 화면. 포트 3000. .env는 이 레포 루트 것을 읽는다 (.env.example)
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { port: 3000, strictPort: true },
  preview: { port: 3000, strictPort: true },
})
