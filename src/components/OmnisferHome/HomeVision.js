import './HomeVision.css';
import { Straighten, AcUnit, Palette, AutoAwesome } from '@mui/icons-material';

const values = [
  { label: 'Precision', icon: Straighten },
  { label: 'Fluidity', icon: AcUnit },
  { label: 'Industrial Elegance', icon: Palette },
  { label: 'Innovation', icon: AutoAwesome }
];

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
          Omnisfer creates robotic systems that disappear behind experience.
          Technology becomes fluid, silent and intuitive, engineered with the
          precision of industrial hardware and the elegance of timeless design.
        </p>

        <div className="home-tags">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className="home-tag">
                <Icon sx={{ fontSize: 16, marginRight: '6px' }} />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
