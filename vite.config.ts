import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {ManifestOptions, VitePWA} from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> | false = {
	theme_color: '#ffffff',
	background_color: '#ffffff',
	icons: [
		{
			purpose: 'maskable',
			sizes: '512x512',
			src: 'icon512_maskable.png',
			type: 'image/png',
		},
		{
			purpose: 'any',
			sizes: '512x512',
			src: 'icon512_rounded.png',
			type: 'image/png',
		},
	],
	orientation: 'any',
	display: 'standalone',
	lang: 'ru',
	name: 'LightBuy',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({registerType: 'autoUpdate', workbox: {
    globPatterns: ['**/*.{html, css, js, icon, png, svg}']
  },
    manifest: manifest
})],
})
