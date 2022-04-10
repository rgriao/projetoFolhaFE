import axios from "axios";

const instanciaAxios = axios.create({

  //baseURL: "http://localhost:8080",
  baseURL: "https://cnab240folhadepagamentoserver.herokuapp.com/",
  headers: {
    'Content-type': 'application/json'//na remessa dos dados
  }
});
export default instanciaAxios