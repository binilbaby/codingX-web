import React, { useRef, useState } from "react";
import section2OneStopSolution from "../Assets/one-stopunselected.png";
import section2OneStopSolutionSelected from "../Assets/group-14.png";
import section2InteractiveContent from "../Assets/group-12.png";
import section2BiteSizedContent from "../Assets/group-11.png";
import PhoneImage2 from "../Assets/group-9.png";
import PhoneImage3 from "../Assets/interactive-content.png";
import PhoneImage4 from "../Assets/bite-sized.png";
import PhoneImage5 from "../Assets/topic-covering.png";
import PhoneImage6 from "../Assets/exper-curated.png";
import PhoneImage7 from "../Assets/get-certified.png";
import section2InDepthTopicCoverage from "../Assets/group-9 (2).png";
import section2InDepthTopicCoverageSelected from "../Assets/indepthselected.png";
import section2ExpertCuratedCourses from "../Assets/group-15.png";
import section2ExpertCuratedCoursesSelected from "../Assets/expertcuratedselected.png";
import section2GetCertified from "../Assets/group-6.png";
import section2GetCertifiedSelected from "../Assets/getcertifiedselected.png";
import section2Img from "../Assets/group-16.png";
import section2InteractiveContentSelected from "../Assets/interactive-contentselected.png";
import section2BiteSizedContentSelected from "../Assets/bite-sizedselected.png";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMobileAlt, faBookOpen,faBook, faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons";

const sectiontwoimage = {
  backgroundImage: `url(${section2Img})`, // Set section2Img as the background
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "70vh",
  display: "flex", // Use flex display
  flexDirection: "column",
};

