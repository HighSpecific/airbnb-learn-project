import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import App from '@/App'
import store from './store'

import 'normalize.css'
import '@/assets/css/index.less'
import theme from './assets/theme'

// @ => src: 配置webpack
// 问题：react脚手架隐藏webpack
// 解决一：npm run eject
// 解决二：craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  // </React.StrictMode>
)
