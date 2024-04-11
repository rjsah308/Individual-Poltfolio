import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import Image from "next/image";
import defaultImage from "./profile.jpg";

const Profile = ({ title, content }) => {
  return (
    <div data-testid={'profile'} className="profile-d">
      <Image className = "profile-icon" src = {defaultImage} alt = "profile Icon" width = {400} height = {400} />
      <div className="profile-d-header">
        <h1 data-testid={'profileTitle'}>{title}</h1>
      </div>
      <p data-testid={'profileContent'}>{content}</p>
    </div>
  );
}

// PropTypes
Profile.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Profile;
