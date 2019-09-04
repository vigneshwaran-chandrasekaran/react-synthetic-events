import React from 'react';
import './App.css';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { Button } from 'react-bootstrap';
// import Navbar from './components/Navbar';
import OnCopy from './components/OnCopy';
import OnCut from './components/OnCut';
import OnPaste from './components/OnPaste';
import AllClipboard from './components/AllClipboard';
import OnPointer from './components/OnPointer';
import OnMouse from './components/OnMouse';
import OnKeyboard from './components/OnKeyboard';
import OnFocus from './components/OnFocus';
import OnComposition from './components/OnComposition';
import OnSelect from './components/OnSelect';
import UiEvents from './components/UiEvents';
import WheelEvents from './components/WheelEvents';


function App() {
  return (
    <div className="container mb-5">
      <h3 className="text-center my-3">React Synthetic Events</h3>
      <OnCopy />
      <OnCut />
      <OnPaste />
      <AllClipboard />
      <OnPointer />
      <OnMouse />
      <OnKeyboard />
      <OnFocus />
      <OnComposition />
      <OnSelect />
      <UiEvents />
      <WheelEvents />

      {/* <Navbar /> */}
      {/* <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </ButtonToolbar> */}
    </div>
  );
}

export default App;
