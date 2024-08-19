const API_BASE_URL = 'http://localhost:3001/api/v1';

export const loginUser = async (userData) => {
  try {
    console.log('Sending user data:', userData);
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
       const errorText = await response.text();
      console.error('Login failed with status:', response.status, errorText);
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error('Failed to login');
  }
};

export const getUser = async (token) => {
  try {
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
    return data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};

export const changeUser = async (token, newUsername) => {
  try {
    if (!token) {
      throw new Error('No token available');
    }

    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: newUsername
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    console.log('Login successful:', data); 
    return data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};