const Features = () => {
  const secondSectionRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState("ONE-STOP-SOLUTION-FO");
  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="features-container">
      <div
        className="second-section"
        style={sectiontwoimage}
        ref={secondSectionRef}
        id="features"
      >
        <div className="container">
          <div className="left-container">
            <div className="left-content-first">
              <span
                className={`ONE-STOP-SOLUTION-FO ${
                  selectedItem === "ONE-STOP-SOLUTION-FO" ? "selected" : ""
                }`}
                onClick={() => setSelectedItem("ONE-STOP-SOLUTION-FO")}
              >
                ONE-STOP SOLUTION FOR MULTIPLE COURSES
              </span>
              <img
                src={
                  selectedItem === "ONE-STOP-SOLUTION-FO"
                    ? section2OneStopSolutionSelected // Green version of the image
                    : section2OneStopSolution // White version of the image
                }
                className="section2OneStopSolution"
                onClick={() => setSelectedItem("ONE-STOP-SOLUTION-FO")}
              />
            </div>
            <div className="left-content-second">
              <span
                className={`INTERACTIVE-CONTENT ${
                  selectedItem === "INTERACTIVE-CONTENT" ? "selected" : ""
                }`}
                onClick={() => setSelectedItem("INTERACTIVE-CONTENT")}
              >
                INTERACTIVE CONTENT
              </span>
              <img
                src={
                  selectedItem === "INTERACTIVE-CONTENT"
                    ? section2InteractiveContentSelected 
                    : section2InteractiveContent 
                }
                className="section2InteractiveContent"
                onClick={() => setSelectedItem("INTERACTIVE-CONTENT")}
              />
            </div>
            <div className="left-content-third">
              <span
                className={`BITE-SIZED-CONTENT ${
                  selectedItem === "BITE-SIZED-CONTENT" ? "selected" : ""
                }`}
                onClick={() => setSelectedItem("BITE-SIZED-CONTENT")}
              >
                BITE-SIZED CONTENT
              </span>
              <img
                src={
                  selectedItem === "BITE-SIZED-CONTENT"
                    ? section2BiteSizedContentSelected // Green version of the image
                    : section2BiteSizedContent // White version of the image
                }
                className="section2BiteSizedContent"
                onClick={() => setSelectedItem("BITE-SIZED-CONTENT")}
              />
            </div>
          </div>
          <div className="center-container">
            <img
              src={
                selectedItem === "INTERACTIVE-CONTENT"
                  ? PhoneImage3
                  : selectedItem === "BITE-SIZED-CONTENT"
                  ? PhoneImage4
                  : selectedItem === "IN-DEPTH-TOPIC-COVER"
                  ? PhoneImage5
                  : selectedItem === "EXPERT-CURATED-COURS"
                  ? PhoneImage6
                  : selectedItem === "GET-CERTIFIED-BECO"
                  ? PhoneImage7
                  : PhoneImage2
              }
              alt="Coding-X"
              className="Group-9"
            />
            {/* Add the desired text below the Group-9 image */}
            <div className="mobile-text">
              <span
                onClick={() => selectItem("ONE-STOP-SOLUTION-FO")}
                className={
                  selectedItem === "ONE-STOP-SOLUTION-FO" ? "selected" : ""
                }
              >
                 <FontAwesomeIcon icon={faCode} className="icon" /> ONE-STOP SOLUTION FOR MULTIPLE COURSES
              </span>
              <span
                onClick={() => selectItem("INTERACTIVE-CONTENT")}
                className={
                  selectedItem === "INTERACTIVE-CONTENT" ? "selected" : ""
                }
              >
                <FontAwesomeIcon icon={faMobileAlt} className="icon" />  INTERACTIVE CONTENT
              </span>
              <span
                onClick={() => selectItem("BITE-SIZED-CONTENT")}
                className={
                  selectedItem === "BITE-SIZED-CONTENT" ? "selected" : ""
                }
              >
                <FontAwesomeIcon icon={faBookOpen} className="icon"/>  BITE-SIZED CONTENT
              </span>
              <span
                onClick={() => selectItem("IN-DEPTH-TOPIC-COVER")}
                className={
                  selectedItem === "IN-DEPTH-TOPIC-COVER" ? "selected" : ""
                }
              >
                <FontAwesomeIcon icon={faBook} className="icon"/>   IN-DEPTH TOPIC COVERAGE
              </span>
              <span
                onClick={() => selectItem("EXPERT-CURATED-COURS")}
                className={
                  selectedItem === "EXPERT-CURATED-COURS" ? "selected" : ""
                }
              >
                 <FontAwesomeIcon icon={faGraduationCap} className="icon"/> EXPERT-CURATED COURSES
              </span>
              <span
                onClick={() => selectItem("GET-CERTIFIED-BECO")}
                className={
                  selectedItem === "GET-CERTIFIED-BECO" ? "selected" : ""
                }
              >
                 <FontAwesomeIcon icon={faCertificate} className="icon"/> GET CERTIFIED & BECOME JOB READY
              </span>
            </div>
          </div>
          <div className="right-container">
            <div className="right-content-first">
              <img
                src={
                  selectedItem === "IN-DEPTH-TOPIC-COVER"
                    ? section2InDepthTopicCoverageSelected // Green version of the image
                    : section2InDepthTopicCoverage // White version of the image
                }
                className="section2InDepthTopicCoverage"
                onClick={() => setSelectedItem("IN-DEPTH-TOPIC-COVER")}
              />
              <span
                className={`IN-DEPTH-TOPIC-COVER ${
                  selectedItem === "IN-DEPTH-TOPIC-COVER" ? "selected" : ""
                }`}
                onClick={() => setSelectedItem("IN-DEPTH-TOPIC-COVER")}
              >
                IN-DEPTH TOPIC COVERAGE
              </span>
            </div>
            <div className="right-content-second">
              <img
                src={
                  selectedItem === "EXPERT-CURATED-COURS"
                    ? section2ExpertCuratedCoursesSelected
                    : section2ExpertCuratedCourses
                }
                className="section2ExpertCuratedCourses"
                onClick={() => setSelectedItem("EXPERT-CURATED-COURS")}
              />
              <span
                className={`EXPERT-CURATED-COURS ${
                  selectedItem === "EXPERT-CURATED-COURS" ? "selected" : ""
                }`}
                onClick={() => setSelectedItem("EXPERT-CURATED-COURS")}
              >
                EXPERT-CURATED COURSES
              </span>
            </div>
            <div className="right-content-third">
              <img
                src={
                  selectedItem === "GET-CERTIFIED-BECO"
                    ? section2GetCertifiedSelected
                    : section2GetCertified
                }
                className="section2GetCertified"
                onClick={() => setSelectedItem("GET-CERTIFIED-BECO")}
              />
              <span
                className={`GET-CERTIFIED-BECO ${
                  selectedItem === "GET-CERTIFIED-BECO" ? "selected" : ""
                }`}
                onClick={() => setSelectedItem("GET-CERTIFIED-BECO")}
              >
                GET CERTIFIED & BECOME JOB READY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
