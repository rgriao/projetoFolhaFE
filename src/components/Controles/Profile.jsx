import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {ProfileBox, Image, P} from '../Processamento/Styles';
//Este componente visa recuperar as informações de perfil associada ao usuário logado 
const Profile = () => {
    const {user, isAuthenticated} = useAuth0()
     return(
      isAuthenticated && (
      <ProfileBox> 
        <Image src={user.picture} alt={user.name}/>
        <P>Name: {user.name}</P>
        <P>Username: {user.nickname}</P>
        <P>Email: {user.email}</P>
      </ProfileBox>)
     )
    }
    

export default Profile;