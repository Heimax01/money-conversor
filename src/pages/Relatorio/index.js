import React, { useEffect, useState } from "react";
import api from "../../services/api";

// import { Container } from './styles';
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "../../App.css";
import "../Converter/Perfil.css";

import { connect } from "react-redux";

function Relatorio({ history, name, picture }) {
  useEffect(() => {
    async function loadCoins() {
      const response = await api.get("/listcoins");
      setCoins(response.data);
    }

    loadCoins();
  }, []);

  const [click, setClick] = useState(true);
  const [coins, setCoins] = useState([]);

  function dialog() {
    if (click) {
      setClick(false);
      const msg = <a onClick={navP}>logout</a>;
      const gamb = null;
      NotificationManager.warning(msg, gamb, 2000);
      setInterval(() => {
        setClick(true);
      }, 4000);
    }
  }

  function navP() {
    history.push("/");
  }

  function nav() {
    history.push("/Conversor");
  }

  return (
    <div>
      <div className="Perfil">
        <NotificationContainer />

        <a onClick={dialog}>
          <img src={picture} alt={name} />
        </a>
      </div>
      {coins.map(coin => (
        <ul key={coin._id} value={coin.name}>
          {coin.name} - {coin.description}
        </ul>
      ))}
      <br />
      <br />
      <button className="btn" onClick={nav}>
        Página principal
      </button>
    </div>
  );
}
export default connect(state => ({ picture: state.picture, name: state.name }))(
  Relatorio
);
