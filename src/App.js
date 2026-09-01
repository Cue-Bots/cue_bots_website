import { useEffect, useState } from 'react';
import HomePage from './pages/OmnisferHomePage';
import Old from './pages/OldPage';
import ARCPage from './pages/OmnisferARCPage';
import BuildPage from './pages/BuildPage';
import './App.css';

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  const bg = document.querySelector('.DynamicBackground');
  if (bg) {
    bg.style.transform = `translate(${x}%, ${y}%) scale(1.05)`;
  }
});


function getRoute() {
  return window.location.pathname || '/';
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (route === '/ARC') {
    return <ARCPage />;
  }
  if (route === '/new') {
    return <HomePage />;
  }
  if (route === '/old') {
    return <Old />;
  }

  return <BuildPage />;

}

export default App;

