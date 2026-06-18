import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DContextProvider } from '@dynamic-framework/ui-react';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.min.css';
import './theme/lv-theme.css';

import { App } from './app/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontro el nodo root para montar la aplicacion.');
}

createRoot(rootElement).render(
  <StrictMode>
    <DContextProvider>
      <App />
    </DContextProvider>
  </StrictMode>,
);
