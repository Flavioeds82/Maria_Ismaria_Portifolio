import { Container } from "./Body";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import AOS from 'aos';
import 'aos/dist/aos.css';


export function Body(){

   useEffect(()=>{
      AOS.init({duration: 1500});
   }, []);

   return(
      <Container>

         <section className="body" id="inicio">
            <div className="container-body">
               <div className="frame" data-aos="fade-up-left"></div>
               <div className="text">
                  <h1 data-aos="fade-up-left">Olá, sejam bem-vindos!!!</h1>
                  <h3 data-aos="fade-up-left">Este é o meu Portifólio, onde conto um pouco da minha trajetória profissional.</h3>
               </div>
            </div>
         </section>

         <section className="about" id="sobre">
            <div className="container-about">
               <div className="about-left"></div>
               <div className="about-right">
                  <h1 data-aos="zoom-in">Sobre mim</h1>
                  <div className="frame-about" data-aos="fade-up-left"></div>
                  <h3 data-aos="fade-up-left">Formada em Letras: Português/Literatura. Comecei minha jornada como educadora ao completar o curso de Formação de Professores em 2016. Trabalhei com todos os segmentos inclusive na educação para jovens e adultos(EJA). Atualmente trabalho com fundametal I e fundamental II, mas estou sempre em busca de novos desafios e oportunidades.</h3>
               </div>
            </div>
         </section>

         <section className="qualificacoes" id="qualificacoes">
            <div className="container-quali">
               <div className="quali-title" data-aos="zoom-in"><h1>Qualificações</h1></div>
               <div className="quali-grid">
                  <div className="grid-item" data-aos="fade-up-right">
                     <h2>Licenciatura em Letras: Português/Literatura</h2>
                     <div className="grid-content">
                        <div className="grid-frame1"></div>
                        <div className="grid-text">
                           <p>Curso superior de Licenciatura em Letras. <br/>O licenciado em Letras Português possui competência e habilitação para o exercício do magistério em Língua e em Literatura nos Ensino fundamental, Médio, e Superior. Compreende e aplica diferentes teorias e métodos de ensino que permitem a transposição didática dos conhecimentos sobre língua e literatura. Desenvolve habilidades de uso de novas tecnologias e compreende sua formação profissional como processo contínuo, autônomo e permanente.</p>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item" data-aos="fade-up-left">
                     <h2>Formação de Professores</h2>
                     <div className="grid-content">
                        <div className="grid-frame2"></div>
                        <div className="grid-text" id="text2">
                           <p>Curso de Formação de Professores(2016) com objetivo a capacitação através de conhecimentos teóricos e práticos na área da educação para o nível fundamental I.</p>
                        </div>
                     </div>
                     
                  </div>
                  
               </div>
            </div>
         </section>

         <section className="experiencia" id="experiencias">
            <div className="container-exp">
               <div className="exp-title" data-aos="zoom-in"><h1>Experiências</h1></div>
               <div className="exp-content">
                  <div className="content-left"  data-aos="fade-up-right"></div>
                  <div className="content-right">
                     <div className="exp-card" data-aos="fade-up-left">
                        <h3>Professora do ensino fundamental I </h3><h4> Centro Educacional Silvia Tupinambá(CEST) <br/> 2016 - 2020 </h4>
                     </div>
                     <div className="exp-card" data-aos="fade-up-left">
                        <h3>Professora do ensino fundametal I</h3> <h4>Instituito Educar para Crescer <br/> 2021 - 2022 (Atual)</h4>
                     </div>
                     <div className="exp-card" data-aos="fade-up-left">
                        <h3>Professora de Português/Redação/Literatura- Ensino Fundamental II</h3> <h4>Centro Integrado de Ensino Cinco de Julho <br/> 2021-2022 (Atual)</h4>  
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="contato">
            <div className="container-contato">
               ***
            </div>
         </section>
     
      </Container>
   )
   
}