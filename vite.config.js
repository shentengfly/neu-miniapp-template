import { defineConfig } from 'vite'
import uni from '@neuxnet/vite-plugin-uni'
export default defineConfig({
  plugins: [
    uni()
  ],
})
