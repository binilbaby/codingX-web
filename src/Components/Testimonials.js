import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import section3user1 from "../Assets/group-3 (2).png";
import section3user2 from "../Assets/group-5.png";
import section3user3 from "../Assets/group-5-copy.png";
import section2Img from "../Assets/group-16.png";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const sectiontwoimage = {
  backgroundImage: `url(${section2Img})`, // Set section2Img as the background
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex", // Use flex display
  flexDirection: "column",
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTab = useMediaQuery({ query: "(max-width: 880px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next), // Update the active index state on slide change
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          marginTop: "25px",
          borderRadius: "50%",
          backgroundColor: i === activeIndex ? "#6520ff" : "white", // Change the color based on the active state
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 879,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const thirdSectionRef = useRef(null);
  return (
    <div className="testimonials-container">
      {/* Third Section */}
      <div
        className="third-section"
        style={sectiontwoimage}
        ref={thirdSectionRef}
        id="testimonials"
      >
        <h1 class="WHAT-USERS-SAY-ABOUT">WHAT USERS SAY ABOUT US</h1>
        {isMobile || isTab ? (
          <Slider {...settings}>
            <div class="flexitem">
              <div class="img-container">
                <img
                  src={section3user1}
                  alt="Your Image"
                  class="section3user1"
                />
              </div>
              <h2 class="name">Frank Myers</h2>
              <span class="Student">Student, 22, USA </span>
              <span class="Path">
                <FontAwesomeIcon icon={faQuoteLeft} size="7x" />
              </span>
              <span class="description">
                Amazing App! Never seen before any educational app as good as
                this one. Every course is neatly organised. And the best part,
                you get to practice coding problems with an in-built compiler.
                Previous experience is not required as the courses are quite
                beginner-friendly!
              </span>
            </div>

            <div class="flexitem">
              <div class="img-container">
                <img
                  src={section3user2}
                  alt="Your Image"
                  class="section3user2"
                />
              </div>
              <h2 class="name">Michelle Anderson</h2>
              <span class="Student">Student, 23, Canada</span>
              <span class="Pathe">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="7x"
                  className="Path"
                />
              </span>
              <span class="description">
                It is easy to use for beginners. I would recommend this if you
                get bored too easily while reading any stuff. Visual
                representation of concepts makes it easy to recall. Programming
                can be difficult, but with this app, it gets easier and fun.
                Plus, all the basic languages are available here. Worth my time,
                without a doubt! Also, NO ADS at all. How cool is that!?
              </span>
            </div>

            <div class="flexitem">
              <div class="img-container">
                <img
                  src={section3user3}
                  alt="Your Image"
                  class="section3user3"
                />
              </div>
              <h2 class="name">Josh Pickett</h2>
              <span class="Student">Student, 22, Australia</span>
              <span class="Path">
                <FontAwesomeIcon icon={faQuoteLeft} size="7x" />
              </span>
              <span class="description">
                It's easy, simply designed, and has everything anyone could wish
                for in the world of IT. Also, ADHD APPROVED! I've been wanting
                to get into programming for a while now, and it's always been
                difficult for me to get into it. This app is helping me achieve
                a long-standing goal. Thank you!
              </span>
            </div>
          </Slider>
        ) : (
          <div class="flexbox">
            <div class="flexitem">
              <div class="img-container">
                <img
                  src={section3user1}
                  alt="Your Image"
                  class="section3user1"
                />
              </div>
              <h2 class="name">Frank Myers</h2>
              <span class="Student">Student, 22, USA </span>
              <span class="Path">
                <FontAwesomeIcon icon={faQuoteLeft} size="7x" />
              </span>
              <span class="description">
                Amazing App! Never seen before any educational app as good as
                this one. Every course is neatly organised. And the best part,
                you get to practice coding problems with an in-built compiler.
                Previous experience is not required as the courses are quite
                beginner-friendly!
              </span>
              {/* Here it is related to description */}
            </div>
            <div class="flexitem">
              <div class="img-container">
                <img
                  src={section3user2}
                  alt="Your Image"
                  class="section3user2"
                />
              </div>

              <h2 class="name">Michelle Anderson</h2>
              <span class="Student">Student, 23, Canada</span>
              <span class="Path">
                <FontAwesomeIcon icon={faQuoteLeft} size="7x" />
              </span>

              <span class="description">
                It is easy to use for beginners. I would recommend this if you
                get bored too easily while reading any stuff. Visual
                representation of concepts makes it easy to recall. Programming
                can be difficult, but with this app, it gets easier and fun.
                Plus, all the basic languages are available here. Worth my time,
                without a doubt! Also, NO ADS at all. How cool is that!?
              </span>
            </div>
            <div class="flexitem">
              <div class="img-container">
                <img
                  src={section3user3}
                  alt="Your Image"
                  class="section3user3"
                />
              </div>
              <h2 class="name">Josh Pickett</h2>
              <span class="Student">Student, 22, Australia</span>
              <span class="Path">
                <FontAwesomeIcon icon={faQuoteLeft} size="7x" />
              </span>

              <span class="description">
                It's easy, simply designed, and has everything anyone could wish
                for in the world of IT. Also, ADHD APPROVED! I've been wanting
                to get into programming for a while now, and it's always been
                difficult for me to get into it. This app is helping me achieve
                a long-standing goal. Thank you!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
