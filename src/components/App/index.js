import React from 'react';
import Wrapper from '../Wrapper'
import Footer from '../Footer';
import Cablecar from '../Cablecar'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';
import './App.css';
import { Masthead } from '@ta-interaktiv/react-masthead';
//254251351
import ReactGA from 'react-ga';
ReactGA.initialize('UA-254251351');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <div className = 'App'>
      <Masthead articleId='463616578418'/>
      <Cablecar/>
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;