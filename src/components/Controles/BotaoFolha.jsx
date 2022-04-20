import React from "react";
import ReceberFolha from "../Processamento/ReceberFolha";

function BotaoFolha () {   
  return (     
  <div id="centralizar">
      <label htmlFor='selecao-arquivo'>Selecione o arquivo txt &#187;</label>
      <input id='selecao-arquivo' type='file' onChange={(e) => ReceberFolha(e)} />             
  </div>  
  )  
}
//}
export default BotaoFolha;