import './HomeAbout.css';

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="home-container home-about-grid">
        <div className="home-hero-card-wrap">
          <div className="home-hero-glow" />
          <article className="home-hero-card">
            <div className="home-hero-gradient" />
          </article>
        </div>

        <div className="home-innov">
          <h1 className="home-title">
            Precision is
            <br />
            our language.
          </h1>

          <p className="home-lead">
            Every component is designed, engineered and manufactured to exceed
            the limits of modern robotics. Built for fluidity, reliability and
            seamless Plug & Play integration.
          </p>

          <div className="home-hero-actions">
            <button className="home-btn home-btn-solid" type="button">
              Discover
            </button>
            <button className="home-btn home-btn-outline" type="button">
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
