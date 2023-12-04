import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.scss'
import { Provider } from 'react-redux'
import { store } from "./app/store.ts"
import { BrowserRouter } from 'react-router-dom'
import Layout from './shared/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </Provider>
)
