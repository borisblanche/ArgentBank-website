
import React, { useState } from 'react';
import { changeUser } from '../../api/api'; // Assurez-vous que le chemin est correct

const UpdateUsername = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await changeUser(username);
      setMessage('Nom d\'utilisateur mis à jour avec succès');
      console.log('Response:', response);
    } catch (error) {
      setMessage('Erreur lors de la mise à jour du nom d\'utilisateur');
      console.error('Error:', error.message);
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
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
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
