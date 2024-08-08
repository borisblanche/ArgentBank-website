import React from 'react';

const FullName = ({ firstName, lastName }) => {
  return (
    <span>
      {firstName} {lastName}
    </span>
  );
}

export default FullName;