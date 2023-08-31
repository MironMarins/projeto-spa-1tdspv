import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../aula-rotas/src/components/Home.jsx';
import Produtos from '../aula-rotas/src/components/Produtos.jsx';
import EditarProduto from '../aula-rotas/src/components/EditarProduto.jsx';
import Error from '../aula-rotas/src/components/Error.jsx';

const router = createBrowserRouter([
  {path:"/", element:<App/>,errorElement: <Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/", element:<Produtos/>},
    {path:"/", element:<EditarProduto/>}
    
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


