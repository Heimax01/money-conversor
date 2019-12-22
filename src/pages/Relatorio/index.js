import React, {useEffect, useState} from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function Relatorio({history}) {

    useEffect(() => {
        async function loadCoins() {
          const response = await api.get('/listcoins');
          setCoins(response.data);
        }
    
        loadCoins();
      },[]);
    
      const [coins, setCoins] = useState([]);

      function nav() {
          history.push('/Conversor');
      }

  return (
    <>
    
        {coins.map(coin => (
          <ul key={coin._id} value={coin.name}>
            {coin.name} - {coin.description}
          </ul>
        ))}
        <br/><br/>
        <button className="btn" onClick={nav}>Página principal</button>
    </>
  );
}
