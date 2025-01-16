import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { registerSW } from 'virtual:pwa-register'
import '../src/app/index.scss'


registerSW({ immediate: true })


createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
	</BrowserRouter>
)
 