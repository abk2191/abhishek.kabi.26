function Contact() {
  return (
    <>
      <div className="Contact-container" style={{ color: "black" }}>
        <div className="whatsapp-container">
          <div className="whatsapp-contact-div">
            <i class="fa-brands fa-whatsapp"></i>
            <p>Send me a text on WhatsApp</p>
          </div>
          <button className="Whatsapp-button">
            <i class="fa-brands fa-whatsapp whatsapp-icon"></i>
            WhatsApp
          </button>
        </div>

        <div className="gmail-container">
          <div className="gmail-contact-div">
            <i class="fa-solid fa-at"></i>
            <p>Write me an Email</p>
          </div>
          <button className="gmail-button">
            <i class="fa-brands fa-google gmail-icon"></i>Gmail
          </button>
        </div>

        <div className="social-media-div">
          <i class="fa-brands fa-facebook"></i>
          <p>Follow me on social media</p>
        </div>
        <div className="social-media-icons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </>
  );
}

export default Contact;
