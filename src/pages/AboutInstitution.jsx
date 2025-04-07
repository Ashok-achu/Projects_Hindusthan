import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import "../styles/aboutinstitution.css";

const AboutInstitution = () => {
  return (
    <div className="container">
      <div className="grid">
        {/* Image Carousel */}
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <img
                src="./public/clg/hicet.jpg"
                alt="Institution 1"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-12.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-11.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-10.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-9.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-8.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-7.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-6.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-5.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-4.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./public/clg/student-7.jpg"
                alt="Institution 2"
                className="swiper-slide-img"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>

        {/* About Text */}
        <motion.div 
          className="about-text" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2>Life @ Hindusthan</h2>
          <p>
            Our institution is dedicated to providing world-class education with 
            state-of-the-art facilities and experienced faculty. We focus on holistic 
            development, ensuring our students excel in academics, research, and co-curricular 
            activities. Join us to embark on a journey of knowledge and innovation.
          </p>
          <button className="button-primary">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutInstitution;
