import '../App.css';
import NavBar from '../components/nav_bar';
import FirstPage from '../components/fisrt_page';
import WaveGrid from '../components/WaveGrid';
import Describe from '../components/describe';
import Partner from '../components/Partner';
import Newletter from '../components/Newletter';
import Contact from '../components/Contact';

export default function OldPage() {
  return (
    <div id="acceuil" className="App">
      <header className="App-header">
        <section className="section dark-bg">
          <NavBar />
          <FirstPage />
        </section>
      </header>
      <div className="BackgroundWrapper">
        <WaveGrid />
      </div>
      <section className="section light-bg">
        <Describe />
      </section>
      <section className="section dark-bg">
        <Partner />
      </section>
      <section className="section dark-bg">
        <Newletter />
      </section>
      <section className="section dark-bg">
        <Contact />
      </section>
    </div>
  );
}