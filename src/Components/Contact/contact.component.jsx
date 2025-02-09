import { useEffect } from "react";
import "./contact.styles.css";

const ContactComponent = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyFkKT_H5HufTDIfZsnTA3LQ1TlDMratBeHCEVFhLT_ihaz4KukrkIBi9Fmt2SnqmB1/exec";

    const form = document.querySelector("form[name='submit-to-google-sheet']");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Success!", response);
            alert("Form submitted successfully!");
          })
          .catch((error) => console.error("Error!", error.message));
      });
    }
  }, []);

  return (
    <div id="contact" className="contact">
      <div className="containerrrr">
        <div className="row">
          <div className="contact-left">
            <h1>
              Contact <span>Me</span>
            </h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i>{" "}
              contact@himalandhimal@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-square-phone"></i> +977-9840807160
            </p>
            <div className="social-icons">
              <a
                href="https://www.pinterest.com/hope_art811/?invite_code=1d0d6a4a35ff453fb8f854f91da44313&sender=590675444786036452"
                target="_blank"
              >
                <i class="fa-brands fa-pinterest"></i>
              </a>
              <a
                href="https://www.instagram.com/hope_art811?igsh=MW00bzgxZW40Z2Izdg%3D%3D"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              ></input>
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              ></input>
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" class="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © Himalkhatiwada.com.np</p>
      </div>
    </div>
  );
};

export default ContactComponent;
