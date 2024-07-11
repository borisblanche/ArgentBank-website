// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainNav from './components/main-nav/index.js'; 
// import Main from './components/main/index.js';
// // import SignInPage from './pages/sign-in/index.js';
// import UserPage from '../src/pages/userPage';
// import { Provider } from 'react-redux';
// import store from '../src/store.js';
// import SignInForm from '../src/components/signinform/index.js';
// // import { useNavigate} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchUser, logout } from './features/userSlice';


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   const handleLogin = (userData) => {
//     // Logique de connexion réussie
//     setIsLoggedIn(true);
//     setUserData(userData);
//     console.log(userData);
//   };

//   const handleLogout = () => {
//     // Logique de déconnexion réussie
//     localStorage.removeItem('token');
//     // navigate('/');
//     setIsLoggedIn(false);
//     setUserData(null);
//   };
//   return (
//     <Provider store={store}> 
//     <Router>
//     <MainNav isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} userData={userData} />
//       <Routes>
//       <Route path="/user" element={<UserPage userData={userData}/>} />
//           <Route path="/" element={<Main />} />
//           {/* <Route path="/sign-in" element={<SignInForm />} /> */}
//           <Route path="/sign-in" element={<SignInForm onLogin={handleLogin} />} />
//           {/* <Route path="/login" element={<SignInForm onLogin={handleLogin} />} /> */}
//       </Routes>
//       </Router>
//       </Provider>
//   );
// }

// export default App; 

// const App = () => {
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     await dispatch(fetchUser());
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <Provider store={store}>
//       <Router>
//         <MainNav />
//         <Routes>
//           <Route path="/user" element={<UserPage />} />
//           <Route path="/" element={<Main />} />
//           <Route path="/sign-in" element={<SignInForm onLogin={handleLogin} />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import MainNav from './components/main-nav';
// import Main from './components/main';
// import UserPage from './pages/userPage';
// import store from './store';
// import SignInForm from './components/signinform';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <MainNav />
//         <Routes>
//           <Route path="/user" element={<UserPage />} />
//           <Route path="/" element={<Main />} />
//           <Route path="/sign-in" element={<SignInForm />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import MainNav from './components/main-nav';
import Main from './components/main';
import UserPage from './pages/userPage';
import store from './store';
import SignInForm from './components/signinform';

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Provider store={store}>
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route 
            path="/sign-in" 
            element={isAuthenticated ? <Navigate to="/user" /> : <SignInForm />} 
          />
          <Route 
            path="/user" 
            element={isAuthenticated ? <UserPage /> : <Navigate to="/sign-in" />} 
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

