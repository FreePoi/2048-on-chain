import '@rainbow-me/rainbowkit/styles.css';
import './polyfills';

import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from './contexts/ConfigContext';
import { WagmiProvider } from './contexts/WagmiContext';
import App from './App';
import { theme } from './theme';

const container = document.getElementById('root');

if (container) {
  const queryClient = new QueryClient();
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ConfigProvider>
              <WagmiProvider>
                <App />
              </WagmiProvider>
            </ConfigProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
