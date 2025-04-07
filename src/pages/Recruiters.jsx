import React from "react";
import "../styles/Recruiters.css"; // Ensure this path is correct

// Import company logos
import company1 from "../assets/huawei.png";
import company2 from "../assets/ZOHO.png";
import company3 from "../assets/apple.png";
import company4 from "../assets/discord.png";
import company5 from "../assets/ibm.png";
import company6 from "../assets/microsoft.png";
import company7 from "../assets/oracle.png";

const recruiters = [company1, company2, company3, company4, company5, company6, company7];

const OurRecruiters = () => {
  return (
    <section id="our-recruiters">
      <h2 className="section-title">Our Recruiters</h2>
      <div className="recruiters-slider">
        <div className="slider-track">
          {recruiters.concat(recruiters).map((logo, index) => (
            <div className="recruiter" key={index}>
              <img src={logo} alt={`Recruiter ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRecruiters;
