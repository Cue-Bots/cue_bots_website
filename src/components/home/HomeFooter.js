import './HomeFooter.css';

export default function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="home-container home-footer-inner">
        <p>Copyright 2026 Cue Bot. Engineered Motion.</p>
        <nav className="home-footer-links" aria-label="Social links">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
