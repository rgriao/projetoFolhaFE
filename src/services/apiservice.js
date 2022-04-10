import { downTxtFile } from "../components/DownloadTxt";
import instanciaAxios from "../apiAxios";

class dataService {     
  findOne() {     
  var visitantes = "";  
    console.log("🔥🔥🔥 Entrou no findone get do FE: 🔥🔥🔥");
    instanciaAxios.get('/conta').then(resp => {             
      if (resp.data.contador){       
        console.log("🔥🔥🔥 RETORNOU do findone get do FE: 🔥🔥🔥");   
        console.log("O contador é de: " + resp.data.contador)        
        visitantes = resp.data.contador;
        console.log("Visitantes é de : " + visitantes);
        return(visitantes);
      }      
   });      
  }
   create(data) {     
     instanciaAxios.post('/add', data).then(resp => {      
      if (resp.data){
      alert("Prezado usuário, o download do seu arquivo CNAB240.txt (folha de salários) será feito automaticamente, basta enviá-lo ao seu Banco!")
      downTxtFile(resp.data);
      }
      });
  }
  bulkCreate(data) {    
    instanciaAxios.post('/add', data).then(resp => {    
    if (resp.data){
      alert("Prezado usuário, o download do seu arquivo CNAB240.txt (folha de salários) será feito automaticamente, basta enviá-lo ao seu Banco!")    
      downTxtFile(resp.data);
    }
    });
  }
  
}
export default new dataService();