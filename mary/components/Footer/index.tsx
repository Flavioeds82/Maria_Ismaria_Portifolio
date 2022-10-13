import {Container} from "./Footer";

export function Footer(){
   return(
      <Container>
         <div className="container-footer">
            <div className="footer-left">
               <a href="https://drive.google.com/file/d/1IJ1ycRXhSrHaOPdAwq_bi43rzQ4ZBjCr/view?usp=sharing" target="_blank"><button>Download CV</button></a>
            </div>
            <div className="footer-copy">
               <h4>Criado por Flávio Eduardo</h4>
               <p>Todos os direitos reservados &copy; 2022</p>
            </div>
            <div className="footer-right">
               <a href="#inicio"><button>Voltar ao Topo</button></a>
            </div>
            
         </div>
      </Container>
         
   )
} 