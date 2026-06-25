import './HomeProducts.css';
import { ShoppingCart, Settings, BatteryChargingFull } from '@mui/icons-material';
import kneecap from '../assets/kneecap.png';
import mia from '../assets/kneecap.png';
import botkit from '../assets/kneecap.png';


const products = [
  {
    title: 'Cue Arm 360',
    subtitle: 'Robotic Arm',
    icon: ShoppingCart,
    image:
      kneecap,
  },
  {
    title: 'A360 Core',
    subtitle: 'Articulation Module',
    icon: Settings,
    image:
      {kneecap},
  },
  {
    title: 'Dock One',
    subtitle: 'Charging Station',
    icon: BatteryChargingFull,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
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
                <img src={product.image} alt={product.title} className="home-product-image" />
              </div>
              <div className="home-product-body">
                <div>
                  <product.icon sx={{ fontSize: 32, marginBottom: '8px', color: '#00d9ff' }} />
                  <h3>{product.title}</h3>
                  <p>{product.subtitle}</p>
                </div>
                <div className="home-product-arrow" aria-hidden="true">-&gt;</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
