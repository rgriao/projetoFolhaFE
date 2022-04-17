import React, {Component} from "react";

class Observacoes extends Component {
    constructor(props) {
      super(props);    
    }   
render() {
  console.log("valor de Observacoes: " + this.props.obs)
    if(this.props.obs == 'true') {    
        return (       
              <div id="obs">
              <h2>Observações:</h2>
              <ol>
                <li>O campo Código do nº do Convênio, o seu Banco deverá lhe fornecer.</li>
                <li>O campo Dígito Verificador da Agência (se tiver dois dígitos então será o segundo,
                se houver apenas um dígito então deixar um espaço em branco entre os pontos e vírgulas, assim ; ;)</li>
                <li>O campo seguinte ao campo Sigla do Estado(2);(1); deverá ter um dígito. Se os pagamentos
                forem feitos com débito em conta corrente da empresa deverá conter o número 1.</li>
                <li>Se em um campo não existir o dado, então deixar apenas um espaço em branco entre os pontos e vírgulas, assim ; ;</li>
                <li>Após a menção do valor do último registro da folha (última linha), sempre
                DEVERÁ FICAR SÓ COM O VALOR SEM O ";". Ficanco assim a última linha: Digito Verificador da Agência(1);
                Data do Pagamento(8); Valor do Pagamento(15) As linhas anteriores à última deverão terminar sempre com ponto e vírgula.</li>
                <li>Os dois últimos dígitos do valor do pagamento corresponderão aos centavos (NÃO coloque vírgula para separá-los). Veja o exemplo acima
                que corresponde a R$ 2.340,00 (234000).</li>
                <li>Siga rigorosamente a formatação do exemplo fictício acima.</li>
                <li>Após a conferência de seu arquivo, clique no botão acima e aguarde a geração automática do download.</li>
                <li>Se o download falhar, tente atualizar a página previamente.</li>
                <li>De posse do arquivo final gerado, confira-o e importe-o para o seu Banco.</li>
                <li>Na confecção do arquivo não poderá haver caracteres especiais (ex.:
                “Ç”, “?”, /, etc.) e acentuação gráfica (ex.: “Á”, “É”, “Ê”, etc).</li>
                <br /><br /><br />
              </ol>
              </div>
            ); 
    }else {
    return null;
    } 
  }
}
export default Observacoes;