import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/course.css";

const courseCategories = {
  UG: [
    "BBA", "BBA Business Analytics", "BBA CA/Logistics",
    "Biotechnology (UG)", "Catering Sci. & Hotel Mgt.",
    "Commerce - B.Com & B.Com PA", "Commerce - IB (UG)",
    "Commerce - IT/BI", "Commerce - CS & AF",
    "Commerce with Computer Applications (UG)", "Computer Applications (BCA)",
    "Computer Science (UG)", "Computer Science with CGS and AIML",
    "Corporate Secretaryship & AF", "Costume Design & Fashion (UG)",
    "Cyber Security", "Electronics (UG)", "English (UG)",
    "F.P.Tech.", "IT (UG)", "Language", "Mathematics (UG)",
    "Microbiology (UG)", "Physical Education", "Physics (UG)",
    "Social Work", "Visual Communication (UG)", "Animation / B.Voc",
    "Data Science & Analytics", "Psychology", "Electronics and Instrumentation Engineering",
    "Aeronautical Engineering", "Agricultural Engineering", "Biomedical Engineering",
    "Civil Engineering", "Chemical Engineering", "Food Technology",
    "Computer Science and Engineering", "Electronics and Communication Engineering",
    "Information Technology", "Artificial Intelligence and Machine Learning",
    "Electrical and Electronics Engineering", "Automobile Engineering",
    "Mechanical Engineering", "Mechatronics Engineering"
  ],
  PG: [
    "Biotechnology (PG)", "Commerce - IB (PG)", "Commerce with Computer Applications (PG)",
    "Computer Science (PG)", "Costume Design & Fashion (PG)", "Electronics (PG)",
    "English (PG)", "IT (PG)", "Mathematics (PG)", "MBA", "MCA",
    "Microbiology (PG)", "Physics (PG)", "Visual Communication (PG)"
  ],
  Research: [
    "Ph.D. in Computer Science", "Ph.D. in Electronics", "Ph.D. in Management"
  ],
};

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState("UG");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courseCategories[selectedCategory].filter((course) =>
    course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="course-container">
      {/* Title */}
      <motion.h2 
        className="course-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Courses
      </motion.h2>

      {/* Category Dropdown & Search */}
      <motion.div 
        className="filters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <option value="UG">Undergraduate (UG)</option>
          <option value="PG">Postgraduate (PG)</option>
          <option value="Research">Research</option>
        </motion.select>
        
        <motion.input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-box"
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Course List */}
      <div className="course-grid">
        <AnimatePresence>
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              className="course-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)" }}
            >
              <Link to={`/courses/${course.replace(/\s+/g, "-").toLowerCase()}`}>
                {course}
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Course;
