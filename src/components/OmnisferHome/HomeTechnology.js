// import './HomeTechnology.css';
// import kneecap from '../assets/Omnisfer/kneecap_inarm.png';
// import { CheckCircle } from '@mui/icons-material';

// const features = [
//   'Ultra-compact motor architecture',
//   'Integrated cable management',
//   'Sub-millimeter repeatability',
//   'Industrial-grade materials',
// ];

// export default function HomeTechnology() {
//   return (
//     <section id="technology" className="home-technology">
//       <div className="home-container home-two-columns">
//         <div>
//           <p className="home-kicker">Technology</p>
//           <h2 className="home-section-title">
//             Precision is
//             <br />
//             our language.
//           </h2>
//           <p className="home-section-text">
//             Every component is designed, engineered and manufactured to exceed
//             the limits of modern robotics. Built for fluidity, reliability and
//             seamless integration.
//           </p>

//           <div className="home-feature-list">
//             {features.map((item) => (
//               <div key={item} className="home-feature-item">
//                 <CheckCircle sx={{ fontSize: 20, marginRight: '10px', color: 'var(--home-element)', flexShrink: 0 }} />
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="home-tech-visual-wrap">
//           {/* <div className="home-tech-visual">
//             <img
//               src={kneecap}
//               alt="Kneecap in Arm"
//             />
//           </div> */}
//           {/* <aside className="home-tech-note">
//             <p className="home-panel-label">Motion System</p>
//             <p className="home-note-title">Kneecap Motor</p>
//             <p>
//               A next-generation robotic articulation designed for omnidirectionnal fluid, silent
//               and continuous movement.
//             </p>
//           </aside> */}
//         </div>
//       </div>
//     </section>
//   );
// }


import './HomeTechnology.css';
// import kneecap from '../assets/Omnisfer/kneecap_inarm.png';
import { CheckCircle } from '@mui/icons-material';

const features = [
  'Ultra-compact motor architecture',
  'Integrated cable management',
  'Sub-millimeter repeatability',
  'Industrial-grade materials',
];

export default function HomeTechnology() {
  return (
    <section id="technology" className="home-technology">
      <div className="home-container home-two-columns">
        <div>
          <p className="home-kicker">Technology</p>
          <h2 className="home-section-title">
            Our
            <br />
            Innovation.
          </h2>
          <p className="home-section-text">
            The first omnidirectionnal robotic articulation with
            continuous 360 degree rotation and ultra-precise motion
            engineered for the next generation of intelligent machines.
          </p>

          <div className="home-feature-list">
            {features.map((item) => (
              <div key={item} className="home-feature-item">
                <CheckCircle sx={{ fontSize: 20, marginRight: '10px', color: 'var(--home-element)', flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-tech-visual-wrap">
          {/* <div className="home-tech-visual">
            <img
              src={kneecap}
              alt="Kneecap in Arm"
            />
          </div> */}
          {/* <aside className="home-tech-note">
            <p className="home-panel-label">Motion System</p>
            <p className="home-note-title">Kneecap Motor</p>
            <p>
              A next-generation robotic articulation designed for omnidirectionnal fluid, silent
              and continuous movement.
            </p>
          </aside> */}
        </div>
      </div>
    </section>
  );
}
