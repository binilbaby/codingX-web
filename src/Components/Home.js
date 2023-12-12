import React, { useRef } from "react";
import { Navbar } from "./Navbar";
import "./Home.css";
import PhoneImage from "../Assets/homeimage.png";
import section1Img from "../Assets/bgimg.svg";
import section1ImgWeb from "../Assets/first-sectionbg.png";
import section1ImgTab from "../Assets/first-sectionbg2x.png";
import section1ImgPhone from "../Assets/first-sectionbg3x.png";
import { Link } from "react-router-dom";
import Features from "./Features"; // Import the Features component
import Testimonials from "./Testimonials"; // Import the Testimonials component
import Courses from "./Courses"; // Import the Courses component

export const Home = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);

  return (
    <div className="home-container">
      <Navbar
        scrollToFirstSection={() => firstSectionRef.current.scrollIntoView()}
        scrollToSecondSection={() => secondSectionRef.current.scrollIntoView()}
        scrollToThirdSection={() => thirdSectionRef.current.scrollIntoView()}
        scrollToFourthSection={() => fourthSectionRef.current.scrollIntoView()}
      />

      <div className="first-section" ref={firstSectionRef} id="home">
        <img src={PhoneImage} alt="Coding-X" className="Group-3" />
        <h2 className="Coding-X-A-New-Way">
          Coding X, A New Way to Learn Programming
        </h2>
        <div className="Rectangle">
          <a
            href="https://onelink.to/envh8k"
            class="download-link"
            target="_blank"
          >
            {" "}
            <span class="Download-Now">Download Now</span>
          </a>
        </div>
      </div>
      <Features />
      <Testimonials />
      <Courses />
      <footer>
        <div className="footer-content">
          <div className="lineone">
            <div>
              <Link to="/privacy-policy" className="Privacy-Policy">
                Privacy Policy
              </Link>{" "}
              /{" "}
              <Link to="/terms" className="Legal">
                Terms
              </Link>
            </div>
          </div>
          <div className="-Rightsol-Pvt-Ltd">© Rightsol Pvt. Ltd. 2022</div>
        </div>
      </footer>
    </div>
  );
};
