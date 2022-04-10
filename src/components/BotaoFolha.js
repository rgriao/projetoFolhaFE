import React, { Component } from "react";
import ReceberFolha from "./ReceberFolha";

function BotaoFolha () {   
    return (         
    <body>
    <div id="centralizar">
        <label htmlFor='selecao-arquivo'>Selecione o arquivo txt &#187;</label>
        <input id='selecao-arquivo' type='file' onChange={(e) => ReceberFolha(e)} />             
    </div>  
    </body>    
    )  
  }
//}
export default BotaoFolha;