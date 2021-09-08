import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Redirect} from "react-router";
import {routes} from "./routes";

const defaultPage = "/";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Fazer Login</Link>
            </li>
            <li>
              <Link to="/submit">Enviar Redação</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {routes.map((route, index) => {
            if (route.accessProvider()) {
              return (<Route path={route.path} render={route.component} key={index} exact={route.isPathExact}/>)
            }
            else {
              return (<Redirect to={defaultPage}/>)
            }
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
