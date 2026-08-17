import './HomeProducts.css';
import { CircleTwoTone, WidgetsTwoTone, PrecisionManufacturingTwoTone, NavigateNextTwoTone } from '@mui/icons-material';

// import kneecap from '../assets/Omnisfer/kneecap_shop.png';
// import kneecapHover from '../assets/Omnisfer/kneecap_D.png';
// import Claw from '../assets/Omnisfer/Claw2_shop.png';
// import ClawHover from '../assets/Omnisfer/Claw2_D.png';
// import botkit from '../assets/Omnisfer/homescreen_light_shop.png';
// import botkitHover from '../assets/Omnisfer/homescreen_light_shop_D.png';

import kneecap from '../assets/Omnisfer/kneecap_D.png';
import kneecapHover from '../assets/Omnisfer/kneecap_shop.png';
import Claw from '../assets/Omnisfer/Claw2_D.png';
import ClawHover from '../assets/Omnisfer/Claw2_shop.png';
import botkit from '../assets/Omnisfer/homescreen_light_shop_D.png';
import botkitHover from '../assets/Omnisfer/homescreen_light_shop.png';

const products = [
  {
    title: 'Arc Motors & Movements',
    subtitle: 'Articulation',
    icon: CircleTwoTone,
    image: kneecap,
    imageHover: kneecapHover,
  },
  {
    title: 'Accesories',
    subtitle: 'Additionnal Module',
    icon: WidgetsTwoTone,
    image: Claw,
    imageHover: ClawHover,
  },
  {
    title: 'Complete Solution',
    subtitle: 'Robotic Arm',
    icon: PrecisionManufacturingTwoTone,
    image: botkit,
    imageHover: botkitHover,
  },
];

export default function HomeProducts() {
  return (
    <section id="products" className="home-products">
      <div className="home-container">
        <div className="home-products-header">
          <div>
            <p className="home-kicker">Products</p>
            <h2 className="home-section-title">
              Robotic systems
              <br />
              designed to perform.
            </h2>
          </div>
          <p className="home-products-text">
            Designed for advanced industrial automation, research labs and
            next-generation intelligent machines.
          </p>
        </div>

        <div className="home-products-grid">
          {products.map((product) => (
            <article key={product.title} className="home-product-card">
              <div className="home-product-image-wrap">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="home-product-image img-default" 
                />
                <img 
                  src={product.imageHover} 
                  alt={`${product.title} alternate`} 
                  className="home-product-image img-hover" 
                />
              </div>
              
              <div className="home-product-body">
                <div>
                  <product.icon sx={{ fontSize: 32, marginBottom: '8px', color: 'var(--home-element)' }} />
                  <h3>{product.title}</h3>
                  <p>{product.subtitle}</p>
                </div>
                <div className="home-product-arrow" aria-hidden="true"><NavigateNextTwoTone sx={{ fontSize: 32, color: 'var(--home-element)' }} /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
