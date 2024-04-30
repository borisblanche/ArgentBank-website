import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';

function SignInForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const userData = await loginUser({ email: userEmail, password: userPassword });
  //     console.log('Token received:', userData.token);
  //     localStorage.setItem('token', userData.token);
  //      console.log('Token stored in localStorage:', localStorage.getItem('token'));
  //     navigate('/user');
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await loginUser({ email: userEmail, password: userPassword });
      console.log('User data received:', userData);
      if (userData && userData.body && userData.body.token) {
        const token = userData.body.token;
        console.log('Token received:', token);
        localStorage.setItem('token', token);
        console.log('Token stored in localStorage:', localStorage.getItem('token'));
        navigate('/user');
      } else {
        throw new Error('Token not found in login response');
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default SignInForm;
