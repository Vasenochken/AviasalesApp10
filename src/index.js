import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import './index.scss'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
