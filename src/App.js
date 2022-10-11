import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        </Switch>
      </Router>
    </main>
  );
}

export default App;
