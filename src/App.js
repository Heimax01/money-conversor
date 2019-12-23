import React from 'react';
import { Provider } from 'react-redux';

import './App.css';


import Routes from './routes';

import store from './store';

import Perfil from './Perfil';
import Login from './pages/Login';



function App() {



  return (
    <div className="container">
     
      <Provider store={store}>
        <Perfil />
        
      

      <div className="content">
        <Routes />
      </div>
      </Provider>
    </div>

  );
}

export default App;
