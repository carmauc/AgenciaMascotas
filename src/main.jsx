import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Servicios from './pages/Servicios.jsx'
import Index from './pages/Index.jsx'
import Layout from './pages/Layout.jsx'
import Kenell from './components/Kenell.jsx'
import './i18n.js'
import Contacto from './pages/Contacto.jsx'
import Cotizacion from './pages/Cotizacion.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Index/>
      },
      {
        path: '/servicios',
        element: <Kenell/>
      },
      {
        path: '/cotizacion',
        element: <Cotizacion/>
      },
      {
        path: '/contacto',
        element: <Contacto/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
