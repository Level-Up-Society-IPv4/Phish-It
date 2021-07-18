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
            <table className={styles.dbPlayer}>
                            <th>
                                <img src={playerIcon} alt="playerIcon" className={styles.playerIcon} />
                            </th>
                            <th>
                                <h3 className={styles.player}>Bob Ross</h3>
                            </th>
                            <th>
                                <h3 className={styles.player}>Streak: 5</h3>
                            </th>
                            <th>
                                <h3 className={styles.player}>Group: Phishermen</h3>
                            </th>
                            <th>
                                <button className={styles.getmorecoins} onclick="..coin-shop/coin-shop.jsx">
                                    <img src={coin} className={styles.coin}></img> Get more coins!
                                </button>
                            </th>
                            <table className={styles.progressBar}>
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
                            </table>
            </table>
                <div className={styles.dbEmails}>
                    <Link to="/get-phished"><button className={styles.btn}>Get Phished</button></Link>
                    <Link to="/check-phish"><button className={styles.btn}>Check Phish</button></Link>
                </div>
                <table className="dbtable">
                    <th>
                    </th>
                </table>
            </div>
        </div>
    );
};
