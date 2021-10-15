import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory,
  Link
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/loggedIn">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/loggedIn">Users</Link>
          </li>
        </ul>
      </nav>
  );
}

function Users() {

    const history= useHistory();

    const maxSeconds= 1800;

    const [seconds, setSeconds] = React.useState(0)

    React.useEffect(()=> {
        if(seconds>maxSeconds)
            history.push("/")
        if(Date().toString().includes("00:00:00"))
            history.push("/")
    }, )

    React.useEffect(() => {
        setInterval(() => {
            setSeconds(prevAmount => prevAmount + 1);
        }, 1000);
    }, [])

    return (
        <div>
        <h2>You're session started</h2>
        <h2>You'll be logged out in {maxSeconds} Seconds</h2>
        <h3>Timer: {seconds}</h3>
        </div>
    );
}

