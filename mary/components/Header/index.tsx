import {Container} from "./Header";

export function Header(){
   return(
      <Container>
         <div className="container-header">
            <div className="header-logo"><h1>Maria Ismária</h1></div>
            <div className="header-menu" id="inicio">
               <nav>
                  <ul>
                     <a href="#inicio"><li>Início</li></a>
                     <a href="#sobre"><li>Sobre</li></a>
                     <a href="#qualificacoes"><li>Qualificações</li></a>
                     <a href="#experiencias"><li>Experiências</li></a>
                     <a href="#contato"><li>Contato</li></a>
                  </ul>
               </nav>
            </div>
         </div>
      </Container>
         
   )
}