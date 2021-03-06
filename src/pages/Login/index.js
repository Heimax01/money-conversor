import React from 'react';
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

import './style.css';

import { connect } from 'react-redux';
// import { Container } from './styles';






function  Login  ({history,dispatch})  {

    const setImageName = (foto,nome) => {
        return {
            type: 'SET_IMAGENAME',
            foto,
            nome,
        };
        
      }
    
    
    const responseFacebook = (response) => {
        
      
      if(response.name){
        history.push('/Conversor');
        const foto = response.picture.data.url;
        const nome = response.name;
        dispatch(setImageName(foto,nome));
      }else{
        history.push('/');
      }
      
        
      }
    
      const responseGoogle = (response) => {
        
        if(response.w3){
          history.push('/Conversor');
          const foto = response.w3.Paa;
          const nome = response.w3.ig;
          dispatch(setImageName(foto,nome));
        }else{
          history.push('/');
        }
        
        
      }
    
      const responseGoogleError = (response) => {
        console.log(response);
      }

    return(
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

    </div>);
}
  export default connect(state => ({data: state.data}))(Login); 