import styles from './Dashboard.module.css';
import { useState } from 'react';
import playerIcon from './assets/man.png';

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
                                <h3 className={styles.player}>Friends: 10</h3>
                            </th>
                            <table className={styles.progressBar}>
                                <div className={styles.pbc}></div>
                                <div className={styles.pbg}></div>
                            </table>
                            <div className={styles.inlines}>
                                    <h5>10</h5>
                                    <h5>20</h5>
                                    <h5>30</h5>
                                    <h5>40</h5>
                                    <h5>50</h5>
                            </div>
                            <div className={styles.exp}>
                                <h3>250 Exp</h3>
                            </div>
            </table>
                <table className="dbtable">
                    <th>
                        <div className={styles.dbEmails}>
                            <button className={styles.btn}>Emails</button>
                            <button className={styles.btn}>Quiz</button>
                        </div>
                        <div className={styles.dbQuizContainer}>
                        </div>
                        <div className={styles.dbStats}>

                        </div>
                    </th>
                </table>
            </div>
        </div>
    );
};
