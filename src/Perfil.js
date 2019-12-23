import React from 'react';
import './App.css';
import './Perfil.css';
// import { Container } from './styles';

import { connect } from 'react-redux';
 
 const Perfil = ({picture, name}) => {

    

  return (
    <div className="Perfil">
        
        <a onClick={() => {const clickTrue = true; console.log(clickTrue);}}>
        <img src={picture} alt={name} />
        </a>    
        
        
        
    </div>
  );
}
export default connect(state =>({picture: state.picture,name: state.name}))(Perfil);