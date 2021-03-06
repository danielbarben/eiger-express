import React, { Component } from 'react';
import './MainTitle.css';

class MainTitle extends Component {
  render() {
    return (
      <div className='title'>
        <h1>Superseilbahn Eiger Express</h1>
        <h2>Der Eiger Express bringt Passagiere mit Rekordgeschwindigkeit von Grindelwald auf den Eigergletscher. Die neue Bahn bietet weitere Superlative. Am 5. Dezember wird sie eröffnet.</h2>
        <h3>Daniel Barben</h3>
      </div>
    );
  }
}

export default MainTitle;