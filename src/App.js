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
            <Link to="/loggedIn">log in </Link>
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
        let interval = setInterval(() => {
            setSeconds(prevAmount => prevAmount + 1);
        }, 1000);
        window.addEventListener("keypress", () => {
            setSeconds(0)
        })
        window.addEventListener( "mousemove" , () => {
            setSeconds(0)
        })
        window.addEventListener("mousedown", () => {
            setSeconds(0)
        })
        window.addEventListener( "mousewheel" , () => {
            setSeconds(0)
        })
    }, [])

    return (
        <div>
            <h2>You're session started</h2>
            <h2>You'll be logged out after {maxSeconds} Seconds of inactivity</h2>
            <h3>Timer: {seconds}</h3>
        </div>
    );
}

