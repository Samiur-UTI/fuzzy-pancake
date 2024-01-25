import React from 'react';
import './HomePage.css'; // Make sure to create this CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <img src='./home-logo.svg' alt="App Logo" className="home-logo"/>
      <div className="home-details">
        <h1>Welcome to Our Social Media Scheduler</h1>
        <p>Easily post and schedule your content on Facebook, Instagram, YouTube, and TikTok.</p>
      </div>
    </div>
  );
};

export default HomePage;
