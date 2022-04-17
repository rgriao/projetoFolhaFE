import React, { Component } from "react";

class Politicas extends Component {
  constructor(props) {
    super(props);    
  }     
render() {
  console.log("valor de Politicas: " + this.props.pol)
    if(this.props.pol == 'true') {    
  return (       
    <div id="politic">
          <h2>TERMO DE ADESÃO DE LICENÇA DE USO DO SOFTWARE - CNAB240 FOLHA DE PAGAMENTO</h2>
          <ol>
          <li>
          OBJETO - Este Termo de Uso tem como objetivo definir as regras a serem seguidas pelos usuários para utilização do Software.
          Ao aceitar eletronicamente o presente termo, os usuários aceitam todas as cláusulas a seguir expostas, incluindo a política de privacidade, e estarão automaticamente aderindo e concordando em se submeter integralmente aos termos e condições aqui relacionados.
          O Software e seus módulos estão disponibilizados aos usuários na modalidade SaaS – “Software as a Service”, de forma não exclusiva e intransferível, estando acessível através da Internet, de modo que nenhuma parte do código ou programa será instalado em servidores ou máquinas do usuário, dispensando igualmente a nossa presença ou de qualquer alocação pessoal ou de recurso físico  nas dependências da empresa ou na localização do usuário.
          Considerando que o Software estará totalmente acessível online, caberá ao usuário providenciar seus próprios equipamentos, programas e estrutura para o acesso e uso do Software via internet, não nos responsabilizando pela qualidade, velocidade de acesso, manutenção e funcionamento correto da rede interna ou dos equipamentos.
          </li>  
          <br />        
          <li>
          RISCOS E RESPONSABILIDADES - Nós e os usuários concordam que todo e qualquer software é uma espécie de produto que está sempre em constante atualização e aperfeiçoamento, possuindo, sempre e incondicionalmente, aspectos a serem melhorados, o que não podem ser considerados em si como falhas ou defeitos.
          O Software é licenciado e aceito no estado técnico e de perfeição em que se encontra, razão pela qual não respondemos por qualquer garantia, inclusive de qualidade, de funcionamento da internet, de produtividade ou resultados.
          Tanto nós quanto o usuário declaram ter plena ciência de que o uso de qualquer sistema de informática, seja em rede interna ou na internet, está sujeito a ataques de terceiros, não se responsabilizando nenhuma das partes perante a parte contrária ou terceiros por quaisquer danos causados por invasões perpetradas por quaisquer terceiros, tais como hackers.
          O usuário é o único e exclusivo responsável pelo uso do Software.
          </li>
          <br />
          <li>
          PROPRIEDADE INTELECTUAL - Os direitos de propriedade intelectual e industrial de quaisquer das criações ou inovações geradas, desenvolvidas ou modificadas em razão deste Termo de Uso, sejam elas: marcas e outros sinais distintivos, relatórios, pesquisas, invenções, modelos de utilidade, desenhos industriais, programas de computador e seu código-fonte, tecnologia em geral e obras de qualquer espécie, são e serão atribuídos única e exclusivamente a nós, no Brasil ou no exterior, não cabendo quaisquer direitos ao usuário.
          Pertencem, e continuam a pertencer a nós todos os direitos de propriedade intelectual que recaiam sobre o Software.
          Nós garantimos ser o único titular de todos os direitos de propriedade intelectual que recaiam sobre o Software, isentando o usuário de qualquer reclamação ou questionamento neste sentido.
          </li>
          <br />
          <li>          
          DISPOSIÇÕES GERAIS - O uso deste software será gratuito e por prazo indeterminado. Porém, nos reservamos o direito de alterar esta política a qualquer tempo e sem prévio aviso.
          </li>
          </ol>  
          <br /><br /><br /> 
  </div>
  );    
}else {
  return null;
  } 
}
}
export default Politicas;