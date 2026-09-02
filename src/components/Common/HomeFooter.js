import './HomeFooter.css';
import { LinkedIn, Instagram, Email } from '@mui/icons-material';

export default function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="home-container home-footer-inner">
        <p>Copyright 2026 Cue Bot. Engineered Motion.</p>
        <nav className="home-footer-links" aria-label="Social links">
          <a href="#contact" title="LinkedIn"><LinkedIn sx={{ fontSize: 20 }} /></a>
          <a href="#contact" title="Instagram"><Instagram sx={{ fontSize: 20 }} /></a>
          <a href="#contact" title="Contact"><Email sx={{ fontSize: 20 }} /></a>
        </nav>
      </div>
    </footer>
  );
}
