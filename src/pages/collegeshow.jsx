import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/collegeshow.css";

const images = [
  "../public/clg/hicet.jpg",
  "../public/clg/hostel.jpg",
  "../public/clg/NCC2.jpg",
  "../public/clg/sports.jpg",
  "../public/clg/NCC.jpg",
];

export default function CollegeShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="college-container">
      {/* Left: Auto-Sliding Image Carousel */}
      <div className="college-image">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="College"
            className="college-img"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Right: Static Text Content */}
      <motion.div 
        className="college-info"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <div className="section-heading">
    <h2>ABOUT HINDUSTHAN</h2>
    <span className="underline"></span> {/* Orange underline effect */}
  </div>
        <p className="college-description">
          Hindusthan Educational Institutions provide a world-class learning environment, fostering innovation and academic excellence across diverse fields of study.
          Ever since the inception, Hindusthan’s aim is to provide world class facilities and infrastructure in education and learning. We firmly believe in leading and not merely following the lot. 
          Setting new trends, introducing innovative training methodologies 
          and guiding our students towards the road to success is what we sincerely aim at and by inculcating quality education in promoting various types of Educational Institutions.
        </p>
      </motion.div>
    </div>
  );
}
