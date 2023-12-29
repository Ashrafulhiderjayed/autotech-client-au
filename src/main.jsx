import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Reoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode style={{overflowX: 'hidden'}}>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
