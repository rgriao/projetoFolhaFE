import React, { Component } from "react";

class Informacoes extends Component {
  constructor(props) {
    super(props);    
  }     
render() {
  console.log("valor de Informacoes: " + this.props.info)
    if(this.props.info == 'true') {     
  return (       
    <div id="info">
          <h2>Informações Gerais:</h2>
          <p>
            Garantimos que nenhuma informação prestada pelo usuário ficará armazenada em Banco de Dados. Assim, a sua folha de pagamento
            é adicionada e deletada do servidor, logo após a geração do arquivo final pelo sistema. PORTANTO, NÃO ARMAZENAMOS INFORMAÇÃO ALGUMA, o que gera maior segurança ao usuário.            
            <br /><br />
            Após clicar no botão e gerar seu arquivo, há necessidade de atualizar a página para usá-la novamente!
            <br /><br />
            Contato para críticas/sugestões pelo e-mail: r_griao@hotmail.com ou pelo e-mail: rodolfopgriao@gmail.com.            
          </p>    
        </div>		 
  );   
}else {
  return null;
  } 
}
}
export default Informacoes;