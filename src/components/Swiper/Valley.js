import React, { Component } from 'react';
//import './Map.css';
import Image from '../../img/valley.png'

class Valley extends Component {

  render() {
    return (
      <div className=''>
        <svg viewBox="0 0 260 200">
          <image width="200" height="200" transform="translate(30 0)" xlinkHref={Image}/>
          <text className="text" textAnchor="middle" transform="translate(116 40)">Eiger Express</text>
          <text className="text" textAnchor="end" transform="translate(220 76)">Männlichen-<tspan x="0" y="0" dy='1em'>bahn</tspan></text>
          <text className="text" transform="translate(100 177)">Zug nach <tspan x="0" y="0" dy='1em'>Interlaken</tspan></text>
        </svg>
      </div>
    );
    }
  }
export default Valley;