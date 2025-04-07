import React, { useState, useEffect } from "react";
import "../styles/about.css";

const trustees = [
  {
    name: "Shri. T.S.R. Khannaiyann",
    title: "Founder & Chairman",
    institution: "Hindusthan Educational Institutions",
    image: "../public/Trustee/kan (1).png",
    about: "Is an Institution with a social concern. Our mission is to raise scientists and entrepreneurs to find solutions by developing products in the areas of food, water, health care, and energy with the best skills to solve the problems of Humanity.",
  },
  {
    name: "Smt. T.R.K Sarasuwathi",
    title: "Managing Trustee",
    institution: "Hindusthan Educational Institutions",
    image: "../public/Trustee/sar  (1).png",
    about: "Committed to academic excellence and research innovation, ensuring students achieve their full potential in an ever-evolving world.",
  },
  {
    name: "Dr.K.Priya",
    title: "Executive Trustee & Secretary",
    institution: "Hindusthan Engineering College",
    image: "../public/Priya_mam.jpg",
    about: "Dedicated to fostering industry-ready professionals, focusing on real-world applications and problem-solving.",
  },

  {
    name: "Er.K.Sakthivel",
    title: "Trustee",
    institution: "Hindusthan Engineering College",
    image: "../public/raja_sir.jpg",
    about: "Dedicated to fostering industry-ready professionals, focusing on real-world applications and problem-solving.",
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % trustees.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
  
    <div className="about-container">
      <div className="about-content">
        <div className="text-section fade-in">
          <p className="trustee-about">{trustees[index].about}</p>
          <h2 className="trustee-name">{trustees[index].name}</h2>
          <hr className="underline" />
          <p className="trustee-title">{trustees[index].title}</p>
          <p className="trustee-institution">{trustees[index].institution}</p>
        </div>
        <div className="image-section fade-in">
          <img src={trustees[index].image} alt={trustees[index].name} className="trustee-image" />
        </div>
      </div>
    </div>
  );
}
