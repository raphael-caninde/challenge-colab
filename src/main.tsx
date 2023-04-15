import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AppProvider } from './context/AppContext';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
