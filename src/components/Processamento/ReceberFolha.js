import dataService from "../../services/apiservice";

function ReceberFolha (e) {  
  var camposTabelaFolha = [
    //informações da empresa
    "nomedobanco",
    "codigodobanco",
    "nomedaempresa",
    "cnpj",
    "enderecoempresa",
    "ndolocalempresa",
    "complementoempresa",
    "cidadeempresa",
    "cepempresa",
    "complementodocepempresa",
    "sigladoestadoempresa",
    "debitocontaempresa",
    "codigoconvenio",
    "agenciaempresa",
    "digitodaagenciaempresa",
    "ndacontaempresa",
    "digitodacontaempresa",
    "digitoverificadoragcontaempresa",
    //informações dos funcionários
    "nomedofuncionario",
    "cpfdofuncionario",
    "enderecofuncionario",
    "ndolocalfuncionario",
    "complementofuncionario",
    "bairrofuncionario",
    "cidadefuncionario",
    "cepfuncionario",
    "complementodocepfuncionario",
    "sigladoestadofuncionario",
    "agenciafuncionario",
    "digitodaagenciafuncionario",
    "ndacontafuncionario",
    "digitodacontafuncionario",
    "digitoverificadordaagcontafuncionario",
    "datadopagamento",
    "valordopagamento"
  ]
  var reader = new FileReader();

    var file = e.target.files[0];
    var text = [];
    reader.onload = () => {
      text = reader.result.toString('ANSI').split(";"); //'UTF8'
      //console.log(text.length);
      const qdeobjetos = text.length / 35;//qde colunas         
      var arrayTabelaFolha = [];
      var dados = [];
      var resultado = [];
      var grupo = 0;
      var w = 0;
      var y = 0;
      var x = 0;

      for (w = 0; w < qdeobjetos; w++) {
        for (x = 0; x < 35; x++) {
          arrayTabelaFolha.push([camposTabelaFolha[x], (text[y])]);
          y++;
        }
        x = 0;
      }
      dados = separarEmGrupoDeRegistro(arrayTabelaFolha, 35);
      //separa o array em index para cada grupo de 35 registros 
      function separarEmGrupoDeRegistro(base, maximo) {
        for (var indice = 0; indice < base.length; indice++) {
          if (resultado[grupo] === undefined) {
            resultado[grupo] = [];
          }
          resultado[grupo].push(base[indice]);
          if ((indice + 1) % maximo === 0) {
            grupo = grupo + 1;
          }
        }
        return resultado;
      }
      //transforma cada registro index em um objeto assim:
      //{ agenciaempresa: "0001" ... }
      function TransfEmObjetos() {
        var bodyTransfEmObjetos = [];
        for (var i = 0; i < dados.length; i++) {
          bodyTransfEmObjetos.push(Object.fromEntries(dados[i]));
        }        
        return bodyTransfEmObjetos;
      }
      
      dataService.bulkCreate(TransfEmObjetos());       
    }
    if (file) {
      reader.readAsText(file);
    }
  }  
export default ReceberFolha;