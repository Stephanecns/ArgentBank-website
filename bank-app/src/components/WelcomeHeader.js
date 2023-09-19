import React, { useState } from 'react';
import UpdateUsernameForm from '../components/UpdateUsernameForm'; 
import { useSelector } from 'react-redux'; // importez useSelector

function WelcomeHeader() {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditButtonClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };
    // Utilisez useSelector pour obtenir le nom d'utilisateur depuis votre store Redux
    const userName = useSelector((state) => state.user.profile.userName);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName ? userName : "Profile"} {/* Affichez le nom d'utilisateur s'il est disponible, sinon affichez "Profile" */}
      </h1>
      <button className="edit-button" onClick={handleEditButtonClick}>
        Edit Name
      </button>
      {isEditing && <UpdateUsernameForm />}
    </div>
  );
}

export default WelcomeHeader;

      //Green code = oui 