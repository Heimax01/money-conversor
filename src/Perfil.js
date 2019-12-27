import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './App.css';
import './Perfil.css';
// import { Container } from './styles';

import { connect } from 'react-redux';

  function dialog() {
    NotificationManager.info(<a>logout</a>);
  }

 const Perfil = ({picture, name}) => {

    

  return (
    <div className="Perfil">

      <NotificationContainer/>     

     <a onClick={dialog}>
      <img src={picture} alt={name} />
     
     </a>    
        
     
        
      
    </div>
  );
}
export default connect(state =>({picture: state.picture,name: state.name}))(Perfil);