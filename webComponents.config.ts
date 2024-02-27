import { fileURLToPath, URL } from 'node:url'
import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		'process.env': process.env
	},
	plugins: [vue()],
	build: {
		emptyOutDir: false, // as we have multiple configs and multiple builds
		lib: {
			entry: {
				webComponents: fileURLToPath(new URL('./src/webComponents.ts', import.meta.url)),
			},
			name: 'is-diabolo-lib'
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
