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
				main: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
				style: fileURLToPath(new URL('./src/styles/index.scss', import.meta.url)),
			},
			name: 'is-diabolo-lib'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
