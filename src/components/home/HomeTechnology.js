import './HomeTechnology.css';

const features = [
  'Ultra-compact motor architecture',
  'Integrated cable management',
  'Sub-millimeter repeatability',
  'Industrial-grade materials',
];

export default function HomeTechnology() {
  return (
    <section id="technology" className="home-technology">
      <div className="home-container home-two-columns">
        <div>
          <p className="home-kicker">Technology</p>
          <h2 className="home-section-title">
            Precision is
            <br />
            our language.
          </h2>
          <p className="home-section-text">
            Every component is designed, engineered and manufactured to exceed
            the limits of modern robotics. Built for fluidity, reliability and
            seamless integration.
          </p>

          <div className="home-feature-list">
            {features.map((item) => (
              <div key={item} className="home-feature-item">
                <span className="home-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-tech-visual-wrap">
          <div className="home-tech-visual">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
              alt="Technology"
            />
          </div>
          <aside className="home-tech-note">
            <p className="home-panel-label">Motion System</p>
            <p className="home-note-title">A360</p>
            <p>
              A next-generation robotic articulation designed for fluid, silent
              and continuous movement.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
