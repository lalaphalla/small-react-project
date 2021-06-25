import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import TourPage from "./pages/tours/tour";
import ReviewPage from "./pages/reviews/review";
import AccordionPage from "./pages/accordion/accordion";
import MenuPage from "./pages/menu/menu";
import TapsPage from "./pages/taps/taps";
import SliderPage from "./pages/slider/slider";
import LoremIpsumPage from "./pages/lorem-ipsum/lorem-ipsum";
import ColorGenratorPage from "./pages/color-generator/color-generator";
import GroceryBudPage from "./pages/grocery-bud/grocery-bud";

import './App.scss'
function App() {
  return (
    <div>
      <Router>
        <div className="navbar">
          <div className="nav-center">
            <Link to="/">Home page</Link>
            <ul className="nav-links">
              <li>
                <Link to="/tour">Tour</Link>
              </li>
              <li>
                <Link to="/review">Review</Link>
              </li>
              <li>
                <Link to="/accordion">Accordion</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/tabs">Tab</Link>
              </li>
              <li>
                <Link to="/slider">Slider</Link>
              </li>
              <li>
                <Link to="/lorem">Lorem</Link>
              </li>
              <li>
                <Link to="/color">Color Generator</Link>
              </li>
              <li>
                <Link to="/grocery">Grocery Bud</Link>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route path="/tour" component={TourPage}></Route>
          <Route path="/review" component={ReviewPage}></Route>
          <Route path="/accordion" component={AccordionPage}></Route>
          <Route path="/menu" component={MenuPage}></Route>
          <Route path="/tabs" component={TapsPage}></Route>
          <Route path="/slider" component={SliderPage}></Route>
          <Route path="/lorem" component={LoremIpsumPage}></Route>
          <Route path="/color" component={ColorGenratorPage}></Route>
          <Route path="/grocery" component={GroceryBudPage}></Route>
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
