import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {ButtonLogin} from '../Processamento/Styles';
 
const LoginButton = () => {
 const {isAuthenticated, loginWithPopup} = useAuth0()
 return(
 !isAuthenticated && (
 <ButtonLogin onClick={() => loginWithPopup()}>
  Entrar
 </ButtonLogin>
 )
 )
} 
export default LoginButton