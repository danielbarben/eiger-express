import React, { Component } from 'react';

import Rope from '../../img/rope.png'
import './Rope.css';
class Map extends Component {

  render() {
    return (
      <div className='element'>
        <h1>Drei Seile pro Richtung</h1>
        <p>Die Kabinen fahren auf zwei <b>Tragseilen.</b> Jedes ist 6,9 Kilometer lang und 130,7 Tonnen schwer. Sie sind zusammengedreht aus 152 Drähten. Die Tragseile im Querschnitt (je 5,8 cm):</p>
        <img className="rope" src={Rope} alt="Querschnitt eines Tragseils"/>  <img className="rope" src={Rope} alt="Querschnitt eines Tragseils"/>
        <p>Ein umlaufendes <b>Zugseil</b> zieht die Kabinen. An den Stationen werden sie abgekoppelt und gebremst.</p>
      </div>
    );
    }
  }
export default Map;