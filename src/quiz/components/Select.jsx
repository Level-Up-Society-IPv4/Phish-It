import styles from './Select.module.css';
import { useContext, useState } from "react";
import { CoinContext } from '../../contexts/CoinContext';
import coin from '../../assets/coin.png'

export const Select = ({ options, nextCallback }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { spendCoins } = useContext(CoinContext);

  if (selectedOption === null) {
    return options.map((option) => (
      <button
        className={styles.option}
        onClick={() => {
          if (option.cost) {
            const purchaseSucceeded = spendCoins(option.cost);
            if (!purchaseSucceeded) {
              alert("You can't afford this option! Try earning some coins first.");
              return;
            }
          }
          if (option.description) {
            setSelectedOption(option);
          } else {
            nextCallback(option);
          }
        }}
        key={option.id}
      >
        {option.text}
        {
          option.cost && (
            <>
              {' '}
              (-
              <img src={coin} alt="coin" className={styles.coin} />
              {option.cost}
              )
            </>
          )
        }
      </button>
    ));
  } else {
    return (
      <>
        <div className={styles.activeLabel}>
          {
            selectedOption.image ? <img src={selectedOption.image} alt={selectedOption.text} className={styles.image} />
              : <p className={styles.emailText}>{selectedOption.text}</p>
          }
        </div>
        <div className={styles.note}>
          <p>{selectedOption.description}</p>
          <button
            className={styles.option}
            onClick={() => nextCallback(selectedOption)}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
