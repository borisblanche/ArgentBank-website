import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import MainNav from './components/main-nav';
import Main from './components/main';
import UserPage from './pages/userPage';
import store from './store';
import SignInForm from './components/signinform';
import { fetchUserThunk } from '../src/api/features/userSlice'; // Assurez-vous que le chemin est correct

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainNav />
        <AppRoutes />
      </Router>
    </Provider>
  );
};

const AppRoutes = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.token !== null);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserThunk());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/user" /> : <SignInForm />} 
      />
      <Route 
        path="/user" 
        element={isAuthenticated ? <UserPage /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
};

export default App;



