import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserThunk } from '../../api/features/userSlice'; 
import UserWelcome from '../../components/user-welcome';
import UserAccount from '../../components/user-account';
import UserProfile from '../../components/user-profile';


function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.token !== null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (!userData) {
      dispatch(fetchUserThunk());
    }
  }, [dispatch, isAuthenticated, navigate, userData]);

  return (
    <div className="main bg-dark">
      {userData ? (
        <div className="header">
          <UserWelcome userData={userData} />
          <UserProfile userData={userData} />
          <h2 className="sr-only">Accounts</h2>
          <UserAccount title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance" />
          <UserAccount   title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance" />
          <UserAccount    title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"/>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserPage;

