import styles from './Login.module.css';

export const Login = () => (
    <div id={styles.homepage}>
        <div id={styles.skybluebackground}>
            <div id={styles.logintitle}>Login</div>
            <div id={styles.email}>Email</div>
            <div id={styles.textbox1}></div>
            <div id={styles.password}>Password</div>
            <div id={styles.textbox2}></div>
            <div id={styles.yellowrect2}>
                <div id={styles.login}>Login</div>
            </div>
            <div id={styles.noaccount}>No Account?</div>
            <div id={styles.yellowrect1}>
                <div id={styles.companyaccount}>Create Company Account</div>
            </div>
        </div>   
    </div>
);