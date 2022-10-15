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
               <div className="body-frame">
                  <div className="frame" data-aos="zoom-in"></div>
               </div>
               <div className="text">
                  <h1 data-aos="zoom-in">Olá, sejam bem-vindos!!!</h1>
                  <h3 data-aos="zoom-in">Este é o meu Portifólio, onde conto um pouco da minha trajetória profissional.</h3>
               </div>
            </div>
         </section>

         <section className="about" id="sobre">
            <div className="container-about">
               <div className="about-left"><div className="frame-left-about"></div></div>
               <div className="about-right">
                  <h1 data-aos="zoom-in">Sobre mim</h1>
                  <div className="container-frame-about">
                     <div className="frame-about" data-aos="fade-up-left"></div>
                  </div>
                  <div className="container-about-text" data-aos="zoom-in">
                     <h3>Formada em Letras: Português/Literatura. Comecei minha jornada como educadora ao completar o curso de Formação de Professores em 2015. Trabalhei com todos os segmentos inclusive na educação para jovens e adultos(EJA). Atualmente trabalho com fundametal I e fundamental II, mas estou sempre em busca de novos desafios e oportunidades.</h3>
                  </div>
                  
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
                           <p>Curso superior de Licenciatura em Letras pela Faculdade Estácio de Sá em 2021. <br/>O licenciado em Letras Português possui competência e habilitação para o exercício do magistério em Língua Portuguesa, Literatura, Redação e Produção de Texto nos Ensino fundamental, Médio, e Superior.</p>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item" data-aos="fade-up-left">
                     <h2>Formação de Professores</h2>
                     <div className="grid-content">
                        <div className="grid-frame2"></div>
                        <div className="grid-text" id="text2">
                           <p>Curso de Formação de Professores pelo Centro Educacional Movimento e Arte(CEMA) em 2015 com objetivo a capacitação através de conhecimentos teóricos e práticos na área da educação para o nível fundamental I.</p>
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
                        <h3>Professora de Português/Redação/Literatura do Ensino Fundamental II</h3> <h4>Centro Integrado de Ensino Cinco de Julho <br/> 2021-2022 (Atual)</h4>  
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="contato" id="contato">
            <div className="container-contato">
               <div className="contato-title" data-aos="zoom-in"><h1>Contato</h1></div>
               <div className="contato-content" >
                  <div className="contato-bg" data-aos="zoom-in"></div>
                  <div className="contato-icones">
                     <div className="contato-icone" >
                       <a href="https://www.facebook.com/ismariasarmento.dasilva" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg" /></a> 
                     </div>
                     <div className="contato-icone" >
                        <a href="https://www.instagram.com/ismariasarmento/" target="_blank"><img src="../../src/assets/instagram.png" /></a>
                     </div>
                     <div className="contato-icone" >
                        <a href="tel:+5521998085411" target="_blank"><img src="../../src/assets/telefone.png" /></a>
                     </div>
                     <div className="contato-icone" >
                        <a href="https://api.whatsapp.com/send?phone=5521998897270&text=Ol%C3%A1%2C%20estou%20vindo%20do%20seu%20portif%C3%B3lio." target="_blank"><img src="../../src/assets/whatsapp.png" /></a>
                     </div>
                     <div className="contato-icone">
                        <a href="mailto: ismaria2010@outlook.com" target="_blank"><img src="../../src/assets/email.png" /></a>
                     </div>
                  </div>
                  
               </div>
            </div>
         </section>

        
     
      </Container>
   )
   
}