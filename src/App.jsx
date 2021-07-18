import styles from './App.module.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { Quiz } from "./quiz/Quiz";
import { GetPhished } from "./get-phished/GetPhished";
import { Dashboard } from './dashboard/Dashboard';
import { PhishReveal } from "./phish-reveal/PhishReveal";
import { CheckPhish } from "./check-phish/CheckPhish";
import { EXPContext, EXPProvider, EXP_PER_LEVEL } from "./contexts/EXPContext";
// import { ProgressBar } from './components/progress-bar/ProgressBar';

export const App = () => (
  <EXPProvider>
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/get-phished">Get Phished</Link>
          <Link to="/check-phish">Check Phish</Link>
          <EXPContext.Consumer>
            {
              ({ expSinceLastLevel, level }) => (
                <>
                  <p>LV {level} | {expSinceLastLevel} EXP</p>
                  <div className={styles.progress}>
                    {/* <ProgressBar value={(expSinceLastLevel) * 100 / EXP_PER_LEVEL} /> */}
                  </div>
                </>
              )
            }
          </EXPContext.Consumer>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/get-phished">
            <GetPhished />
          </Route>
          <Route path="/check-phish">
            <CheckPhish />
          </Route>
          <Route path="/phish-reveal">
            <PhishReveal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </EXPProvider>
);