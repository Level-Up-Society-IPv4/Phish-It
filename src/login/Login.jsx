import styles from './Login.module.css';
import {Link} from 'react-router-dom';

export const Login = () => (
    <div id={styles.homepage}>
        <div id={styles.skybluebackground}></div>
        <div id={styles.logintitle}>Login</div>
        <div id={styles.email}>Email</div>
        <div id={styles.textbox1} type="textbox"></div>
        <div id={styles.password}>Password</div>
        <div id={styles.textbox2} type="textbox"></div>
        <div id={styles.yellowrect2}></div>
        <Link to="/quizintro">
            <div className={styles.login}>Login</div>
        </Link>
        <div id={styles.noaccount}>No Account?</div>
        <div id={styles.yellowrect1}></div>           
        <div id={styles.companyaccount}>Create Company Account</div>      
    </div>

);