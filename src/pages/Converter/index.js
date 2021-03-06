import React, { useState, useEffect } from "react";
import toaster from "toasted-notes";
import api from "../../services/api";
import "../Notification.css";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "../../App.css";
import "./Perfil.css";

import { connect } from "react-redux";

// import { Container } from './styles';

function Converter({ history, picture, name }) {
  useEffect(() => {
    async function loadCoins() {
      const response = await api.get("/listcoins");
      setCoins(response.data);
    }

    loadCoins();
  }, []);

  const [click, setClick] = useState(true);
  const [coins, setCoins] = useState([]);
  const [moedaA, setMoedaA] = useState("");
  const [moedaB, setMoedaB] = useState("");
  const [moedaAValor, setMoedaAValor] = useState("");
  const [moedaBValor, setMoedaBValor] = useState(0);

  const converter = () => {
    if (moedaB === "" || moedaA === "") {
      toaster.notify("Escolha uma moeda");
    } else {
      let de_para = `${moedaA}_${moedaB}`;

      let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=dc8365a2147573c09ad1`;

      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(json => {
          let cotacao = json[de_para];
          let moedaBValor = (parseFloat(moedaAValor) * cotacao).toFixed(2);
          if (moedaBValor === "NaN") {
            toaster.notify("Moeda inexistente");
            setMoedaBValor("0");
          } else {
            setMoedaBValor(moedaBValor);
          }
        });
    }
  };
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
    history.push("/Coin");
  }

  function nav2() {
    history.push("/Relatorio");
  }

  return (
    <div className="main">
      <div className="Perfil">
        <NotificationContainer className="logout" />
        <a onClick={dialog}>
          <img src={picture} alt={name} />
        </a>
      </div>

      <form className="form">
        <h1>Conversor de Moedas</h1>

        <br />
        <br />
        <label>Moeda a comprar</label>
        <select className="slt" onChange={e => setMoedaA(e.target.value)}>
          <option>Escolha uma moeda a comprar</option>
          {coins.map(coin => (
            <option key={coin._id} value={coin.name}>
              {coin.name} - {coin.description}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>Moeda a vender</label>
        <select className="slt" onChange={e => setMoedaB(e.target.value)}>
          <option>Escolha uma moeda a vender</option>
          {coins.map(coin => (
            <option key={coin._id} value={coin.name}>
              {coin.name} - {coin.description}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>Quantidade que irá comprar</label>
        <input
          type="text"
          value={moedaAValor}
          onChange={e => setMoedaAValor(e.target.value)}
        />
      </form>
      {moedaBValor > 0 && (
        <h2>
          <center>{moedaBValor}</center>
        </h2>
      )}
      <br />
      <button className="btn" onClick={converter}>
        Converter
      </button>

      <br />
      <br />
      <div className="btns">
        <button className="btn2" id="cad" onClick={nav}>
          Cadastrar uma moeda
        </button>
        <button className="btn2" id="rel" onClick={nav2}>
          Relatório
        </button>
      </div>
    </div>
  );
}
export default connect(state => ({ picture: state.picture, name: state.name }))(
  Converter
);
