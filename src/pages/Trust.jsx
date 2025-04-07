import "../styles/trust.css";
import logo from "../assets/logo.png";
import khannaiyann from "../assets/Trustee/kan (1).png";
import sarasuwathi from "../assets/Trustee/sar  (1).png";
import priya from "../assets/Trustee/priya.png";
import sakthivel from "../assets/Trustee/t (1).png";

const Trust = () => {
  return (
    <section className="trust-section">
      <h2>About the Trust</h2>
      <p>
        Hindusthan Educational and Charitable Trust (HECT) was established in
        1992 to serve the underprivileged. Today, it has grown into a major
        educational hub with 11 institutions across Coimbatore.
        The Management has always stood by its commitment to the betterment of the student community and had at first established itself as a 
        brand in the field of Education has reigned supreme with the ‘Life Time Education Achievement Award’ for 
        giving back to society. The Management believes in quality and has set new trends/ innovative training
         methodologies in all its Institutions that will assist students towards the road to success.
         HINDUSTHAN has traversed the path of rapid development in education, along with the nation, often responding positively to changed needs and at times initiating significant changes. 
         We have evolved in twenty-six years by overcoming tough hurdles set more by limitations of thinking in that era, rather than lack of ability, 
         to arrive at a point where we can explore the vastness of knowledge and possibilities on the global canvas.
      </p>

      {/* Block Section */}
      <div className="trust-block-container">
      <h2>About the Trust</h2>
        <div className="trust-block">
        
          <img src={khannaiyann} alt="Shri. T.S.R. Khannaiyann" />
          <h3>Shri. T.S.R. Khannaiyann</h3>
          <p>
          Shri. T.S.R. Khannaiyann hails from an Agricultural family and groomed himself into a dynamic Entrepreneur under the able guidance and encouragement of his well-wishers. In the early 70s, he started his career as a trader of Electro Mechanical Equipment and had a keen desire to serve a greater purpose in the business and started the Transformer manufacturing industry at Coimbatore; very soon he became leader in the Transformer Industry. Thereafter, he expanded the Hindusthan Group of Companies into various diversified fields, from Electrical to Electronics, Computer to Chemical and Mechanical Engineering.

Shri. T.S.R.Khannaiyann did his best and has wrought miracles in the lives of all those around. After achieving his best in the industry - to serve the poor, needy and down trodden he laid the stones for Hindusthan Educational and Charitable Trust in the year 1992. Shri.T.S.R.Khannaiyann assists, guides, channelizes, and monitors the Trust with amazing skill and prudence, backed by his astounding managerial acumen. His every step proved that he is a visionary.

Shri.T.S.R.Khannaiyann has a personal calling that is unique as a fingerprint, and with his service mindedness, and dedication to this cause; he governs Hindusthan Empire. In support of this calling he had, beside his the support of His wife Smt. T.R.K Sarasuwathi, his son Er. K. Sakthivel and daughter Dr.K.Priya, the three dynamic forces who have paved the way for the expansion of the institutions under his Chairmanship and follows his foot path to make this group as a conglomerate.

He is always working towards his thirst of

“Bringing the best in the industry to this Competitive world".
          </p>
        </div>

        <div className="trust-block">
          <img src={sarasuwathi} alt="Smt. T.R.K Sarasuwathi" />
          <h3>Smt. T.R.K Sarasuwathi</h3>
          <p>
            A strong pillar of support, she has been instrumental in social
            welfare initiatives, scholarships, and eco-friendly projects.
          </p>
        </div>

        <div className="trust-block">
          <img src={priya} alt="Dr. K. Priya" />
          <h3>Dr. K. Priya</h3>
          <p>
            An educational leader with a doctorate in management, committed to
            elevating Hindusthan Institutions to global standards.
          </p>
        </div>

        <div className="trust-block">
          <img src={sakthivel} alt="Er. K. Sakthivel" />
          <h3>Er. K. Sakthivel</h3>
          <p>
            A young engineer and dynamic administrator, dedicated to
            revolutionizing youth education and institutional growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
