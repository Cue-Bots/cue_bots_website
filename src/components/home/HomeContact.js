import './HomeContact.css';

export default function HomeContact() {
  return (
    <section id="contact" className="home-contact">
      <div className="home-container">
        <div className="home-contact-card">
          <div className="home-contact-radial" aria-hidden="true" />
          <div className="home-contact-content">
            <div>
              <p className="home-kicker">Contact</p>
              <h2 className="home-section-title">
                Ready to move
                <br />
                the future?
              </h2>
              <p className="home-section-text">
                Let us build the next generation of intelligent robotic systems
                together.
              </p>
            </div>

            <form className="home-contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" aria-label="Your email" />
              <button className="home-btn home-btn-solid" type="submit">
                Contact Cue Bot
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
