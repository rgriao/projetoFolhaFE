import React, { Component } from "react";

class Rodape extends Component {
  constructor(props) {
    super(props);    
  }     
render() {
  return (       
    <footer className="rodape">
        &copy; Todos os direitos reservados 2022 / Usuários efetivos: { this.props.cont }
    </footer>    
  )    
}
}
export default Rodape;