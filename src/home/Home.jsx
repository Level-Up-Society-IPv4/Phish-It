import styles from './Home.module.css';
import { Link } from 'react-router-dom';
export const Home = () => (
  <div className={styles.container}>
    <div className={styles.iconBody}>
    <Link to="/dashboard">
      <div className={styles.icon}>
      </div>
    </Link>
    </div>
    <div className={styles.homepageBody}>
      <h1 className={styles.homepageTitle}>PhishMe!</h1>
    </div>
  </div>
);
