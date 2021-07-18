import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { Quiz } from "./quiz/Quiz";
import { Dashboard } from "./dashboard/Dashboard";

export const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);