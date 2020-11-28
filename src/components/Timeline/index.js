import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  render() {
    return (
      <div className='element'>
        <h1>Meilensteine</h1>
        <ul className='events'>
          <li><p className='date'>3.7.2018</p><p>Der Bau des Eiger Express und der Männlichenbahn beginnt.</p></li>
          <li><p className='date'>15.3.2019</p><p>Am Eigergletscher wird der Stollen zur Jungfraubahn durchstochen.</p></li>
          <li><p className='date'>1.4.2019</p><p>Die alte Männlichenbahn GGM von 1978 fährt zum letzten Mal.</p></li>
          <li><p className='date'>14.12.2019</p><p>Die neue Männlichenbahn mit 10er-Gondeln wird eingeweiht.</p></li>
          <li><p className='date'>15.12.2019</p><p>Die Züge aus Interlaken halten nun direkt beim Terminal.</p></li>
          <li><p className='date'>30.4.2020</p><p>Die Seile des Eiger Express werden eingezogen. Das dauert bis im August.</p></li>
          <li><p className='date'>5.12.2020</p><p>Das Parkhaus beim Terminal mit 1000 Plätzen wird eröffnet.</p></li>
          <li><p className='date'>5.12.2020</p><p>Der Eiger Express wird sieben Tage früher als geplant eröffnet.</p></li>
        </ul>
      </div>
    );
  }
}
export default Timeline;
