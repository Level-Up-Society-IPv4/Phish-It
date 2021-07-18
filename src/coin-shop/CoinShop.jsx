import styles from './CoinShop.module.css';
import coinShop from '../assets/coinshop.png';

export const CoinShop = () => (
  <img src={coinShop} alt="Mock coin shop graphic" className={styles.coinShop} />
);
