import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/main.css';
import MainNav from './components/main-nav/index.js'; 
import Main from './components/main/index.js';
import Footer from './components/footer/index.js';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignInPage from './pages/sign-in/index.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainNav />
    {/* <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sign-in" component={SignInPage} />
      </Switch> */}
    <Main />
    <Footer/>
  </React.StrictMode>
);


