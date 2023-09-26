import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
const queryClient = new QueryClient()

import {  
  QueryClient,
  QueryClientProvider,} from '@tanstack/react-query';
import Provider from './Authentication/Provider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider>
 <QueryClientProvider client={queryClient}>
      <div>
  <RouterProvider router={router} /></div>
  </QueryClientProvider>
 </Provider>
  </React.StrictMode>,
)
