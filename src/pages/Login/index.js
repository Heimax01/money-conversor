import React, {useEffect, useState} from 'react';


// import { Container } from './styles';

export default function Relatorio() {


  return (
    <>
    
    <h1>LOGIN COM FACEBOOK OU GOOGLE</h1>

        <FacebookLogin
        appId="4102776476459877"
        fields="name,email,picture"
        callback={responseFacebook}
        />
        <br />
        <br />


        <GoogleLogin
        clientId="AIzaSyC9PYObCBnz3wImFyrb6N1lF2MJdBnUlcI" 
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />

    </>
  );
}
