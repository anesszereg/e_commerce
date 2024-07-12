import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Women from './Pages/women.jsx'
import Men from './Pages/men.jsx'
import Settings from './Pages/Settings.jsx'



// setup react router dom :




const router = createBrowserRouter([

  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/home',
        element: <Home />
    
      },
      {
        path: 'app/Men',
        element: <Men />
    
    
      },
      
      {
        path: 'app/women',
        element: <Women />
    
    
      },
    ]
  },

  {
    path:'/Settings',
    element:<Settings/>

  }
 



])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
