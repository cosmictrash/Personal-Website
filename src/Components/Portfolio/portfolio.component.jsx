import { useState } from "react";
import "./portfolio.styles.css";

import photo1 from "../../Images/ph1.png";
import photo2 from "../../Images/ph2.JPG";
import photo3 from "../../Images/ph3.JPG";
import photo4 from "../../Images/ph4.png";
import photo6 from "../../Images/ph6.JPG";
import da1 from "../../Images/da1.jpg";
import da2 from "../../Images/da2.jpg";
import da3 from "../../Images/da3.jpg";
import da4 from "../../Images/da4.jpg";
import da5 from "../../Images/da5.png";
import da6 from "../../Images/da6.jpg";
import a2 from "../../Images/a2.jpg";
import a4 from "../../Images/a4.JPEG";
import a6 from "../../Images/a6.jpg";

const PortfolioComponent = () => {
  const [activeTab, setActiveTab] = useState("photography");

  return (
    <div id="portfolio" className="portfolio">
      <div className="containerrr">
        <h1>
          My <span>Work</span>
        </h1>
      </div>

      <div id="tabs" className="tab-titles">
        <p
          className={`tab-links ${
            activeTab === "photography" ? "active-link" : ""
          }`}
          onClick={() => setActiveTab("photography")}
        >
          Photography
        </p>
        <p
          className={`tab-links ${activeTab === "design" ? "active-link" : ""}`}
          onClick={() => setActiveTab("design")}
        >
          Graphics Designs
        </p>
        <p
          className={`tab-links ${activeTab === "arts" ? "active-link" : ""}`}
          onClick={() => setActiveTab("arts")}
        >
          Paintings/Sketches
        </p>
      </div>

      {/* Tab Contents */}
      {activeTab === "photography" && (
        <div id="photography" className="tab-contents active-tab">
          <img src={photo1} alt="Photography 1" className="portfolio-image" />
          <img src={photo4} alt="Photography 4" className="portfolio-image" />
          <img src={photo6} alt="Photography 6" className="portfolio-image" />
          <img src={photo3} alt="Photography 3" className="portfolio-image" />
          <img src={photo2} alt="Photography 2" className="portfolio-image" />
        </div>
      )}

      {activeTab === "design" && (
        <div id="design" className="tab-contents active-tab">
          <img src={da2} alt="Design 2" className="portfolio-image" />
          <img src={da3} alt="Design 3" className="portfolio-image" />
          <img src={da5} alt="Design 5" className="portfolio-image" />
          <img src={da6} alt="Design 6" className="portfolio-image" />
        </div>
      )}

      {activeTab === "arts" && (
        <div id="arts" className="tab-contents active-tab">
          <img src={a2} alt="Art 2" className="portfolio-image" />
          <img src={a4} alt="Art 4" className="portfolio-image" />
          <img src={da4} alt="Design 4" className="portfolio-image" />
          <img src={da1} alt="Design 1" className="portfolio-image" />
          <img src={a6} alt="Art 6" className="portfolio-image" />
        </div>
      )}
    </div>
  );
};

export default PortfolioComponent;
