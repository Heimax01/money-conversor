import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';




import Login from './pages/Login';
import AddCoin from './pages/AddCoin';
import Converter from './pages/Converter';
import Relatorio from './pages/Relatorio';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Conversor" component={Converter} />
                <Route path="/Coin" component={AddCoin} />
                <Route path="/Relatorio" component={Relatorio} />
            </Switch>
        </BrowserRouter>
    );
}