import React, { Component } from 'react';

class Speed extends Component {

  render() {
    return (
      <div className=''>
        <svg viewBox="0 0 260 200">
          <circle className="weiss" cx="130" cy="100" r="100"/>
          <g>
            <rect className="violett" x="50" y="60" width="160" height="14"/>
            <rect className="violett" x="50" y="100" width="132" height="14"/>
            <rect className="violett" x="50" y="140" width="80" height="14"/>
          </g>
          <g>
            <text className="textweiss" textAnchor="End" transform="translate(206 71)">8 m/s</text>
            <text className="textweiss" textAnchor="End" transform="translate(178 111)">6,5 m/s</text>
            <text className="textweiss" textAnchor="End" transform="translate(126 151)">4,0 m/s</text>
          </g>
          <g>
            <text className="text" transform="translate(50 96)">Männlichenbahn, 2019</text>
            <text className="text" transform="translate(50 134)">Männlichebahn, 1978</text>
          </g>
          <g>
            <text className="text" textAnchor="middle" transform="translate(130 30)">Der Eiger-Express
            <tspan x="0" y="0" dy="1.2em">ist mit <tspan className="textbold">8 m/s</tspan> (28,8 km/h)</tspan>
            <tspan x="0" y="0" dy="2.4em">der schnellste seiner Art*.</tspan>
            </text>
            <text className="text" textAnchor="middle" transform="translate(130 180)">* Dreiseilumlaufbahn</text>
          </g>    
        </svg>
      </div>
    );
    }
  }
export default Speed;