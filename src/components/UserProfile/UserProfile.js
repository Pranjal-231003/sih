import React from 'react';
import './UserProfile.css';
import Button from './Button'; // Import your button component

const UserProfile = () => {
  return (
    <div>
    <div className="profile-container">
      <div className="profile-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
          alt="User"
          className="user-avatar"
        />
      </div>
      <div className="profile-details">
        <div className="details">
        <p>Name: John Doe</p>
        <p>Email: qwerty@ghjkl.com</p>
        <p>Contact: 1234567890</p>
        <p>Extra details: jo bhi chaho</p>
        <p>Startup under your name:</p>
        </div>
      </div>
    </div>
    <Button/ >
    </div>
  );
};

export default UserProfile;
