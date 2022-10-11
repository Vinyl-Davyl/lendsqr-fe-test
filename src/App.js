import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import LogIn from "./pages/LogIn";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    window.addEventListener(`resize`, () => setWindowWidth(window.innerWidth));
    return window.removeEventListener(`resize`, () =>
      setWindowWidth(window.innerWidth)
    );
  }, [windowWidth]);

  return (
    <main className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LogIn />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/user-details/:id'>
            <User />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
