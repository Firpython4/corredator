import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes />
    </Router>
  );
}

export default App;
