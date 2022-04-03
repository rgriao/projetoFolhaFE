import axios from "axios";

/*Para o lado do servidor (Node), ele se baseia no 
módulo HTTP Node.js nativo, enquanto no lado 
do cliente (o navegador), ele usa XMLHttpRequests.
O motivo pelo qual se cria uma instância é definir
padrões personalizados para o aplicativo.
axios.create abaixo cria uma configuração personalizada
*/
const instanciaAxios = axios.create({

  //baseURL: "http://localhost:8080",
  baseURL: "https://cnab240folhadepagamentoserver.herokuapp.com/",
  headers: {
    'Content-type': 'application/json'//na remessa dos dados
  }
});
export default instanciaAxios