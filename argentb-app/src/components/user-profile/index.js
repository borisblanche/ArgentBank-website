import React, { useState } from 'react';
// import UserFirstName from '../user-firstName'

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };


  const formStyle = {
    height: '50px',
    width: 'auto',
    borderRadius: '25px',
    frontSize:'35px'
    
  }
  return (
    <div>
        {/* <h1>{firstName}</h1> */}
      {isEditing ? (
        <form >
          {/* Champ d'entrée pour le nouveau nom d'utilisateur */}
          <input style={formStyle} type="text" placeholder="Nouveau nom d'utilisateur" />
          {/* Bouton de sauvegarde pour soumettre le formulaire */}
          <button style={formStyle} type="submit">Sauvegarder</button>
        </form>
      ) : (
        // Bouton "Modifier" pour afficher le formulaire de modification
        <button class="edit-button" onClick={handleEditClick}>Modifier</button>
      )}
    </div>
  );
}

export default UserProfile;