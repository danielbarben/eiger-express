import React, { Component } from 'react';

import Rope from '../../img/rope.png'

class Map extends Component {

  render() {
    return (
      <div className='element'>
        <h1>Drei Seile pro Richtung</h1>
        <p>Die Kabinen fahren auf zwei <b>Tragseilen.</b> Jedes ist 6,9 Kilometer lang und 130,7 Tonnen schwer. Sie sind zusammengedreht aus 152 Drähten. Ein Tragseil im Querschnitt (5,8 cm):</p><img width="160px" src={Rope} alt="Querschnitt eines Tragseils"/>
        <p>Ein umlaufendes <b>Zugseil</b> zieht die Kabinen. An den Stationen werden sie abgekoppelt und gebremst.</p>
      </div>
    );
    }
  }
export default Map;