import React from "react";
import { Link } from "react-router-dom";
import "../styles/campusLife.css";

const CampusLife = () => {
  return (
    <section className="campus-life">
      <h2 className="section-title">Experience the Vibrant Campus Life</h2>
      <div className="campus-grid">
        
        <Link to="/athletics" className="campus-card">
          <img src="../public/clg/sports.jpg" alt="Athletics & Fitness" />
          <div className="card-content">
            <h3>Athletics & Fitness</h3>
            <p>Explore world-class sports and fitness facilities on campus.</p>
          </div>
        </Link>

        <Link to="/housing" className="campus-card">
          <img src="../public/clg/hostel.jpg" alt="Housing & Dining" />
          <div className="card-content">
            <h3>Housing & Dining</h3>
            <p>Discover comfortable housing options and diverse dining facilities.</p>
          </div>
        </Link>

        <Link to="/arts" className="campus-card">
          <img src="../public/clg/hilaricus.JPG" alt="Art & Culture" />
          <div className="card-content">
            <h3>Art & Culture</h3>
            <p>Engage in rich traditions of creativity, drama, and cultural events.</p>
          </div>
        </Link>

        <Link to="/ncc" className="campus-card">
          <img src="../public/clg/NCC3.png" alt="ncc" />
          <div className="card-content">
            <h3>NCC</h3>
            <p>The National Cadet Corps (NCC) is a youth organization in India that promotes discipline, 
              leadership, and patriotism among students.</p>
          </div>
        </Link>

         <Link to="/transport" className="campus-card">
          <img src="../public/clg/hilaricus.JPG" alt="ncc" />
          <div className="card-content">
            <h3>Transportation</h3>
            <p>Safe, reliable, and comfortable transport for a hassle-free journey.</p>
          </div>
        </Link>

         <Link to="/ncc" className="campus-card">
          <img src="../public/clg/hilaricus.JPG" alt="ncc" />
          <div className="card-content">
            <h3>NCC</h3>
            <p>The National Cadet Corps (NCC) is a youth organization in India that promotes discipline, 
              leadership, and patriotism among students.</p>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default CampusLife;
