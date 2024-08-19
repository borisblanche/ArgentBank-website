
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; 
import Footer from './components/footer';
import './style/main.css';
import { Provider } from 'react-redux'; 
import store from './store'; 


const rootElement = document.getElementById('root');


if (rootElement) {
  const root = createRoot(rootElement);
  
  
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