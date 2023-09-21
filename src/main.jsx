import React from 'react'
import ReactDOM from 'react-dom/client'
import {store} from './store'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Typography from './styles/typography.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Typography/>
      <App />
    </Provider>
  </React.StrictMode>
);
