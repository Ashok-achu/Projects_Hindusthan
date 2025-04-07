import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import "../styles/icon.css";

const images = [
    "/icons/icon-1.jpeg",
    "/icons/icon-2.png",
    "/icons/icon-3.jpg",
    "/icons/icon-1.jpeg",
];

Modal.setAppElement("#root");

const IconsCarousel = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (index) => {
        setSelectedIndex(index);
        setModalIsOpen(true);
        document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = "auto"; // Restore background scroll
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    const modalSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: selectedIndex,
        arrows: true,
    };

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Our Proud Hindusthanian</h2>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="carousel-slide">
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="carousel-image"
                            onClick={() => openModal(index)}
                        />
                    </div>
                ))}
            </Slider>

            {/* Modal with Image Scrolling */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="image-modal"
                overlayClassName="overlay"
            >
                <button className="close-button" onClick={closeModal}>✖</button>
                <Slider {...modalSettings} className="modal-slider">
                    {images.map((src, index) => (
                        <div key={index} className="modal-slide">
                            <img src={src} alt={`Fullscreen ${index}`} className="modal-image" />
                        </div>
                    ))}
                </Slider>
            </Modal>
        </div>
    );
};

export default IconsCarousel;
