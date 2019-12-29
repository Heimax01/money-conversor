import React, {useState} from 'react';
import toaster from 'toasted-notes';
import api from '../../services/api';

import '../Notification.css'
// import { Container } from './styles';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import '../../App.css';
import '../Converter/Perfil.css';


import { connect } from 'react-redux';

function AddCoin({history, picture, name}) {
  
    const [nome, setNome] = useState("");
    const [description,setDescription] = useState("");

    const sizeInput = 3;
   
   async function handleSubmit(e){
      
      e.preventDefault();  


      const response = await api.post('/coins',  {name, description} );

      console.log(response.data);

      if (( name.length === sizeInput) && (description !== "" )) {
        toaster.notify('Moeda Cadastrada');
      }

      
      setNome("");
      setDescription("");

    }
    function dialog() {
      NotificationManager.info(<a onClick={navP}>logout</a>);
    }
  
    function navP() {history.push('/');}

   function nav() {
      history.push('/Conversor');
    }
    
 
  
  
    return (
      <div>
      <div className="Perfil">

        <NotificationContainer/>     

        <a onClick={dialog}>
        <img src={picture} alt={name}  />

      </a>    
        

      </div>
    <h1>Cadastre uma Moeda</h1>
      <br/><br/>
      <form onSubmit={handleSubmit}>     
        <label>Sigla da moeda *</label>
        <input type="text" maxLength={sizeInput} value={nome} onChange={ (e) => setNome(e.target.value)}/>
        <label>Descrição *</label>
        <input type="text" value={description} onChange={ (e) => setDescription(e.target.value)}/>
        <br/><br/>
        <button className="btn" type="submit">Cadastrar</button>
        <br/><br/><br/><br/><br/><br/>
        <button className="btn" onClick={nav}>Pagina principal</button>
      </form> 
    </div>
  );
}
export default connect(state =>({picture: state.picture , name: state.name}))(AddCoin);