import React from "react";

function ContadorVisitantes (props) { 
  return (
    <>
      <div id="contador">    
      <h1>Contador de Usuários</h1>
        <h3>
          A quantidade de usuários que gerou o arquivo CNAB240, até o dia de hoje, é de: { props.cont } 
        </h3>
      </div>
    </>
  )    
}
export default ContadorVisitantes;
