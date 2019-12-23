import React from 'react';

// import { Container } from './styles';

import { connect } from 'react-redux';
 
 const Perfil = ({picture, name}) => {
  return (
    <div>
        
        <img src={picture} alt={name} />
    </div>
  );
}
export default connect(state =>({picture: state.picture,name: state.name}))(Perfil);