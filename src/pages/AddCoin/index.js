import React, {useState} from 'react';
import toaster from 'toasted-notes';
import api from '../../services/api';

import '../style.css';
// import { Container } from './styles';

export default function AddCoin({history}) {
  
    const [name, setName] = useState("");
    const [description,setDescription] = useState("");

    const sizeInput = 3;
   
   async function handleSubmit(e){
      
      e.preventDefault();  


      const response = await api.post('/coins',  {name, description} );

      console.log(response.data);

      if (( name.length === sizeInput) && (description !== "" )) {
        toaster.notify('Moeda Cadastrada');
      }

      
      setName("");
      setDescription("");

    }

   function nav() {
      history.push('/Conversor');
    }
    
 
  
  
    return (
      <>
    <h1>Cadastre uma Moeda</h1>
      <br/><br/>
      <form onSubmit={handleSubmit}>     
        <label>Sigla da moeda *</label>
        <input type="text" maxLength={sizeInput} value={name} onChange={ (e) => setName(e.target.value)}/>
        <label>Descrição *</label>
        <input type="text" value={description} onChange={ (e) => setDescription(e.target.value)}/>
        <br/><br/>
        <button className="btn" type="submit">Cadastrar</button>
        <br/><br/><br/><br/><br/><br/>
        <button className="btn" onClick={nav}>Pagina principal</button>
      </form> 
    </>
  );
}
