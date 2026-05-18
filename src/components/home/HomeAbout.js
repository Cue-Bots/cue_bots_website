import './HomeAbout.css';

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="home-container home-about-grid">
        <div>
          <p className="home-kicker">Engineered Motion</p>

          <h1 className="home-title">
            Where motion
            <br />
            becomes
            <br />
            natural.
          </h1>

          <p className="home-lead">
            Cue Bot develops advanced robotic systems and ultra-precise 360 degree
            articulations engineered for the next generation of intelligent
            machines.
          </p>

          <div className="home-hero-actions">
            <button className="home-btn home-btn-solid" type="button">
              Discover Technology
            </button>
            <button className="home-btn home-btn-outline" type="button">
              View Products
            </button>
          </div>
        </div>

        <div className="home-hero-card-wrap">
          <div className="home-hero-glow" />
          <article className="home-hero-card">
            <img
              src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1600&auto=format&fit=crop"
              alt="Robot"
              className="home-hero-image"
            />
            <div className="home-hero-gradient" />

            <div className="home-floating-ring">
              <div className="home-floating-ring-inner" />
            </div>

            <div className="home-hero-panel">
              <div className="home-hero-panel-top">
                <div>
                  <p className="home-panel-label">Articulation</p>
                  <p className="home-panel-title">A360 Core</p>
                </div>
                <div className="home-panel-right">
                  <p className="home-panel-label">Precision</p>
                  <p className="home-panel-value">+/-0.02 mm</p>
                </div>
              </div>
              <div className="home-panel-divider" />
              <div className="home-panel-bottom">
                <span>360 degree Continuous Rotation</span>
                <span>Silent Motion</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
