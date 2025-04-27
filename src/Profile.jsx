import React from 'react';
import './Profile.css'; // isteğe bağlı, stil için

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="profile__description">
        <img src={image} alt="User avatar" className="profile__avatar" />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="profile__stats">
        <li className="profile__stats-item">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="profile__stats-item">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="profile__stats-item">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
