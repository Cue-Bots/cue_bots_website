import './HomeVision.css';

const values = ['Precision', 'Fluidity', 'Industrial Elegance', 'Innovation'];

export default function HomeVision() {
  return (
    <section id="vision" className="home-vision">
      <div className="home-container home-vision-inner">
        <p className="home-kicker">Vision</p>
        <h2 className="home-section-title home-vision-title">
          The future of robotics
          <br />
          should feel natural.
        </h2>
        <p className="home-vision-text">
          Cue Bot creates robotic systems that disappear behind experience.
          Technology becomes fluid, silent and intuitive, engineered with the
          precision of industrial hardware and the elegance of timeless design.
        </p>

        <div className="home-tags">
          {values.map((item) => (
            <span key={item} className="home-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
