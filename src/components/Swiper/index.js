import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,  Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swiper.css';
import Passengers from './Passengers.js'
import Valley from './Valley.js'
import Pylons from './Pylons.js'
import Speed from './Speed.js'
import Mountain from './Mountain.js'


SwiperCore.use([Navigation,Pagination]);

//SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class Swipercomponent extends Component {

  render() {    
      return (
				<Swiper 
					spaceBetween={100}
					slidesPerView={1}
					navigation
					pagination
				>					
					<SwiperSlide><div className='element'><h1>Talstation Grindelwald</h1><Valley/></div></SwiperSlide>
					<SwiperSlide><div className='element'><h1>2’200 Personen pro Stunde</h1><Passengers/></div></SwiperSlide>
					<SwiperSlide><div className='element'><h1>Rekordgeschwindigkeit</h1><Speed/></div></SwiperSlide>
					<SwiperSlide><div className='element'><h1>Masten</h1><Pylons/></div></SwiperSlide>
					<SwiperSlide><div className='element'><h1>Bergstation Eigergletscher</h1><Mountain/></div></SwiperSlide>
				</Swiper>
			);
    
    }
  }


export default Swipercomponent;
