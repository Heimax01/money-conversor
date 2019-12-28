import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';


import Login from './pages/Login';
import AddCoin from './pages/AddCoin';
import Converter from './pages/Converter';
import Relatorio from './pages/Relatorio';
import Perfil from './pages/Perfil/Perfil';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch history={history}>
                <Route path="/" exact component={Login} />
                <Route path="/Conversor" component={Converter} />
                <Route path="/Coin" component={AddCoin} />
                <Route path="/relatorio" component={Relatorio} />
                <Route path="/Perfil" component={Perfil} />
            </Switch>
        </BrowserRouter>
    );
}