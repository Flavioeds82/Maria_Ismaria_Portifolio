import styled from 'styled-components';

export const Container = styled.div`
   
   .container-body{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      height: 150vh;
      background-image: url("../../src/assets/bg-01.svg");
      background-size: cover;
      background-repeat: no-repeat;
      /* border-bottom: 3px solid #fff; */
      
      

      .frame{
         width: 15rem;
         height: 15rem;
         background-image: url("../../src/assets/foto-02.jpg");
         background-size: cover;
         background-position: center;
         border: 5px solid #ea59be;
         border-radius: 50%;
         /* float: right; */
         margin-right: 10rem;
         margin-top: 10rem;
      
      }
      .text{
         width: 40%;
         color: #ea59be;
         margin-right: 2rem;
      }
      
   }
   .container-about{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100vh;
      background-color: #FAF3F8;

      .about-left{
         width: 60vw;
         height: 100%;
         background-image: url("../../src/assets/bg-02.svg");
         background-size: cover;
         background-repeat: no-repeat;
         
      }
      .about-right{
         display: flex;
         flex-direction: column;
         /* justify-content: center; */
         align-items: center;
         width: 40%;
         height: 100%;
         background-color: #BFD7B1;

         h1{
            /* margin-top: -5rem; */
         }

         .frame-about{
            width: 15rem;
            height: 15rem;
            border: 3px solid #46B08D;
            border-radius: 50%;
            /* margin-top: 3rem; */
            background-image: url("../../src/assets/foto-01.jpg");
            background-size: cover;
         }
      }
   }
   .container-quali{
      width: 100%;
      height: 100%;
      background-color: #EFDAE9;
      padding-bottom: 3rem;
      
      h1{
         margin: 0;
         padding: 3rem;
      }

      .quali-grid{
         width: 100%;
         height: 100vw;
         display: grid;
         grid-template-columns: repeat(1, 1fr);
         justify-content: center;
         align-items: center;
         text-align: center;
         

         .grid-item{
            width: 70vw;
            height: auto;
            /* border: 1px solid #ea59be; */
            border-radius: 2rem;
            margin: auto;
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);

         }
         .grid-item:hover{
            transition: all 1s ease;
            transform: scale(1.1);
            box-shadow:
                  inset 0 0 60px whitesmoke,
                  inset 20px 0 80px #f0f,
                  inset -20px 0 80px #0ff,
                  inset 20px 0 300px #f0f,
                  inset -20px 0 300px #0ff,
                  0 0 50px #fff,
                  -10px 0 80px #f0f,
                  10px 0 80px #0ff;
            
         }
         .grid-content{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            

            .grid-frame1{
               width: 100%;
               height: 20rem;
               background-image: url("../../src/assets/logo-letras.jpg");
               background-size: cover;
               background-position: center;
               background-repeat: no-repeat;
               border-radius: 20px;
               margin-left: 2rem;
            }
            .grid-frame2{
               width: 100%;
               height: 20rem;
               background-image: url("../../src/assets/logo-formacao.png");
               background-size: contain;
               background-position: center;
               background-repeat: no-repeat;
               border-radius: 20px;
               margin-left: 2rem;
               margin-bottom: 2rem;
            }
            .grid-text{
               width: 100%;
               padding: 1rem;

               p{
                  font-size: 1.3rem;
                  text-align: center;
                  margin: 0 2rem;
               }
            }
         }
      }
   }
   .container-exp{
      width: 100%;
      height: auto;
      // padding-bottom: 5rem;
      background-color: #BFD7B1;
      
      h1{
         margin:0;
         padding-top: 3rem;
      }
      .exp-content{
         display: flex;


         .content-left{
            width: 60%;
            height: 100vh;
            margin:0;
            background-image: url("../../src/assets/bg-03.svg");
            background-size: contain;
            background-repeat: no-repeat;
         }
         .content-right{
            display: grid;
            grid-template-columns: 1fr;
            width: 40%;
            height: 100vh;
            margin-right: 5rem;
            // margin-top: 3rem;
            justify-content: center;
            align-items: center;

            .exp-card{
               width: 20rem;
               height: 5rem;
               // border: 1px solid;
               margin: auto;
               border-radius: 10px;
               box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            }
            .exp-card:hover{
               box-shadow:
                  inset 0 0 60px whitesmoke,
                  inset 20px 0 80px #bfd7b1,
                  inset -20px 0 80px #106e32,
                  inset 20px 0 300px #3c562a,
                  inset -20px 0 300px #bfd7b1,
                  0 0 50px #fff,
                  -10px 0 80px #106e32,
                  10px 0 80px #3c562a;
            }
            .slide-in-right {
               -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                       animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
         }
      }
  
  
   @-webkit-keyframes slide-in-right {
      0% {
      -webkit-transform: translateX(1000px);
               transform: translateX(1000px);
      opacity: 0;
      }
      100% {
      -webkit-transform: translateX(0);
               transform: translateX(0);
      opacity: 1;
      }
   }
   @keyframes slide-in-right {
      0% {
      -webkit-transform: translateX(1000px);
               transform: translateX(1000px);
      opacity: 0;
      }
      100% {
      -webkit-transform: translateX(0);
               transform: translateX(0);
      opacity: 1;
      }
 }
 
 }
 
      
   

`;