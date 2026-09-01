import './HomeHero.css';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import robotVideo from '../assets/Omnisfer/output.webm';
import robotReverseVideo from '../assets/Omnisfer/output_r.webm';

const logoContext = require.context('../assets/carrousel', false, /\.(png|jpe?g|svg|webp)$/i);

const logoEntries = logoContext.keys().sort().map((logoPath) => ({
  src: logoContext(logoPath),
  alt: logoPath.replace(/^\.\//, '').replace(/\.[^.]+$/, ''),
}));

function HomeHeroCarousel() {
  const carouselRef = useRef(null);
  const groupRef = useRef(null);
  const [groupWidth, setGroupWidth] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      setGroupWidth(groupRef.current?.getBoundingClientRect().width ?? 0);
      setCarouselWidth(carouselRef.current?.getBoundingClientRect().width ?? 0);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    if (groupRef.current) {
      resizeObserver.observe(groupRef.current);
    }

    window.addEventListener('resize', measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const repeatCount = useMemo(() => {
    if (!groupWidth || !carouselWidth) {
      return 2;
    }

    return Math.max(3, Math.ceil(carouselWidth / groupWidth) + 2);
  }, [carouselWidth, groupWidth]);

  const durationSeconds = useMemo(() => {
    if (!groupWidth) {
      return 24;
    }

    return Math.max(18, groupWidth / 28);
  }, [groupWidth]);

  return (
    <div className="homehero-carousel" ref={carouselRef}>
      <div
        className="homehero-carousel-track"
        style={{
          '--homehero-carousel-shift': `${groupWidth}px`,
          '--homehero-carousel-duration': `${durationSeconds}s`,
          opacity: groupWidth ? 1 : 0,
        }}
      >
        {Array.from({ length: repeatCount }).map((_, groupIndex) => (
          <div
            className="homehero-carousel-group"
            key={`homehero-carousel-group-${groupIndex}`}
            ref={groupIndex === 0 ? groupRef : undefined}
            aria-hidden={groupIndex > 0}
          >
            {logoEntries.map((logo) => (
              <img key={`${groupIndex}-${logo.alt}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeHero() {
  const videoRef = useRef(null);
  const reverseVideoRef = useRef(null);
  const videoPositionRef = useRef('start');
  const [isReverseVisible, setIsReverseVisible] = useState(false);
  const playbackModeRef = useRef('idle');

  const startReversePlayback = () => {
    const reverseVideo = reverseVideoRef.current;

    if (!reverseVideo) {
      return;
    }

    playbackModeRef.current = 'reverse';
    videoPositionRef.current = 'reverse';
    reverseVideo.currentTime = 0;
    setIsReverseVisible(true);

    const playPromise = reverseVideo.play();

    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        playbackModeRef.current = 'idle';
        videoPositionRef.current = 'end';
        setIsReverseVisible(false);
      });
    }
  };

  const startForwardPlayback = () => {
    const video = videoRef.current;

    if (!video || videoPositionRef.current !== 'start') {
      return;
    }

    playbackModeRef.current = 'forward';
    videoPositionRef.current = 'forward';
    setIsReverseVisible(false);

    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        videoPositionRef.current = 'start';
        playbackModeRef.current = 'idle';
      });
    }
  };

  useEffect(() => {
  const video = videoRef.current;
  const reverseVideo = reverseVideoRef.current; 

  if (!video) {
    return undefined;
  }

  const handleLoadedMetadata = () => {
    video.currentTime = 0;
    videoPositionRef.current = 'start';
  };

  const handleEnded = () => {
    if (playbackModeRef.current !== 'forward') {
      return;
    }

    videoPositionRef.current = 'end';
    playbackModeRef.current = 'idle';
  };

  const handleReverseEnded = () => {
    if (playbackModeRef.current !== 'reverse') {
      return;
    }

    if (reverseVideo) {
      reverseVideo.pause();
    }
    videoPositionRef.current = 'start';
    playbackModeRef.current = 'idle';
  };

  video.addEventListener('loadedmetadata', handleLoadedMetadata);
  video.addEventListener('ended', handleEnded);
  
  reverseVideo?.addEventListener('ended', handleReverseEnded);

  return () => {
    video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    video.removeEventListener('ended', handleEnded);
    
    reverseVideo?.removeEventListener('ended', handleReverseEnded);
  };
}, []);

  const handlePrimaryClick = (event) => {
    event.preventDefault();

    if (videoPositionRef.current === 'start') {
      startForwardPlayback();
    } else if (videoPositionRef.current === 'end') {
      startReversePlayback();
    }
  };

  return (
    <section className="homehero-section">
      <div className="homehero-background" aria-hidden="true">
        <video
          ref={videoRef}
          className={`homehero-background-video${isReverseVisible ? ' homehero-background-video--hidden' : ''}`}
          src={robotVideo}
          muted
          playsInline
          preload="auto"
        />
        <video
          ref={reverseVideoRef}
          className={`homehero-background-video homehero-background-video--reverse${isReverseVisible ? '' : ' homehero-background-video--hidden'}`}
          src={robotReverseVideo}
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="homehero-container homehero-grid">
        <div className="homehero-copy">
          <p className="homehero-kicker">Engineered Motion</p>

          <h1 className="homehero-title">
            MOTION.
            <br />
            &nbsp;&nbsp;&nbsp;REFINED.
          </h1>

          <p className="homehero-lead">
            Omnisfer develops advanced robotic systems and ultra-precise 360 degree
            articulations engineered for the next generation of intelligent
            machines.
          </p>

          <div className="homehero-actions">
            <button
              className="homehero-btn homehero-btn-primary"
              type="button"
              onClick={handlePrimaryClick}
            >
              Launch Robotic Arm
            </button>
            <a className="homehero-btn homehero-btn-secondary" type="button" href="ARC" >
              View ARC Motor
            </a>
          </div>
        </div>
      </div>

      <HomeHeroCarousel />
    </section>
  );
}
