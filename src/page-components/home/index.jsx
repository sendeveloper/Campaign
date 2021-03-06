import React from 'react';

import Navigation from '../../components/navigation/index';
import HomeContent from '../../components/content/index';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles

const App = () => (
  <div className='App'>
    <Navigation/>
    <div>
      <h1>Headline</h1>
      <HomeContent />
    </div>
  </div>
);

export default App;
