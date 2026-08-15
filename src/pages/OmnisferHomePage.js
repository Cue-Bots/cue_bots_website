import './OmnisferHomePage.css';
import HomeNavbar from '../components/OmnisferHome/HomeNavbar';
import HomeHero from '../components/OmnisferHome/HomeHero';
import HomeAbout from '../components/OmnisferHome/HomeAbout';
import HomeStats from '../components/OmnisferHome/HomeStats';
import HomeTechnology from '../components/OmnisferHome/HomeTechnology';
import HomeProducts from '../components/OmnisferHome/HomeProducts';
import HomeVision from '../components/OmnisferHome/HomeVision';
import HomeContact from '../components/OmnisferHome/HomeContact';
import HomeFooter from '../components/OmnisferHome/HomeFooter';

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
