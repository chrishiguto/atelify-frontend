import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Home from './routes'
import Materials from './routes/materials'
import Products from './routes/products'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/materials',
          element: <Materials />
        },
        {
          path: '/products',
          element: <Products />
        },
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
