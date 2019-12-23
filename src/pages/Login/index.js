import React from 'react';
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

import './style.css';

import { connect } from 'react-redux';
// import { Container } from './styles';



const setImageName = (foto,nome,response) => {
    return {
        type: 'SET_IMAGENAME',
        foto,
        nome,
    };
    
  }


const responseFacebook = ({history,dispatch},response) => {
    console.log(response);
    const foto = response.data.picture.url;
    const nome = response.name;
    
    dispatch(setImageName(foto,nome));
  }

  const responseGoogle = ({history},response) => {
    history.push('/Conversor');
    console.log(response);
  }

  const responseGoogleError = (response) => {
    console.log(response);
  }


const Login = ({history}) => (

    
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
  export default connect(state => ({data: state.data}))(Login); 