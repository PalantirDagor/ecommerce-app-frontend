import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { EcommerceApp } from './EcommerceApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EcommerceApp />
    </BrowserRouter>
  </React.StrictMode>
)
