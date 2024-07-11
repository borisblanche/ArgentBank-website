

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App'; // Importez votre composant racine de l'application
// import Footer from './components/footer/index.js';
// import './style/main.css';
// import { Provider } from 'react-redux'; // Importez Provider depuis react-redux
// import store from '../src/store.js'; // Importez votre store Redux

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//   <React.StrictMode>
//     <App /> 
//     <Footer />
//     </React.StrictMode>
//     </Provider>,
 
// );
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Importez votre composant racine de l'application
import Footer from './components/footer';
import './style/main.css';
import { Provider } from 'react-redux'; // Importez Provider depuis react-redux
import store from './store'; // Importez votre store Redux

// Sélectionnez l'élément root
const rootElement = document.getElementById('root');

// Assurez-vous que l'élément root existe avant de créer le root
if (rootElement) {
  const root = createRoot(rootElement);
  
  // Rendre l'application avec le store Redux fourni par Provider
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <Footer />
      </React.StrictMode>
    </Provider>
  );
} else {
  console.error('Failed to find the root element.');
}