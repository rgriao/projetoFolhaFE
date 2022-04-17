import { downTxtFile } from "../components/Processamento/DownloadTxt";
import instanciaAxios from "../apiAxios";

class dataService {     

  findOne() {     
    var visitantes = "";      
    instanciaAxios.get('/conta').then(resp => {                  
      if (resp.data.contador){     
        visitantes = resp.data.contador;
        return(visitantes);
      }      
    });      
    }
   create(data) {     
     instanciaAxios.post('/add', data).then(resp => {      
      if (resp.data){
      alert("Prezado usuário, o download do seu arquivo CNAB240.txt (folha de Pagamento) será realizado automaticamente, basta verificar sua pasta de download!")
      downTxtFile(resp.data);
      }
      });
  }
  bulkCreate(data) {        
      instanciaAxios.post('/add', data).then(resp => {  
      if (resp.data){
      alert("Prezado usuário, o download do seu arquivo CNAB240.txt (folha de Pagamento) será realizado automaticamente, basta verificar sua pasta de download!")    
      downTxtFile(resp.data);
      }
      });
  }  
}
export default new dataService();