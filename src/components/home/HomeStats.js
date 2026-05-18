import './HomeStats.css';
import { Autorenew, Tune, Scale, VolumeOff } from '@mui/icons-material';

const stats = [
  ['360 deg', 'Continuous Rotation', Autorenew],
  ['+/-0.02mm', 'Precision', Tune],
  ['<0.1 deg', 'Backlash', Scale],
  ['Silent', 'Operation', VolumeOff],
];

export default function HomeStats() {
  return (
    <section className="home-stats" aria-label="Performance stats">
      <div className="home-container home-stats-grid">
        {stats.map(([value, label, Icon]) => (
          <article key={value} className="home-stat-item">
            <Icon sx={{ fontSize: 32, marginBottom: '12px', color: '#00d9ff' }} />
            <p className="home-stat-value">{value}</p>
            <p className="home-stat-label">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
