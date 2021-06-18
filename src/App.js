import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TourPage from './pages/tours/tour'

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/tour" component={TourPage}>
        </Route>        
      </Switch>
    </Router>
    
    </div>
    // <div className="App">
    //   <header className="App-header">
     // Homepage
        // Birthday Reminder 
        // Tours
        // Review 
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a>    
    //   </header>
    // </div>
  );
}

export default App;
