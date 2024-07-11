// // import { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// import FullName from '../user-fullname';
// import { useSelector } from 'react-redux'; // Importez useSelector depuis react-redux



// function MainNav({ isLoggedIn, onLogin, onLogout}) {
//   // const [UserFirstName,setUserFirstName] = useState('');
//   // console.log(userData.body.firstName);
//   const userData = useSelector((state) => state.user.userData);
//   console.log(userData);



//   // useEffect(() => {
//   //   // Mettre à jour le prénom de l'utilisateur lors du changement de userData
//   //   if (userData && userData.body && userData.body.firstName) {
//   //     setUserFirstName(userData.body.firstName);
//   //   }
//   // }, [userData]);


//   const handleSignOut = () => {
//     // Supprimer le token d'authentification du stockage local
//     localStorage.removeItem('token');
//      onLogout();
//     // window.location.href = '/';
//     // Mettre à jour l'état pour indiquer que l'utilisateur est déconnecté
//     // Ici, vous pouvez utiliser des hooks ou d'autres moyens pour gérer l'état de connexion
//   };
  
//   return (
    
//     <nav className="main-nav">
//       <Link to="/">
//         <div className="main-nav-logo">
//           <img
//             className="main-nav-logo-image"
//             src="./img/argentBankLogo.png"
//             alt="Argent Bank Logo"
//           />
//           <h1 className="sr-only">Argent Bank</h1>
//         </div>

//       </Link>
//       <div className="main-nav-item">
//         {isLoggedIn ? (
//           <Link to="/" onClick={handleSignOut}>
//             {/* <span>{UserFirstName}</span> */}
//             // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
//             {userData && userData.body && userData.body.firstName && (
//       <FullName firstName={userData.body.firstName} lastName={userData.body.lastName} /> )}
//             {/* <FullName firstName={userData.body.firstName} lastName={userData.body.lastName}/> */}
//              {/* <span>welcome firstName={userData && userData.body.firstName}</span> */}
//              <span>{userData?.body?.firstName}</span>

//             <FontAwesomeIcon icon={faRightFromBracket} />
//             Sign Out
//           </Link>
//         ) : (
//           <Link to="/sign-in" className="main-nav-item" onClick={ onLogin}>
//             <FontAwesomeIcon icon={faUserCircle}  />
//             Sign In
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default MainNav;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../api/features/userSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const MainNav = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userData = useSelector((state) => state.user.userData);
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
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
      </Link>
      {isAuthenticated ? (
        <>
          <Link to="/user"><FontAwesomeIcon icon={faUserCircle} /><span> {userData && userData.lastName}</span></Link>
         
          <Link to="/"className="main-nav-item"onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout</Link>
        </>
      ) : (
        <Link to="/sign-in"className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} /> Login</Link>
      )}
      {/* {user && <p>Welcome, {user.name}!</p>} */}
    </nav>
  );
};

export default MainNav;

