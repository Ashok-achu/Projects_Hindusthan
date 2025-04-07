import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faMap, faGraduationCap, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../styles/runningcounter.css"; // Ensure CSS file is correctly linked

const Runningcounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <section id="running-counter" ref={ref}>
      <div className="counter-container">
        <div className="counter-item">
          <FontAwesomeIcon icon={faLandmark} className="icon" />
          <h2>
            {inView && <CountUp start={0} end={27} duration={5} />}
          </h2>
          <p>Years</p>
        </div>
        <div className="counter-item">
          <FontAwesomeIcon icon={faMap} className="icon" />
          <h2>
            {inView && <CountUp start={0} end={720} duration={5} />}
          </h2>
          <p>Acres</p>
        </div>
        <div className="counter-item">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <h2>
            {inView && <CountUp start={0} end={20000} duration={5} />}
          </h2>
          <p>Students</p>
        </div>
        <div className="counter-item">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <h2>
            {inView && <CountUp start={0} end={500} duration={5} />}
          </h2>
          <p>Faculty</p>
        </div>
      </div>
    </section>
  );
};

export default Runningcounter;
