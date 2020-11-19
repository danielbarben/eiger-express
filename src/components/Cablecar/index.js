import React, { Component } from 'react';
//import ReactGA from 'react-ga';
import './Cablecar.css';
import Gondel from '../../img/cablecar.png'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'start',
    }
  }

  render() {
    return (
      <div className='cablecar'>
        <img id='slide' src={Gondel} alt='Kabine Eiger-Express'/>
      </div>
    );
    }
  }

export default Game;