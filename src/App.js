import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { Quiz } from "./quiz/Quiz";
import { Login } from "./login/Login";
import { GetPhished } from "./get-phished/GetPhished";
import { PhishReveal } from "./phish-reveal/PhishReveal";
import { CheckPhish } from "./check-phish/CheckPhish";
import { EXPContext, EXPProvider } from "./contexts/EXPContext";

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
              ({exp}) => <p>{exp} EXP</p>
            }
          </EXPContext.Consumer>
        </nav>
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/login">
            <Login />
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