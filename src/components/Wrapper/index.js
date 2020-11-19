import React, { Component } from 'react';
//import ReactGA from 'react-ga';
import './Wrapper.css';
import MainTitle from '../MainTitle'
import Map from '../Map'
import Profile from '../Profile'
import Cabin from '../Cabin'
import Ropes from '../Ropes'
import Swiper from '../Swiper'
import Quiz from '../Quiz'
import Timeline from '../Timeline'//
import Links from '../Links'
//ReactGA.initialize('UA-141016488-1', {
//  debug: true
//});
//ReactGA.pageview(window.location.pathname + window.location.search);

class Game extends Component {
  render() {
    return (
      <div className='wrapper'>
      
     <MainTitle/>
     <Map/>
     <Profile />
     <Cabin/>
     <Ropes/>
     <Swiper/>
     <Quiz/>
     <Timeline/>
     <Links />

      </div>

    );
    }
  }

export default Game;