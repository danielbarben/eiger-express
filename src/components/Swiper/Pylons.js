import React, { Component } from 'react';
import Image from '../../img/mast.png'

class Pylons extends Component {

  render() {
    return (
      <div className=''>
        <svg viewBox="0 0 260 200">
          <image width="200" height="200" transform="translate(30 0)" xlinkHref={Image}/>
          <text className="text" textAnchor="left" transform="translate(130 52)">Der Eiger
          <tspan x="0" y="0" dy='1.2em'>Express</tspan>
          <tspan x="0" y="0" dy='2.4em'>kommt mit nur</tspan>
          <tspan x="0" y="0" dy='3.6em'>sieben Masten</tspan>
          <tspan x="0" y="0" dy='4.8em'>aus. Der höchste</tspan>
          <tspan x="0" y="0" dy='6em'>misst <tspan className="textbold">62 Meter.</tspan></tspan>
          <tspan x="0" y="0" dy='7.2em'>Zum Vergleich</tspan>
          <tspan x="0" y="0" dy='8.4em'>der Turm auf</tspan>
          <tspan x="0" y="0" dy='9.6em'>dem Gurten.</tspan></text>
        </svg>
      </div>
    );
    }
  }
export default Pylons;