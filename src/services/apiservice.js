import { downTxtFile } from "../components/DownloadTxt";
import instanciaAxios from "../apiAxios";
//import consts from '../consts';
//Na porta "http://localhost:8080

class dataService {
  
   findAll() {
    return instanciaAxios.get('/'); //torna a pesquisa na url dinamica
    //fica assim "http://localhost:8080/api/detalhesegmentoas"
    //para funcionar a porta 8080 tem que estar aberta previamente 
    //pelo BackEnd do banco de dados
    //${consts.API_URL} para o heroku
  }   
   create(data) {
     //console.log(data + " O FE requisitou o serviço add do bulkCreate!");
     instanciaAxios.post('/add', data).then(resp => {
      //console.log(`O Servidor ${resp.data}`);
      if (resp.data){
      alert("Prezado usuário, o download do seu arquivo CNAB240.txt (folha de salários) será feito automaticamente, basta enviá-lo ao seu Banco!")
      //ao clicar em ok do alert, mostrar o botão de download.
      downTxtFile(resp.data);
      }
      });
  }
  bulkCreate(data) {
    //console.log(data + " O FE requisitou o serviço add do bulkCreate!");
    instanciaAxios.post('/add', data).then(resp => {
    //console.log(`O Servidor ${resp.data}`);
    if (resp.data){
    alert("Prezado usuário, o download do seu arquivo CNAB240.txt (folha de salários) será feito automaticamente, basta enviá-lo ao seu Banco!")
    //ao clicar em ok do alert, mostrar o botão de download.
    downTxtFile(resp.data);
    }
    });
  }
   destroy(id) {
    return instanciaAxios.delete(`/del/:${id}`);
  }
}
export default new dataService();