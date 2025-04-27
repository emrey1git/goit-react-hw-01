// src/SocialMedia/App.jsx
import React from "react";
import Profile from "./Profile";
import userData from "./userData.json";  // JSON dosyasından veriyi import et

const App = () => (
  <Profile
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
  />
);

export default App;
