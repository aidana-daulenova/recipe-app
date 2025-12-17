<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
>>>>>>> main
import App from './App.tsx'
import { Provider } from '@/components/ui/provider'

<<<<<<< HEAD
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
=======
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
>>>>>>> main
)
