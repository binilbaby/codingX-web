import React, { useState, useRef, useEffect } from "react";
import section4course1 from "../Assets/c-ximage.png";
import section4course2 from "../Assets/group-18.png";
import section4course3 from "../Assets/group-19.png";
import section2Img from "../Assets/group-16.png";
import newcourseimage from "../Assets/newcourse1.png";
import newcourseimage2 from "../Assets/newcourse2.png";
import "./Courses.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sectiontwoimage = {
  backgroundImage: `url(${section2Img})`, // Set section2Img as the background
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex", // Use flex display
  flexDirection: "column",
};

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '8%',
         
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '4%',
         
        },
      }
    ],
  };
  // Define your courses and state for controlling the displayed courses here
  const courses = [
    {
      name: "HACKER X",
      description:
        "Learn Cybersecurity, online vulnerabilities to become a Certified Ethical Hacker",
      image: newcourseimage,
      link: "https://onelink.to/hackerx",
    },
    {
      name: "PYTHON X",
      description:
        "Learn Python, web design to become a Certified Python Developer",
      image: section4course3,
      link : "https://onelink.to/b7b53n",
    },
    {
      name: "C X",
      description:
        "Learn C, enhance logical reasoning to become a Certified Game Developer",
      image: section4course1,
      link : " https://play.google.com/store/apps/details?id=c.learnc.learn.cx.coding.programming.c.tutorials.codingx",
    },
    {
      name: "JAVA X",
      description:
        "Learn Java, create amazing software to become a Certified Java Developer",
      image: section4course2,
      link : " https://onelink.to/d9rgrf",
    },
    {
      name: "C++ X",
      description:
        "Learn C++ , enhance logical reasoning to become a Certified Software Developer",
      image: newcourseimage2,
      link : " https://play.google.com/store/apps/details?id=cpp.learncpp.learn.cppx.coding.cprogramming.cpp.tutorials.codingx",
    },
  ];

  const fourthSectionRef = useRef(null);

  return (
    <div className="courses-container">
      <div
        className="fourth-section"
        style={sectiontwoimage}
        ref={fourthSectionRef}
        id="courses"
      >
        <h1 className="EXPLORE-OUR-COURSES">EXPLORE OUR COURSES</h1>
        <div className="slider-wrapper">
        <Slider {...settings}>
            {courses.map((course, index) => (
              <a href={course.link} key={index} className="image-item" target="_blank" rel="noopener noreferrer">
                <img src={course.image} alt={`Image ${index + 1}`} />
                <div className="image-text">
                  <span className="COURSE-X">{course.name}</span>
                  <span className="Learn-Cybersecurity">
                    {course.description}
                  </span>
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Courses;
