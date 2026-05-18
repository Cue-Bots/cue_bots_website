import './HomeStats.css';

const stats = [
  ['360 deg', 'Continuous Rotation'],
  ['+/-0.02mm', 'Precision'],
  ['<0.1 deg', 'Backlash'],
  ['Silent', 'Operation'],
];

export default function HomeStats() {
  return (
    <section className="home-stats" aria-label="Performance stats">
      <div className="home-container home-stats-grid">
        {stats.map(([value, label]) => (
          <article key={value} className="home-stat-item">
            <p className="home-stat-value">{value}</p>
            <p className="home-stat-label">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
