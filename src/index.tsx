import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import * as serviceWorker from './serviceWorker'
import configureStore from './reducers/configureStore'
import { theme } from './utils'
import App from './pages/app'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
