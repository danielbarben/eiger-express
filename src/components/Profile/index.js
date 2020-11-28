import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className='element'>
        <h1>Über sieben Masten</h1>
        <p>Die Fahrt im Eiger Express dauert 15 Minuten. Dabei werden 1385 Höhenmeter überwunden und 6483 Meter zurückgelegt.</p>
        <svg viewBox='0 0 265 196'>
    <g id='Masten'>
      <line className='bob' id='nr1' x1='33' y1='155' x2='33' y2='149'/>
      <line className='bob' id='nr2' x1='71' y1='123' x2='71' y2='130'/>
      <line className='bob' id='nr3' x1='102' y1='116' x2='102' y2='110'/>
      <line className='bob' id='nr4' x1='137' y1='102' x2='137' y2='93'/>
      <line className='bob' id='nr5' x1='184' y1='76' x2='184' y2='68'/>
      <line className='bob' id='nr6' x1='208' y1='58' x2='208' y2='54'/>
      <line className='bob' id='nr7' x1='227' y1='48' x2='227' y2='44'/>
		</g>
    
    <g id='Seil'>
				<polyline className='bob' points='9 158 33 149 71 123 102 110 137 93 184 68 208 54 227 44 257 32'/>
		</g>
    
    <g id='Mastenbeschriftung'>
			<text className='text' textAnchor='middle' transform='translate(33 127)'><tspan className='text textbold'>Mast 1</tspan><tspan x='0' dy='1em' >46 m</tspan></text>
			<text className='text' textAnchor='middle' transform='translate(71 105)'><tspan className='text textbold'>Mast 2</tspan><tspan x='0' dy='1em' className='text'>55 m</tspan></text>
			<text className='text' textAnchor='middle' transform='translate(102 91)'><tspan className='text textbold'>Mast 3</tspan><tspan x='0' dy='1em'>50 m</tspan></text>
			<text className='text' textAnchor='middle' transform='translate(137 74)'><tspan className='text textbold'>Mast 4</tspan><tspan x='0' dy='1em'>62 m</tspan></text>
			<text className='text' textAnchor='end' transform='translate(184 53)'><tspan className='text textbold'>Mast 5</tspan><tspan x='0' dy='1em'>60 m</tspan></text>
			<text className='text' textAnchor='middle' transform='translate(204 37)'><tspan className='text textbold'>Mast 6</tspan><tspan x='0' dy='1em'>20,5</tspan></text>
			<text className='text' textAnchor='middle' transform='translate(233 25)'><tspan className='text textbold'>Mast 7</tspan><tspan x='0' dy='1em'>29,5</tspan></text>
		</g>

		<g id='Ministationen'>
			<rect className='ministation' x='3' y='158' width='8' height='8'/>
			<polygon className='ministation' points='261 30 257 37 257 30 261 30'/>
		</g>

    <g id='Berg'>
		  <rect className='berg' x='0.5' y='160.3' width='8.6' height='13.89'/>	
      <polygon className='berg' points='256.9 37.1 264.2 21.9 264.2 174.2 256.9 174.2 256.9 37.1'/>
      <polygon id='Bahn' className='berg' points='9 160.3 20.6 159.1 28 157.8 30.1 155 33.6 155 37.8 152.3 39.7 152.3 47.4 148.5 51.2 147.3 53.6 148.9 60.7 139.7 65.3 133.6 69.2 129.5 73.4 129.5 82.9 125.8 88 122.6 90 121.3 93.7 120.5 102.2 115.6 104.2 115.6 104.7 114 109.7 114 112.1 116.2 117.9 113 122.4 109.9 125.7 107.4 130 106.4 132.3 103.5 134.3 103.5 136 101.3 141.1 102.9 142.3 103.3 146.1 103.5 155.8 95.8 165.5 88.6 168 87.4 176.1 83.2 180.1 80.5 182.3 76 185.6 76 190.6 73 197.4 69.8 202.3 64.9 206.9 56.9 210.7 58.3 216 55.1 218.5 52.6 223.1 50 228 47.1 230.7 48.3 232 49.6 238.4 49.5 243.4 49.8 245.9 47.1 249.7 43.8 252.8 41.2 255.6 38.1 256.9 37.1 256.9 174.2 9 174.2 9 160.3'/>
   	</g>
		
		<g id='Länge_Zahlen'>
			<text className='text' textAnchor='middle' transform='translate(7.5 194)'>0</text>
      <text className='text' textAnchor='middle'transform='translate(47 194)'>1 km</text>
			<text className='text' textAnchor='middle' transform='translate(86.5 194)'>2 km</text>
			<text className='text' textAnchor='middle' transform='translate(126 194)'>3 km</text>
			<text className='text' textAnchor='middle'transform='translate(165 194)'>4 km</text>
			<text className='text' textAnchor='middle'transform='translate(205 194)'>5 km</text>
			<text className='text' textAnchor='middle'transform='translate(244 194)'>6 km</text>
		</g>

	<g id='Länge_Striche'>
    <line className='raster1' x1='7.5' y1='174' x2='7.5' y2='182'/>
		<line className='raster1' x1='47' y1='174' x2='47' y2='182'/>
		<line className='raster1' x1='86.5' y1='174' x2='86.5' y2='182'/>
		<line className='raster1' x1='126' y1='174' x2='126' y2='182'/>
    <line className='raster1' x1='165' y1='174' x2='165' y2='182'/>
    <line className='raster1' x1='205' y1='174' x2='205' y2='182'/>
		<line className='raster1' x1='244' y1='174' x2='244' y2='182'/>
 </g>

		<g id='Höhe_Zahlen' data-name='Höhenmeter Zahlen'>
			<text className='textweiss' textAnchor='end' transform='translate(260 79)'>2000<tspan x='0' dy='1em'>m ü. M.</tspan></text>
			<text className='textweiss' textAnchor='end' transform='translate(260 123)'>1500</text>
			<text className='textweiss' textAnchor='end' transform='translate(260 167)'>1000</text>
		</g>
		
		<g id='Höhe_Striche'>
    	<line className='raster2' x1='202.6' y1='67' x2='264' y2='67'/>
			<line className='raster2' x1='121.2' y1='111' x2='264' y2='111'/>
			<line className='raster2' x1='34.8' y1='155' x2='264' y2='155'/>
		</g>
		
		<line id='Grundlinie' className='raster3' x1='0.5' y1='174.2' x2='264.2' y2='174.2'/>

		<g id='Orte'>
			<text className='textweiss' transform='translate(180 90)'>Alp <tspan x='0' dy='1em'>Wärgistal</tspan></text>
			<text className='textweiss' transform='translate(112 127)'>Alpiglen</text>
			<text className='textweiss' transform='translate(84 142)'>Brandegg</text>
			<text className='textweiss textbold' transform='translate(5 171)'>Grindelwald Terminal</text>
			<text className='text textbold' textAnchor='end' transform='translate(264 8)'>Eigergletscher</text>
		</g>
	
</svg>
      </div>
    );
    }
  }

export default Profile;