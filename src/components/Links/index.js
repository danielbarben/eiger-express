import React, { Component } from 'react';

class Links extends Component {

  render() {
    return (
      <div className='element'>
        <h1>Quellen und weiterführende Links</h1>
        <p><a href={"https://v-bahn.jungfrau.ch/"} rel="noopener noreferrer" target="_blank">Jungfraubahnen, V-Bahn Special</a></p>
        <p><a href={"https://www.doppelmayr.com/de/systeme/3s-bahnen/"} rel="noopener noreferrer" target="_blank">3S-Bahnen von Doppelmayr/Garaventa</a></p>
        <p><a href={"https://www.cwa.ch/angebot/3s-kabine-1/"} rel="noopener noreferrer" target="_blank">3S-Kabine von CWA Constructions</a></p>
      </div>
    );
    }
  }
export default Links;