// api.js

const API_BASE_URL = 'http://localhost:3001/api/v1';

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

    const data = await response.json();
    localStorage.setItem('token', data.body.token); // Stocker le token dans le localStorage
    return data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token available');
    }

    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
      
    }

    const data = await response.json();
    console.log('getUser response:', data); // Log ici pour vérifier les données
    return data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};
