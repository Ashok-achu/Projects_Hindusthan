import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <section className="home-section">
      <video className="background-video" autoPlay loop muted>
        <source src="./src/assets/hindusthan.MP4" type="video/mp4" />
      </video>
      <div className="overlay">
        
      </div>
    </section>
  );
};

export default Home;
