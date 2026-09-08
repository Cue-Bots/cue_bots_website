import { useEffect, useState } from 'react';
import HomePage from './pages/OmnisferHomePage';
import ARCPage from './pages/Test';
import BuildPage from './pages/BuildPage';
import NotFoundPage from './pages/NotFoundPage';
import CustomCursor from './components/Common/CustomCursor';
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

  let page;
  if (route === '/new') {
    page = <HomePage />;
  } else if (route === '/ARC') {
    page = <ARCPage />;
  } else if (route === '/') {
    page = <BuildPage />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <>
      <CustomCursor />
      {page}
    </>
  );
}

export default App;

