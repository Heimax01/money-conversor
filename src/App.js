import React from 'react';
import { Provider } from 'react-redux';

import './App.css';


import Routes from './routes';

import store from './store';





function App() {



  return (
    <Provider store={store}>
      
    <div className="container">

      <div className="content">
        
        <Routes />
      </div>
      
    </div>
    </Provider>

  );
}

export default App;
