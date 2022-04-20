import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {ButtonOut} from '../Processamento/Styles';
 
const LogoutButton = () => {
 const {isAuthenticated, logout} = useAuth0()
 return( 
 isAuthenticated && (
 <ButtonOut onClick={() => logout({ returnTo: window.location.origin })}>
  Sair
 </ButtonOut>
 )
 )
}
 
export default LogoutButton