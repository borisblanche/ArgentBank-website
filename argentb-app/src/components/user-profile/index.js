import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserThunk } from '../../api/features/userSlice'; 

const UpdateUsername = () => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState('');
  const [message, setMessage] = useState('');
  const token = useSelector((state) => state.user.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(changeUserThunk({ token, newUsername })).unwrap();
      setMessage('Username successfully changed');
    } catch (error) {
      setMessage('Failed to change username');
    }
  };


  return (
    <div>
      <h2>Mettre à jour le nom d'utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nouveau nom d'utilisateur :
          <input 
            type="text" 
            value={newUsername} 
            onChange={(e) => setNewUsername(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Mettre à jour</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateUsername;
