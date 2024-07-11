
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../features/userSlice';
// import { loginUser } from '../../api/api';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// const SignInForm = (props) => {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [error, setError] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleCheckboxChange = () => {
//     setRememberMe(!rememberMe);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Form submitted');
//     console.log('Remember me:', rememberMe);
//     try {
//       const userData = await loginUser({ email: userEmail, password: userPassword });
//       console.log('User data received:', userData);
//       if (userData && userData.body && userData.body.token) {
//         const token = userData.body.token;
//         console.log('Token received:', token);
//         localStorage.setItem('token', token);
//         console.log('Token stored in localStorage:', localStorage.getItem('token'));
//         dispatch(setUser(userData));
//         props.onLogin(userData);
//         navigate('/user');
//       } else {
//         throw new Error('Token not found in login response');
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <main className="main bg-dark">
//       <section className="sign-in-content">
//         <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
//         <h1>Sign in</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={userEmail}
//               onChange={(e) => setUserEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={userPassword}
//               onChange={(e) => setUserPassword(e.target.value)}
//             />
//           </div>
//           <div className="input-remember">
//             <input
//               type="checkbox"
//               id="remember-me"
//               checked={rememberMe}
//               onChange={handleCheckboxChange}
//             />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <button type="submit" className="sign-in-button">Sign In</button>
//           {error && <p>{error}</p>}
//         </form>
//       </section>
//     </main>
//   );
// };

// export default SignInForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../api/features/userAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignInForm = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
    console.log('Remember me:', rememberMe);
    try {
      await dispatch(loginUser({ email: userEmail, password: userPassword }));
      navigate('/user');
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
          {error && <p>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default SignInForm;

