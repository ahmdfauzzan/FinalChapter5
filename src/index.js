import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'
import { RouterList } from './routes/RouterList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';

const queryMovie = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
    <QueryClientProvider client={queryMovie}>
      
      <RouterList/>
      
    </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

