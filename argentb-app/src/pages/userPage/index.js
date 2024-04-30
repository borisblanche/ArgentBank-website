import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/api';

function UserPage() {
  const [userData, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); // Redirigez vers la page de connexion si aucun token n'est présent
        return;
      }

      try {
        const userData = await getUser(token);
        setUserInfo(userData);
      } catch (error) {
        console.error('Failed to retrieve user information:', error);
        navigate('/error');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      <h1>User Information</h1>
      {userData ? (
        <div>
          <p>Prenom: {userData.body.firstName}</p>
          <p>Nom: {userData.body.lastName}</p>
          <p>Email: {userData.body.email}</p>
          <p>créé le: {userData.body.updatedAt}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserPage;




