import React from "react";

function Corpo () { 
  return (
    <body>          
      <div id="texto-titulo">
          <h1>Gerador de Arquivo CNAB240 no Padrão FEBRABAN 240 Posições</h1>
        </div>
        <div id="texto">
          <h2>Características do arquivo folha de salários</h2>
          <p>
            Antes de selecionar o arquivo txt, o qual deverá conter os dados de uma folha de pagamento de salários,
            é necessário checar se ele obedece uma formatação interna obrigatória (posição dos dados e quantidade de campos) .
          </p>
          <p>
            Assim, o referido arquivo deverá conter 35 campos separados, um do outro, por ";" (ponto e vírgula sem as aspas, sem o uso de ponto, barras, etc.)
            conforme exemplo fictício abaixo:
          </p>
          <p>
            Banco do Brasil;001;Brasuca Eireli;00000000000000;Rua das Neves;23;predio;Araraponga;14800;189;SP;1;45555599999;
            6918;3;15759;7; ;Maria da Silva Pires;30990294891125;Rua Sonia;514;casa;perdizes;Araraponga;14814;520;SP;6900;3;18499;
            1; ;18102021;234000;
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
        </div>
        <div id="obs">
          <h2>Observações:</h2>
          <ol>
            <li>O campo Código do nº do Convênio o seu Banco deverá lhe fornecer.</li>
            <li>O campo Dígito Verificador da Agência (se tiver dois dígitos então será o segundo,
              se houver apenas um dígito então deixar um espaço em branco entre os pontos e vírgulas, assim ; ;)</li>
            <li>O campo seguinte ao campo Sigla do Estado(2);(1); deverá ter um dígito. Se os pagamentos
              forem feitos com débito em conta corrente da empresa deverá conter o número 1.</li>
            <li>Se em um campo não existir o dado, então deixar apenas um espaço em branco entre os pontos e vírgulas, assim ; ;</li>
            <li>IMPORTANTE: após a menção do valor do último registro da folha (última linha), sempre
              DEVERÁ FICAR SÓ COM O VALOR SEM O ";". Ficanco assim a última linha: Digito Verificador da Agência(1);
              Data do Pagamento(8); Valor do Pagamento(15) As linhas anteriores à última deverão terminar sempre com ponto e vírgula.</li>
            <li>Os dois últimos dígitos do valor do pagamento corresponderão aos centavos (NÃO coloque vírgula para separá-los). Veja o exemplo acima
              que corresponde a R$ 2.340,00 (234000).</li>
            <li>Siga rigorosamente a formatação do exemplo fictício acima.</li>
            <li>Após a conferência de seu arquivo, clique no botão acima e aguarde a geração automática do download.</li>
            <li>Se o download falhar tente atualizar a página previamente.</li>
            <li>De posse do arquivo final gerado, confira-o e importe-o para o seu Banco.</li>
            <li>Na confecção do arquivo não poderá haver caracteres especiais (ex.:
              “Ç”, “?”, /, etc.) e acentuação gráfica (ex.: “Á”, “É”, “Ê”, etc).</li>
          </ol>
        </div>
        <div id="info">
          <h2>Informações Gerais:</h2>
          <p>
            Garantimos que nenhuma informação prestada pelo usuário ficará armazenada em Banco de Dados. Assim, a sua folha de pagamento
            é adicionada e deletada do servidor, logo após a geração do arquivo final pelo sistema. PORTANTO, NÃO ARMAZENAMOS INFORMAÇÃO ALGUMA.
            Após clicar no botão e gerar seu arquivo, há necessidade de atualizar a página para usá-la novamente!
            Não nos responsabilizamos por qualquer erro provocado por falhas no arquivo disponibilizado ao sistema ou outro qualquer.
            Contato para críticas/sugestões pelo e-mail: r_griao@hotmail.com ou pelo e-mail: rodolfopgriao@gmail.com.
            O uso deste sistema será gratuito por prazo indeterminado, podendo ser alterada esta política a qualquer tempo e sem prévio aviso!
          </p>    
        </div>
    </body>
  )    
}
export default Corpo;