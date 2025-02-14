import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {ManifestOptions, VitePWA} from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> | false = {
	theme_color: 'currentColor',
	background_color: 'rgb(15, 23, 42)',
	icons: [
		{
			purpose: 'maskable',
			sizes: '512x512',
			src: 'app-maska.png',
			type: 'image/png',
		},
		{
			purpose: 'any maskable',
			sizes: 'any',
			src: 'app-maska.png',
			type: 'image/png',
		},
	],
	orientation: 'any',
	display: 'standalone',
	lang: 'ru',
	name: 'LightBuy',
	short_name: 'LightBuy',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({registerType: 'autoUpdate', workbox: {
    globPatterns: ['**/*.{html, css, js, icon, png, svg}']
  },
    manifest: manifest
})],
})
