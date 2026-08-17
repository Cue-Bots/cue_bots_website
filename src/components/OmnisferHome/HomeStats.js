import './HomeStats.css';
import { Autorenew, Tune, Scale, VolumeOff } from '@mui/icons-material';

const stats = [
  ['Multi-axes', 'Continuous Rotation', Autorenew],
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
            {/* Nouveau conteneur pour aligner l'icône et la valeur */}
            <div className="home-stat-header">
              <Icon sx={{ fontSize: 32, color: 'var(--home-element)' }} />
              <p className="home-stat-value">{value}</p>
            </div>
            <p className="home-stat-label">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}