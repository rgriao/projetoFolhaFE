import React, { Component } from "react";


class Caracteristicas extends Component {
  constructor(props) {
    super(props);    
  }     
render() {
  console.log("valor de caracteristica: " + this.props.caract)
    if(this.props.caract == 'true') {  
      return (       
        <div id="caract">
          <h2>Características do arquivo folha de salários</h2>         
          <p>
            Antes de selecionar o arquivo txt, o qual deverá conter os dados de uma folha de pagamento de salários,
            é necessário checar se ele obedece uma formatação interna obrigatória (posição dos dados e quantidade de campos).
            Assim, o referido arquivo deverá conter 35 campos separados, um do outro, por ";" (ponto e vírgula sem as aspas, sem o uso de ponto, barras, etc.)
            conforme exemplo fictício abaixo:
          </p>
          <p>
            Banco do Brasil;001;Brasuca Eireli;00000000000000;Rua das Neves;23;predio;Araraponga;14800;189;SP;1;45555599999;
            6918;3;15759;7; ;Maria da Silva Pires;30990294891125;Rua Sonia;514;casa;perdizes;Araraponga;14814;520;SP;6900;3;18499;
            1; ;18102021;234000; 
            <br />
            Atente-se que a última linha da folha não poderá terminar com ";"
          </p>
          <p>
            Desta forma, os campos do arquivo (e a quantidade MÁXIMA de caracteres em cada campo) são:
          </p>
          <p>
            Nome do Banco(30); Nº do Banco(3); Nome da Empresa(30); CNPJ(14); Endereço(30); Nº do Local(5);
            Complemento(15); Cidade(20); Cep(5); Complemento do Cep(3); Sigla do Estado(2);(1);
            Código do Convênio(20); Agência da Empresa(5); Dígito da Agência(1); Número da conta(12);
            Dígito da conta(1); Dígito Verificador da Agência(1); Nome do funcionário(30); CPF(14);
            Endereço(35); Nº do Local(5); Complemento (15); Bairro(15); Cidade(15); Cep(5); Complemento do Cep(3);
            Sigla do Estado(2); Agência do Funcionário(5); Dígito da Agência(1); Número da Conta(12); Dígito da Conta(1);
            Digito Verificador da Agência(1); Data do Pagamento(8); Valor do Pagamento(15);
          </p>
          <br /><br /><br />
        </div>    
      );   
    }else {
    return null;
    } 
  }
}
export default Caracteristicas;