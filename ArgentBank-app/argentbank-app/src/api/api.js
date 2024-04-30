// export const API_BASE_URL = 'http://localhost:3001/api/v1'; // Remplacez ceci par l'URL de votre API

// export const getUser = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/user/login`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch user data');
//     }
//     return await response.json();
//   } catch (error) {
//     throw new Error('Failed to fetch user data');
//   }
// };

// api.js

export const API_BASE_URL = 'http://localhost:3001/api/v1';

export const getUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(userData),
     
    });
    if (!response.ok) {
      throw new Error('Failed to login');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to login');
  }
};


// Implémentez d'autres fonctions d'API selon vos besoins
