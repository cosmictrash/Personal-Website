import { Component } from "react";
import "./services.styles.css";

const ServicesComponent = () => {
  return (
    <div id="services" className="services">
      <div className="containerr">
        <h1>
          My <span>Services</span>
        </h1>
        <div className="services-list">
          <div>
            <i class="fa-solid fa-camera-retro"></i>
            <h2>Photography</h2>
            <p>
              I find beauty in the raw, unscripted moments of everyday life.
              Capturing candid street portraits, especially around the vibrant
              streets of Patan, has been my way of preserving stories through
              photography. Whether it’s the expressive faces of people, soulful
              portraits, or the untamed spirit of animals, my camera is always
              by my side, ready to freeze fleeting moments in time. With years
              of experience behind the lens, photography isn’t just a
              passion—it’s a way of seeing the world.
            </p>
            <a href="#tabs">Learn More</a>
          </div>

          <div>
            <i class="fa-solid fa-palette"></i>
            <h2>Painting/Sketching</h2>
            <p>
              A pencil, a brush, and years of experience—that's all I need to
              transform a blank canvas into a masterpiece. I specialize in
              sketching people with intricate details and painting animals with
              a touch of realism and emotion. My passion for art drives me to
              create pieces that capture the essence of my subjects, ensuring
              each artwork stands out. Whether you need a portrait, an artistic
              interpretation, or a custom painting, I offer exceptional services
              to meet your artistic needs.
            </p>
            <a href="#tabs">Learn More</a>
          </div>
          <div>
            <i class="fa-regular fa-file-image"></i>
            <h2>Graphics Designing</h2>
            <p>
              Designing has been my passion for years, and I love bringing ideas
              to life through creative visuals. Whether it’s a bold and stylish
              logo, an eye-catching poster, or any other graphic design work, I
              focus on making designs that stand out. I believe every design
              should tell a story, and I work closely with clients to make sure
              their vision comes to life. If you need professional and creative
              designs, I’m here to help!
            </p>
            <a href="#tabs">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
