import './Home.css';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeHero from '../components/home/HomeHero';
import HomeAbout from '../components/home/HomeAbout';
import HomeStats from '../components/home/HomeStats';
import HomeTechnology from '../components/home/HomeTechnology';
import HomeProducts from '../components/home/HomeProducts';
import HomeVision from '../components/home/HomeVision';
import HomeContact from '../components/home/HomeContact';
import HomeFooter from '../components/home/HomeFooter';

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
