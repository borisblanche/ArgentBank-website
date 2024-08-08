import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../api/features/userSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



const MainNav = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.token !== null);
  const userData = useSelector((state) => state.user.user);
  console.log('MainNav userData:', JSON.stringify(userData, null, 2));

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className='main-nav'>
      
      <Link to="/">
      <div className="main-nav-logo">
  <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
      </Link>
      {isAuthenticated ? (
        <>
          <Link to="/user"><FontAwesomeIcon icon={faUserCircle} /><span> {userData && userData.userName}</span></Link>
         
          <Link to="/"className="main-nav-item"onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout</Link>
        </>
      ) : (
        <Link to="/login"className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} /> Login</Link>
      )}
     
    </nav>
  );
};

export default MainNav;

