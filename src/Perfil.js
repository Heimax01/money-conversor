import React from 'react';
import './App.css';
// import { Container } from './styles';

import { connect } from 'react-redux';
 
 const Perfil = ({picture, name}) => {
  return (
    <div className="Perfil">
        
        
        <img src={picture} alt={name} >
            
        </img>
        
        
    </div>
  );
}
export default connect(state =>({picture: state.picture,name: state.name}))(Perfil);