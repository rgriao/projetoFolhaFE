import React, { Component } from "react";
import BotaoFolha from "./components/BotaoFolha";
import Corpo from "./components/Corpo";
import ContadorVisitantes from "./components/ContadorVisitantes";
import Rodape from "./components/Rodape";
import instanciaAxios from "./apiAxios";

class App extends Component { 
    state = {
        contador: ""
    }
async componentDidMount() {
    instanciaAxios.get('/conta').then(resp => {             
        if (resp.data.contador){    
          var contador =  resp.data.contador;      
          this.setState({contador});                   
        }
      });  
    }
    render() {      
      return (      
        <>
        <BotaoFolha />        
        <Corpo />   
        <ContadorVisitantes cont={this.state.contador}/>        
        <Rodape />
        </>  
      );      
      }
}
export default App;