// import './homescreenHero.css';
// import kneecap from '../assets/kneecap.png';

// export default function homescreenHero() {
//   return (
//     <section className="homescreen-hero">
//       <div className="homescreen-container homescreen-hero-grid">
//         <div>
//           <p className="homescreen-kicker">Engineered Motion</p>

//           <h1 className="homescreen-title">
//             Where motion
//             <br />
//             becomes
//             <br />
//             natural.
//           </h1>

//           <p className="homescreen-lead">
//             Cue Bot develops advanced robotic systems and ultra-precise 360 degree
//             articulations engineered for the next generation of intelligent
//             machines.
//           </p>

//           <div className="homescreen-hero-actions">
//             <button className="homescreen-btn homescreen-btn-solid" type="button">
//               Discover Technology
//             </button>
//             <button className="homescreen-btn homescreen-btn-outline" type="button">
//               View Products
//             </button>
//           </div>
//         </div>

//         <div className="homescreen-hero-card-wrap">
//           <div className="homescreen-hero-glow" />

//           <img src={kneecap} alt="Kneecap" className="homescreen-hero-image" />

          
//         </div>
//       </div>
//     </section>
//   );
// }



import './HomeHero.css';
// import kneecap from '../assets/arm_bot.png';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import robotVideo from '../assets/Omnisfer/video_robot.mp4';

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
  const reverseFrameRef = useRef(null);
  const hoverRef = useRef(false);
  const playbackModeRef = useRef('idle');
  const reachedVideoEndRef = useRef(false);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const stopReversePlayback = () => {
    if (reverseFrameRef.current !== null) {
      cancelAnimationFrame(reverseFrameRef.current);
      reverseFrameRef.current = null;
    }
  };

  const finishPlayback = () => {
    stopReversePlayback();
    playbackModeRef.current = 'idle';
    setIsVideoActive(false);
  };

  const startReversePlayback = (startTime) => {
    const video = videoRef.current;
    const safeStartTime = Number.isFinite(startTime) ? startTime : video?.currentTime;

    if (!video || !Number.isFinite(safeStartTime) || safeStartTime <= 0) {
      finishPlayback();
      return;
    }

    stopReversePlayback();
    playbackModeRef.current = 'reverse';
    setIsVideoActive(true);

    video.pause();
    video.currentTime = Math.min(safeStartTime, video.duration || safeStartTime);

    const stepReverse = () => {
      if (playbackModeRef.current !== 'reverse') {
        return;
      }

      const nextTime = Math.max(0, video.currentTime - 1 / 30);

      const handleSeeked = () => {
        if (playbackModeRef.current !== 'reverse') {
          return;
        }

        if (nextTime <= 0) {
          finishPlayback();
          return;
        }

        reverseFrameRef.current = requestAnimationFrame(stepReverse);
      };

      video.addEventListener('seeked', handleSeeked, { once: true });
      video.currentTime = nextTime;
    };

    reverseFrameRef.current = requestAnimationFrame(stepReverse);
  };

  const startForwardPlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    hoverRef.current = true;
    reachedVideoEndRef.current = false;
    stopReversePlayback();
    playbackModeRef.current = 'forward';
    setIsVideoActive(true);

    try {
      if (Number.isFinite(video.duration) && video.duration > 0 && video.currentTime >= video.duration - 0.05) {
        video.currentTime = 0;
      } else if (video.currentTime <= 0) {
        video.currentTime = 0;
      }
    } catch {
      // The video can be a frame behind while metadata loads; playback still works.
    }

    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        finishPlayback();
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const handleEnded = () => {
      if (playbackModeRef.current !== 'forward') {
        return;
      }

      if (hoverRef.current) {
        reachedVideoEndRef.current = true;
        playbackModeRef.current = 'idle';
        setIsVideoActive(true);
        return;
      }

      startReversePlayback(video.currentTime);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePrimaryEnter = () => {
    hoverRef.current = true;
    setIsPrimaryHovered(true);
    startForwardPlayback();
  };

  const handlePrimaryLeave = () => {
    hoverRef.current = false;
    setIsPrimaryHovered(false);

    if (playbackModeRef.current === 'forward' || (playbackModeRef.current === 'idle' && reachedVideoEndRef.current && isVideoActive)) {
      startReversePlayback(videoRef.current?.currentTime ?? 0);
    }
  };

  const handlePrimaryFocus = () => {
    handlePrimaryEnter();
  };

  const handlePrimaryBlur = () => {
    handlePrimaryLeave();
  };

  useEffect(() => () => stopReversePlayback(), []);

  return (
    <section className={`homehero-section ${isVideoActive ? 'homehero-section--video-active' : ''}`}>
      <div className="homehero-background" aria-hidden="true">
        <video
          ref={videoRef}
          className="homehero-background-video"
          src={robotVideo}
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
              className={`homehero-btn homehero-btn-primary ${isPrimaryHovered ? 'homehero-btn-primary--hovered' : ''}`}
              type="button"
              onMouseEnter={handlePrimaryEnter}
              onMouseLeave={handlePrimaryLeave}
              onFocus={handlePrimaryFocus}
              onBlur={handlePrimaryBlur}
            >
              Discover Technology
            </button>
            <button className="homehero-btn homehero-btn-secondary" type="button">
              View Products
            </button>
          </div>
        </div>
      </div>

      <HomeHeroCarousel />
    </section>
  );
}
