import { useState } from "react";
import "./about.styles.css";
import himall from "../../Images/aboutmee.JPEG";

const AboutComponent = () => {
  const [activeTab, setActiveTab] = useState("skills"); // Default active tab

  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={himall} alt="Himal" className="User" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">
              <h1>
                About <span>Me</span>
              </h1>
              <p>
                Hi there! Welcome to my portfolio. I go by the artist name Hope.
                Art has always been my passion, and I'm excited to share my
                journey with you. From a young age, l've been fascinated by the
                power of visuals to tell stories and evoke emotions. <br></br>
                <br></br>
                Over the years, this fascination has grown into a dedicated
                pursuit of creating art that not only captures the imagination
                but also connects with people on a personal level. Whether it's
                through intricate designs, vibrant characters, or immersive
                environments, I strive to bring ideas to life in unique and
                compelling ways. Here, you'll find a collection of my works,
                each piece a little step in my artistic adventure. Ilove
                creating art that tells a story and sparks imagination. I
                believe that art is a continuous journey of discovery, and I'm
                always eager to explore. <br></br> <br></br>Thanks for stopping
                by! I hope you enjoy exploring my creations as much as l enjoyed
                making them. Your feedback and thoughts are always welcome, as
                they help me grow and improve as an artist.
              </p>
            </h1>

            {/* Tab Titles */}
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>

            {/* Tab Contents */}
            {activeTab === "skills" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li>
                    <span>Photography</span>
                    <br /> Portraits/ Candid Moments
                  </li>
                  <li>
                    <span>Graphics Designing</span>
                    <br /> Digital Painting/ Logo Design
                  </li>
                  <li>
                    <span>Painting</span>
                    <br /> Oil Painting/ Sketch/ Portraits
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li>
                    <span>2022-2024</span>
                    <br /> Designer at JanaKala
                  </li>
                  <li>
                    <span>2020-2024</span>
                    <br /> Street Photography at Hope_art
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "education" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li>
                    <span>2022</span>
                    <br /> Lalitkala Campus
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
