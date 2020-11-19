import React, { Component } from 'react';
//import './Map.css';
import Image from '../../img/passengers.png'

class Passenger extends Component {

  render() {
    return (
      <div className=''>
        <svg viewBox="0 0 260 200">
          <image width="200" height="200" transform="translate(30 0)" xlinkHref={Image}/>
          <text className="text" textAnchor="middle" transform="translate(130 27)"><tspan className="text textbold">44 Gondeln</tspan> bieten<tspan x="0" y="0" dy='1.2em'>Platz für je <tspan className="text textbold">26 Passagiere.</tspan></tspan></text>
          <text className="text" textAnchor="middle" transform="translate(130 140)">Die Passagiere sitzen in vier<tspan x="0" y="0" dy='1.2em'>Reihen. Skis werden in</tspan><tspan x="0" y="0" dy='2.4em'>Halterungen im Kabinen-</tspan><tspan x="0" y="0" dy='3.6em'>boden gesteckt.</tspan></text>
        </svg>
      </div>
    );
    }
  }
export default Passenger;