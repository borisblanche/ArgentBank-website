

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Importez votre composant racine de l'application
import Footer from './components/footer/index.js';
import './style/main.css';
import { Provider } from 'react-redux'; // Importez Provider depuis react-redux
import store from '../src/store.js'; // Importez votre store Redux

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App /> 
    <Footer />
    </React.StrictMode>
    </Provider>,
 
);
