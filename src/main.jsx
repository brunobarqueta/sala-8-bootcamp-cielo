import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {store} from './store'
import { Provider } from 'react-redux'
import Typography from './styles/typography.js'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <Typography/>
        <App />
    </Provider>
  </React.StrictMode>
);
