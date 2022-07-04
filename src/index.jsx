import "./index.css"
import "./components/Layout/card.css"
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import BotaoFolha from "./components/Controles/BotaoFolha.jsx";
import Navbar from './components/Controles/Navbar.jsx'; 
import Profile from "./components/Controles/Profile.jsx";
import Caracteristicas from "./components/Marcação/Caracteristicas";
import Observacoes from "./components/Marcação/Observacoes";
import Informacoes from "./components/Marcação/Informacoes";
import Politicas from "./components/Marcação/Politicas";
import Rodape from "./components/Marcação/Rodape";
import instanciaAxios from "./apiAxios"; 
import * as serviceWorker from "./serviceWorker";
import {Auth0Provider} from '@auth0/auth0-react';

const Domain = process.env.Domain
const Client_ID = process.env.Client_ID

var textInicial = ["Prezado usuário, antes de selecionar o seu arquivo txt, o qual deverá conter os dados de uma folha de pagamento de salários,",
       " é necessário inteirar-se das orientações existentes nos cards laterais desta página, clicando nos botões 'Queira verificar'.",
       " Após a leitura, e eventual correção necessária do seu arquivo, você estará apto a selecioná-lo clicando no botão de cor laranja acima!"]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {obs: 'false'}
    this.state = {caract: 'false'}
    this.state = {info: 'false'}
    this.state = {pol: 'false'}
    this.state = {contador: ""}
    this.state = {textinicial: textInicial}

  }
  async componentDidMount() {
    instanciaAxios.get('/conta').then(resp => {             
        if (resp.data.contador){    
          var contador =  resp.data.contador;      
          this.setState({contador});                   
        }
      });  
    }
  onClickCaract(e) {
    this.setState({   
      textinicial: "",       
      obs: 'false',  
      info: 'false',
      pol: 'false', 
      caract: 'true'
    });
  }  
  onClickObs(e) {
    this.setState ({
      textinicial: "",
      caract: 'false',
      info: 'false',
      pol: 'false',
      obs: 'true'      
    });
  }  
  onClickInfo(e) {
    this.setState ({
      textinicial: "",
      caract: 'false',
      obs: 'false', 
      pol: 'false',
      info: 'true'      
    });
  }  
  onClickPol(e) {
    this.setState ({
      textinicial: "",
      caract: 'false',
      obs: 'false', 
      info: 'false', 
      pol: 'true'   
    });
  }  
  render() {
        return(
  <Fragment>
    <div>
     <Navbar/>    
        <Profile/>
     </div>
        <div className="Titulo">
        
        </div>                    
           <BotaoFolha />  
           <div className="InformacaoInicial">  
           <p>{this.state.textinicial}</p>
           </div>
           <div className="Card">         
             <div className="Caracter">
                <h2>Características do arquivo</h2> 
                
                <button onClick={this.onClickCaract.bind(this)}>Queira verificar!</button >
             </div> 
            </div>
             <div>
                <Caracteristicas caract={this.state.caract} />
             </div>                         
           <div className="Card">         
              <div className="Observacoes">
                <h2>Observações importantes</h2>

                <button onClick={this.onClickObs.bind(this)}>Queira verificar!</button >                 
              </div>  
           </div>  
           <div>
           <Observacoes obs={this.state.obs} /> 
           </div>
           <div className="Card">         
              <div className="Informacoes">
                <h2>Informações Gerais</h2>          
                        
                <button onClick={this.onClickInfo.bind(this)}>Queira verificar!</button >                 
              </div>  
          </div>  
          <div>
          <Informacoes info={this.state.info} /> 
          </div>
          <div className="Card">         
              <div className="Politicas">
                <h2>Políticas de Uso</h2>          
                      
                <button onClick={this.onClickPol.bind(this)}>Queira verificar!</button >                 
              </div>  
          </div> 
          <div>
          <Politicas pol={this.state.pol} />   
          </div>
          <Rodape cont={this.state.contador}/>
    </Fragment> 
  )                 
  }
}
ReactDOM.render(
  <Auth0Provider
    Domain={Domain}
    Client_ID={Client_ID}
    RedirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
export default App;