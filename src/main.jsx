import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes';
import AuthProviders from './Providers/AuthProviders/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto font-serif'>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
    </div>
  </React.StrictMode>,
)
