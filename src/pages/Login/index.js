import React from 'react';
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

// import { Container } from './styles';

export default function Login() {

    const responseFacebook = (response) => {
        console.log(response);
      }
  
      const responseGoogle = (response) => {
        console.log(response);
      }


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
        clientId="40775526312-dmc1moom94vrsgm0pp57uogo5k0v54hq.apps.googleusercontent.com" 
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />

    </>
  );
}
