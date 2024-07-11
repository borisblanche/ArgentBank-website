import React from 'react';

const UserWelcome = ({ userData }) => {
  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome back, {userData.firstName} {userData.lastName}!</h1>
    </div>
  );
};

export default UserWelcome;
