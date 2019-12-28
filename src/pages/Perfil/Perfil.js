import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import '../../App.css';
import './Perfil.css';
// import { Container } from './styles';

import { connect } from 'react-redux';
import history from '../../history';
  

  
 function Perfil  ()  {
  function dialog() {
    NotificationManager.info(<a onClick={nav}>logout</a>);
  }

  function nav() {
    history.push('/');
  }


  return (
    <div className="Perfil">

      <NotificationContainer/>     

     <a onClick={dialog}>
      <img src='https://pleno.news/wp-content/uploads/2019/09/plenonews_69429078_424547198412357_2917137491588994799_n-1024x684.jpg' />
     
     </a>    
        
     
        
      
    </div>
  );
}
export default connect(state =>({picture: state.picture,name: state.name}))(Perfil);