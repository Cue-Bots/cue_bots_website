import './App.css';
import NavBar from './components/nav_bar'
import FirstPage from './components/fisrt_page'
// import bgfisrt from './components/assets/background.png'
// import ParticleBackground from './components/pointbg'
// import ParticleField from './components/ParticleField';
import WaveGrid from './components/WaveGrid';
import Quisuisje from './components/Quisuisje'
import NowState from './components/NowState'
import CV from './components/CV'
import Citation from './components/Citation';
import Portefolio from './components/portefolio'
import Contact from './components/Contact'

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  const bg = document.querySelector('.DynamicBackground');
  if (bg) {
    bg.style.transform = `translate(${x}%, ${y}%) scale(1.05)`;
  }
});


function App() {
  return (
    <div id="acceuil" className="App">
      <header  className="App-header">
        <NavBar></NavBar>
        <FirstPage></FirstPage>
      </header>
      <div className="BackgroundWrapper">
        {/* <img src={bgfisrt} alt="background" className="DynamicBackground"/> */}
        <WaveGrid></WaveGrid>
      </div>
      <Quisuisje></Quisuisje>
      <NowState></NowState>
      <CV></CV>
      <Citation></Citation>
      <Portefolio></Portefolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
