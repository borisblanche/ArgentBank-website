// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getUser } from '../../api/api';
// import UserWelcome from '../../components/user-welcome';
// import UserCount from '../../components/user-count';
// import UserProfile from '../../components/user-profile';
// // import MainNav from '../../components/main-nav';

// function UserPage() {
//   const [userData, setUserInfo] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/login'); // Redirigez vers la page de connexion si aucun token n'est présent
//         return;
//       }

//       try {
//         const userData = await getUser(token);
//         setUserInfo(userData);
//       } catch (error) {
//         console.error('Failed to retrieve user information:', error);
//         navigate('/error');
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   return (
//     <div className="main bg-dark">
  
//       {userData ? (
//         <div className="header">
//           <UserWelcome userData={userData} />
//           <UserProfile userData={userData} />
//           <UserCount userData={userData} />
         
          
//         </div>
//       ) : (
//         <p>Loading user information...</p>
//       )}
//     </div>
//   );
// }

// export default UserPage;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../api/features/userAction'; // Assurez-vous que le chemin est correct
import UserWelcome from '../../components/user-welcome';
import UserCount from '../../components/user-count';
import UserProfile from '../../components/user-profile';

function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirigez vers la page de connexion si aucun token n'est présent
      return;
    }

    if (!isAuthenticated) {
      dispatch(fetchUser());
    }
  }, [dispatch, isAuthenticated, navigate]);

  return (
    <div className="main bg-dark">
      {userData ? (
        <div className="header">
          <UserWelcome userData={userData} />
          <UserProfile userData={userData} />
          <UserCount userData={userData} />
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserPage;


