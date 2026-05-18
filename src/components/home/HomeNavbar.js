import './HomeNavbar.css';
import logo from '../assets/logo_line.png';


export default function HomeNavbar() {
  return (
    <header className="home-navbar">
      <div className="home-container home-navbar-inner">
        <div className="home-brand">
          <img src={logo} alt="Logo Cue Bot" className="home-nav-logo" />
        </div>

        <nav className="home-nav-links" aria-label="Main navigation">
          <a href="#technology">Technology</a>
          <a href="#products">Products</a>
          <a href="#vision">Vision</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="home-btn home-btn-outline" type="button">
          Talk to us
        </button>
      </div>
    </header>
  );
}
