import styled from 'styled-components';
import bg01 from '../../public/assets/images/bg-01.svg';
import foto_03 from '../../public/assets/images/foto-03.jpeg';
import bg02 from '../../public/assets/images/bg-02.svg';
import foto_01 from '../../public/assets/images/foto-01.jpg';
import Logo_letras from '../../public/assets/images/logo-letras.jpg';
import Logo_formacao from '../../public/assets/images/logo-formacao.png';
import bg03 from '../../public/assets/images/bg-03.svg';
import bg_contato from "../../public/assets/images/bg-contato-02.svg";



export const Container = styled.div`
   
   .container-body{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      height: 100vh;
      background-image: url(${bg01});
      background-size: contain;
      background-repeat: no-repeat;
      overflow: hidden;
      padding-top: 5rem;
      
      .body-frame{
         width: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
      }
      .frame{
         width: 15rem;
         height: 15rem;
         background-image: url(${foto_03});
         background-size: cover;
         background-position: center;
         border: 5px solid #ea59be;
         border-radius: 50%;
         margin-top: 5em;
      
      }
      .text{
         width: 50%;
         color: #ea59be;
      }
      
   }
   .container-about{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      height: 120vh;
      background-color: #BFD7B1;

      .about-left{
         display: flex;
         align-items: flex-end;
         width: 50%;
         height: 100%;

         .frame-left-about{
            flex:1;
            width: 100%;
            height: 80%;
            background-image: url(${bg02});
            background-size: cover;
            background-repeat: no-repeat;
         }
         
         
      }
      .about-right{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 50%;
         height: 100%;
         background-color: #BFD7B1;

         .frame-about{
            width: 15rem;
            height: 15rem;
            border: 3px solid #46B08D;
            border-radius: 50%;
            /* margin-top: 3rem; */
            background-image: url(${foto_01});
            background-size: cover;
         }
         h3{
            margin-right:2rem;
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
         height: 100%;
         display: grid;
         row-gap: 5rem;
         grid-template-columns: repeat(1, 1fr);
         justify-content: center;
         align-items: center;
         text-align: center;
         

         .grid-item{
            width: 70vw;
            height: auto;
            border-radius: 2rem;
            margin: auto;
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            padding:2rem;

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
               background-image: url(${Logo_letras});
               background-size: cover;
               background-position: center;
               background-repeat: no-repeat;
               border-radius: 20px;
               margin-left: 2rem;
            }
            .grid-frame2{
               width: 100%;
               height: 20rem;
               background-image: url(${Logo_formacao});
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
      height: 100%;
      background-color: #BFD7B1;
      
      h1{
         margin:0;
         padding-top: 3rem;
         padding-bottom: 3rem;
      }
      .exp-content{
         display: flex;
         
         .content-left{
            width: 60%;
            height: 100vh;
            margin:0;
            background-image: url(${bg03});
            background-size: contain;
            background-repeat: no-repeat;
         }
         .content-right{
            display: grid;
            grid-template-columns: 1fr;
            row-gap:2rem;
            width: 40%;
            height: 100%;
            margin-right: 5rem;
            justify-content: center;
            align-items: center;

            .exp-card{
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               width: 20rem;
               height: 9rem;
               padding: 15px;
               margin: auto;
               margin-bottom: 2rem;
               border-radius: 10px;
               box-shadow: 0 20px 50px rgba(0,0,0,0.4);

               h3, h4{
                  margin: 0;
               }
            }
            .exp-card:hover{
               transition: all 1s ease;
               transform: scale(1.1);
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
            
         }
      }
   }
   .container-contato{
      width: 100%;
      height: 100vh;
      background-color: #FeFcF9;

      h1{
         margin: 0;
         padding-top: 3rem;
         padding-bottom: 2rem;
      }
      
      .contato-content{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;

         .contato-bg{
            width: 60%;
            height: 70vh;
            background-image: url(${bg_contato});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin-bottom: 0;
         }
         .contato-icones{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60%;
            margin-top: 1.5rem;

            .contato-icone{
               width: 50px;
               height: 50px;
               margin-bottom: 2rem;
               margin-left: 2rem;
               -webkit-transition: all 0.7s ease;
               transition: all 1s ease;
               animation: pulse 5s linear infinite;

               img{
                  width: 50px;
                  height: 50px;
               }
            }
            .contato-icone:hover{
               opacity: 0.6;
            }
         }
      }
   }
   
   @keyframes pulse{
      
      0% {
         transform: scale(1);
      }
      
      50% {
         transform: scale(1.2);
      }
      
      0% {
         transform: scale(1);
      }

   }

   @media (max-width:1300px){
      .container-body{
         .frame{
            margin-top: 0;
         }
         .text{
            margin-right: 2rem;
         }
      } 
      
   }
   @media (max-width:800px){
      .container-about{
         height: 130vh;

         .about-left .frame-left-about{
            background-size: contain;
         }
      }
      .container-exp{
         height: auto;
         .exp-content{
            .content-right .exp-card{
               margin-left: 1rem;
            }
         }
      }
      
   }
   @media (max-width:600px){

      .container-body{
         width: 100%;
         height: auto;
         .body-frame{
            width: 100%;
            justify-content: flex-end;

            .frame{
               width: 8rem;
               height: 8rem;
            }
         }
         .text{
            width: 80%;

            h1{
               font-size: 1.5rem;
            }
            h3{
               font-size: 1.2rem;
            }
         }
      }
      .container-about{
         height: auto;
         .about-left{
            display: none;
         }
         .about-right{
            width: 100%;
            height: auto;

            h1{
               font-size: 2rem;
            }
            .frame-about{
               width: 8rem;
               height: 8rem;
            }
            .container-about-text {
               h3{
                  margin: 1rem;
                  font-size: 1rem;
               }
            }
         }
      }
      .container-quali{
         h1{
            font-size: 2rem;
         }
         .grid-item {
            width: 90vw;
            h2{
              font-size: 1.5rem; 
            }
            .grid-content{
               width: 100%;
               padding:0;
               .grid-frame1, .grid-frame2{
                  display: none;
               }
               .grid-text {
                  width: 100%;
                  font-size: 1rem;
                  margin:0;
                  padding:0;

                  p{
                     margin:0;
                     padding:0; 
                  }
               }
            }
         }
      }
      .container-exp{
         h1{
            font-size: 2rem;
            margin-bottom: -3rem;
            padding: 1rem;
         }
         .exp-content{
            flex-direction: column;
         
            .content-left{
               width: 100%;
               height: 70vh;
               margin-bottom:0;
               background-image: url(${bg03});
               background-size: contain;
               background-repeat: no-repeat;
               background-position: center;
            }
            .content-right{
               width: 100%;
               .exp-card{
                  width: 80%;
                  height: auto;
                  padding: 15px;
                  border-radius: 10px;
                  
            }
            }
         } 

      }
      .container-contato{
         height: auto;
         h1{
            font-size: 2rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
            margin-bottom: -1rem; 
         }
         .contato-content{
            .contato-bg{
               width: 100%;
               margin-left: 1rem;
               background-size: cover;
               background-position: center;
            }
            .contato-icones{
               width: 100%;
               .contato-icone{
                  width: 30px;                 
                  height: 30px;
                  margin: auto;

                  img{
                     width: 30px;                 
                     height: 30px;
                  }
               }
            }
         }
      }
   }
`;