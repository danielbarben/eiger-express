import React from 'react';
import Wrapper from '../Wrapper'
import Footer from '../Footer';
import Cablecar from '../Cablecar'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';
import './App.css';
//import { Masthead } from '@ta-interaktiv/react-masthead';
//<div><Masthead articleId='463616578418' inverted='false'/></div>

function App() {
  return (
    <div className = 'App'>
      

      <Cablecar/>
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;