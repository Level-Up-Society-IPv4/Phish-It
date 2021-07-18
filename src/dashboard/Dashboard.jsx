import styles from './Dashboard.module.css';
import { useState } from 'react';
import playerIcon from '../assets/man.png';
import { Link } from "react-router-dom";
import { ProgressBar } from '../components/progress-bar/ProgressBar';
import { EXPContext, EXPProvider, EXP_PER_LEVEL } from "../contexts/EXPContext";
import coin from '../assets/coin.png';

export const Dashboard = () => {
    const [exp, setExp] = useState(0);

    console.log(document.getElementsByClassName('pbg'));
    return (
        <div className={styles.outterContainer}>
            <div className={styles.dashboardContainer}>
                <div className={styles.dbPlayer}>
                    <img src={playerIcon} alt="playerIcon" className={styles.playerIcon} />
                    <h3 className={styles.player}>Bob Ross</h3>
                    <h3 className={styles.player}>Streak: 5</h3>
                    <h3 className={styles.player}>Group: Phishermen</h3>
                    <Link to="/coin-shop" className={styles.getmorecoins}>
                        <img src={coin} className={styles.coin}></img> Get more coins!
                    </Link>
                </div>
                <div className={styles.progressBar}>
                    <EXPContext.Consumer>
                        {
                        ({ expSinceLastLevel, level }) => (
                            <div className={styles.pbContainer}>
                                <div className={styles.progress}>
                                    <ProgressBar value={(expSinceLastLevel) * 100 / EXP_PER_LEVEL} />
                                </div>
                                <p>LV {level} | {expSinceLastLevel} EXP</p>
                            </div>
                        )
                        }
                    </EXPContext.Consumer>
                </div>
                <div className={styles.dbEmails}>
                    <Link to="/get-phished"><button className={styles.btn}>Get Phished</button></Link>
                    <Link to="/check-phish"><button className={styles.btn}>Check Phish</button></Link>
                </div>
            </div>
        </div>
    );
};
