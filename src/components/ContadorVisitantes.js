import React from "react";

function ContadorVisitantes (props) { 
  return (
    <body>
      <div id="contador">    
      <h3>CONTADOR DE USUÁRIOS</h3>
        <h3>
          A quantidade que gerou o arquivo CNAB240, até o dia de hoje, é de { props.cont } de usuários!
        </h3>
      </div>
    </body>
  )    
}
export default ContadorVisitantes;
