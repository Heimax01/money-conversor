import React from 'react';
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

import './style.css';

// import { Container } from './styles';

export default function Login({history}) {

    const responseFacebook = (response) => {
        history.push('/Conversor');
      }
  
      const responseGoogle = (response) => {
        history.push('/Conversor');
      }

      const responseGoogleError = (response) => {
        console.log(response);
      }

  return (
    <div className="Login">
    
    <h1>Login com Facebook ou Google</h1>
        <br />
        <br />


        <FacebookLogin
        appId="4102776476459877"
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="LOGIN COM FACEBOOK"
        />
        <br />
        <br />


        <GoogleLogin
        clientId="40775526312-dmc1moom94vrsgm0pp57uogo5k0v54hq.apps.googleusercontent.com" 
        buttonText="LOGIN COM GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogleError}
        />

    </div>
  );
}
