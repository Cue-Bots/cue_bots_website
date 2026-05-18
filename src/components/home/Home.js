import './Home.css';
import HomeNavbar from './HomeNavbar';
import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeStats from './HomeStats';
import HomeTechnology from './HomeTechnology';
import HomeProducts from './HomeProducts';
import HomeVision from './HomeVision';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-bg-overlay" aria-hidden="true">
        <div className="home-radial" />
        <div className="home-divider" />
      </div>

      <HomeNavbar />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeStats />
        <HomeTechnology />
        <HomeProducts />
        <HomeVision />
        <HomeContact />
      </main>
      <HomeFooter />
    </div>
  );
}
