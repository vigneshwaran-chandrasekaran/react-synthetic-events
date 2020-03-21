import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { Button } from 'react-bootstrap';
// import Navbar from './components/Navbar';

import {
  AllClipboard,
  ImageEvents,
  OnComposition,
  OnCopy,
  OnCut,
  OnFocus,
  OnKeyboard,
  OnMouse,
  OnPaste,
  OnPointer,
  OnSelect,
  UiEvents,
  WheelEvents
} from "./components";

function App() {
  return (
    <Router>
      <div className="container mb-5">
        <nav>
          <ul>
            <li>
              <Link to="/OnCopy">OnCopy</Link>
            </li>
            <li>
              <Link to="/OnCut">OnCut</Link>
            </li>
            <li>
              <Link to="/OnPaste">OnPaste</Link>
            </li>
            <li>
              <Link to="/AllClipboard">AllClipboards</Link>
            </li>
            <li>
              <Link to="/OnPointer">OnPointer</Link>
            </li>
            <li>
              <Link to="/OnMouse">OnMouse</Link>
            </li>
            <li>
              <Link to="/OnKeyboard">OnKeyboard</Link>
            </li>
            <li>
              <Link to="/OnFocus">OnFocus</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/OnCopy">
            <OnCopy />
          </Route>
          <Route path="/OnCut">
            <OnCut />
          </Route>
          <Route path="/OnPaste">
            <OnPaste />
          </Route>
          <Route path="/AllClipboard">
            <AllClipboard />
          </Route>
          <Route path="/OnPointer">
            <OnPointer />
          </Route>
          <Route path="/OnMouse">
            <OnMouse />
          </Route>
          <Route path="/OnKeyboard">
            <OnKeyboard />
          </Route>
          <Route path="/OnFocus">
            <OnFocus />
          </Route>
        </Switch>

        <div className="container mb-5">
          <h3 className="text-center my-3">React Synthetic Events</h3>
          <OnComposition />
          <OnSelect />
          <UiEvents />
          <WheelEvents />
          <ImageEvents />
          {/* <Navbar /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
