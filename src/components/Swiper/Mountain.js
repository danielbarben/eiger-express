import React, { Component } from 'react';
//import './Map.css';
import Image from '../../img/mountain.png'

class Mountain extends Component {

  render() {
    return (
      <div className=''>
        <svg viewBox="0 0 260 200">
          <image width="200" height="200" transform="translate(30 0)" xlinkHref={Image}/>
          <text className="textweiss" transform="translate(110 86)">Ein <tspan className="textweiss textbold">40 Meter</tspan> langer
          <tspan x="-6" y="0" dy='1.2em'>Tunnel führt zur Station</tspan>
          <tspan x="-30" y="0" dy='2.4em'>der Jungfraubahn. Total</tspan>
          <tspan x="-40" y="0" dy='3.6em'>wurden <tspan className="textweiss textbold">110‘000 m³ Fels</tspan> aus-</tspan>
          <tspan x="-35" y="0" dy='4.8em'>gebrochen. Das entspricht</tspan>
          <tspan x="-30" y="0" dy='6em'>einem Würfel mit 48 Meter</tspan>
          <tspan x="-10" y="0" dy='7.2em'>Kantenlänge.</tspan></text>
          
        </svg>
      </div>
    );
    }
  }
export default Mountain;