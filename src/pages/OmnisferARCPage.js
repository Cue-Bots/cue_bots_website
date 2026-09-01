import '../App.css';
import HomeNavbar from '../components/OmnisferHome/HomeNavbar';
import WaveGrid from '../components/OmnisferHome/OmnisferWaveGrid.js';
import ARC from '../components/OmnisferHome/OmnisferARC.js';

export default function OldPage() {
  return (
    <div className="ARC-page">
      <header className="ARC-header">
        <HomeNavbar />
        <ARC />
      </header>
      <main>
        <div className="ARC-BackgroundWrapper">
        <WaveGrid />
      </div>
      </main>
    </div>
  );
}