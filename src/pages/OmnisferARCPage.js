import '../App.css';
import HomeNavbar from '../components/Common/HomeNavbar.js';
import WaveGrid from '../components/MotorARCPage/OmnisferWaveGrid.js';
import ARC from '../components/MotorARCPage/OmnisferARC.js';

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