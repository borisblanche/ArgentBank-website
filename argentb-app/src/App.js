import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNav from './components/main-nav/index.js'; 
import Main from './components/main/index.js';
import SignInPage from './pages/sign-in/index.js';
import UserPage from '../src/pages/userPage';
import { Provider } from 'react-redux';
import store from '../src/store.js';



function App() {
  return (
    <Provider store={store}> 
    <Router>
        <MainNav />
      <Routes>
      <Route path="/user" element={<UserPage/>} />
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
      </Router>
      </Provider>
  );
}

export default App; 


