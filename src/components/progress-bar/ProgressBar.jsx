import styles from './ProgressBar.module.css';

export const ProgressBar = ({ value }) => (
  <div className={styles.bar}>
    <div className={styles.fill} style={{
      transform: `translate(-${Math.max(100 - value, 0)}%, 0)`
    }} />
  </div>
)
