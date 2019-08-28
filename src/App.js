import React, { useState } from 'react';
import './App.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Button } from 'react-bootstrap';
import Navbar from './components/Navbar';
import OnCopy from './components/OnCopy';

function App() {
  return (
    <div className="App">
      <OnCopy />
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
