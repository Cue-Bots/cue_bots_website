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
import kneecap from '../assets/arm_bot.png';

export default function HomeHero() {
  return (
    <section className="homehero-section">
      <div className="homehero-container homehero-grid">
        <div className="homehero-copy">
          <p className="homehero-kicker">Engineered Motion</p>

          <h1 className="homehero-title">
            Where motion
            <br />
            becomes
            <br />
            natural.
          </h1>

          <p className="homehero-lead">
            Cue Bot develops advanced robotic systems and ultra-precise 360 degree
            articulations engineered for the next generation of intelligent
            machines.
          </p>

          <div className="homehero-actions">
            <button className="homehero-btn homehero-btn-primary" type="button">
              Discover Technology
            </button>
            <button className="homehero-btn homehero-btn-secondary" type="button">
              View Products
            </button>
          </div>
        </div>

        <div className="homehero-visual-wrap">
          <div className="homehero-glow" />
          <img src={kneecap} alt="Robot" className="homehero-image" />
        </div>
      </div>
    </section>
  );
}
