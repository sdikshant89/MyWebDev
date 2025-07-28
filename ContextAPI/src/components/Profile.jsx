import React from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = React.useContext(UserContext);    
    if(!user) return <div>Please login to view your profile</div>;
  return (
    <div>
        Welcome
        User logged in:
        <h2>Username: {user.username}</h2>
    </div>
  )
}


export default Profile