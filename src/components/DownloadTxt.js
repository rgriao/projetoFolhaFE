export function downTxtFile(txtfinal) { 

    const geraTxtFinal = new Blob([txtfinal]); 
    //console.log("Entrou no download " + txtfinal)
    var blobObj;

      geraTxtFinal.text().then(text => {      
      text   = text.replace(/(,)+/g,"").toUpperCase();        
      blobObj = new Blob([text]);      
      const element = document.createElement("a");
      element.href = URL.createObjectURL(blobObj);
      element.download = "CNAB240.txt";
      document.body.appendChild(element);
      element.click();//com isso o click simulado no botão ocorre! 
      document.body.removeChild(element);  
  });
}