import React from 'react';
import {StyledNavbar} from '../Processamento/Styles'
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';
 
const Navbar = () => {
 return (
 <StyledNavbar>
    <LoginButton/>
    <LogoutButton/>
 </StyledNavbar>
 )
}
 
export default Navbar