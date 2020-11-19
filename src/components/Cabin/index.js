import React, { Component } from 'react';
import Gondel from '../../img/cabinwithcables.png'
import Wlan from '../../img/wlan.png'
import Sitzheizung from '../../img/sitzheizung.png'
import Scheibenheizung from '../../img/scheibenheizung.png'
import Informationssystem from '../../img/informationssystem.png'
import './Cabin.css';

class Profile extends Component {
  render() {
    return (
      <div className='element'>
        <h1>Komfortable Kabinen</h1>
        <p>Die Kabinen bieten beispiellosen Komfort. Der Strom wird mit Generatoren an den Laufrollen erzeugt – vergleichbar mit einem Dynamo beim Fahrrad. </p>
        <img id='Cabin' className='cabin' src={Gondel} alt='Kabine Eiger-Express'/>
        <div className='table'>
          <div className='item'><img id='Wlan' className='picto' src={Wlan} alt='WLan'/><p>Gratis Wlan</p></div>
          <div className='item'><img id='Wlan' className='picto' src={Sitzheizung} alt='Sitzheizung'/><p>Sitzheizung</p></div>
          <div className='item'><img id='Wlan' className='picto' src={Scheibenheizung} alt='Scheibenheizung'/><p>Scheibenheizung</p></div>
          <div className='item'><img id='Wlan' className='picto' src={Informationssystem} alt='Informationssystem'/><p>Durch GPS gesteuerte Infotainment-Bildschirme</p></div>
        </div>
        <p> </p>
      </div>
    );
    }
  }

export default Profile;