import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/footer.css";

const achievementImages = [
  "/assets/achievement1.png",
  "/assets/achievement2.png",
  "/assets/achievement3.png",
];

const Footer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % achievementImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><strong>Office:</strong> +91 422 2930 021</p>
          <p><strong>Email:</strong> info@hindusthan.net</p>
          <p><strong>Address:</strong> Hindusthan Campus, Avinashi Road, Coimbatore, Tamil Nadu, India - 641028.</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Hindusthan College of Engineering & Technology</a></li>
            <li><a href="#">Hindusthan College of Arts & Science</a></li>
            <li><a href="#">Hindusthan Institute of Technology</a></li>
            <li><a href="#">Hindusthan School of Architecture</a></li>
            <li><a href="#">Hindusthan School of Allied Health Sciences</a></li>
            <li><a href="#">Hindusthan College of Nursing</a></li>
            <li><a href="#">Hindusthan College of Science and Commerce</a></li>
            <li><a href="#">Hindusthan Matriculation Hr.Sec School</a></li>
            <li><a href="#">Hindusthan International School</a></li>
          </ul>
        </div>

        {/* Achievements & Location Section */}
        <div className="footer-section">
          <h3>Achievements</h3>
          <img
            src={achievementImages[currentImageIndex]}
            alt="Achievement"
            className="achievement-img"
          />
          <h3>Location:</h3>
          <iframe
            title="Hindusthan Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125323.14608737563!2d76.91117651048809!3d11.012471689460254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba858371d414649%3A0xb98090c138022aef!2sHindusthan%20Gardens%2C%20Avinashi%20Rd%2C%20behind%20Nava%20India%20Road%2C%20Coimbatore%2C%20Tamil%20Nadu%20641028!3m2!1d11.012482799999999!2d76.99357839999999!5e0!3m2!1sen!2sin!4v1742458837940!5m2!1sen!2sin"
            width="400"
            height="250"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Hindusthan Group of Institutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
