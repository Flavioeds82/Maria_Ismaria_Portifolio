import styled from 'styled-components';

export const Container = styled.div`

   .container-header{
      width: 100%;
      height: 15vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #EA59BE;
      color: #fff;
      border-bottom: 3px solid #fff;

      .header-logo:hover{
         color: #444;
         transition: all  0.8s ease;
         transform: scale(1.1);
      }
      .header-menu{
         ul{
           display: flex;
           flex-wrap: wrap;

           a{
              text-decoration: none;
              color: #fff;
              font-size: 1.5rem;
           }
           a:hover{
               color: #444;
               transition: all  0.8s ease;
               transform: scale(1.1);
           }
         }
         li{
            margin-left: 2.5rem;
            list-style: none;
            font-weight: bold;
            font-size: 1.5rem;
         }
      }
   }
   @media(max-width:950px){
      .container-header{
         width: 100%;
         flex-direction: column;
         height: auto;
         margin: auto;

         .header-logo{
            
         }
         .header-menu{
            font-size: 1rem;
            margin-right: 20px;
         }
      }
   }
   @media(max-width:600px){
      .container-header{
         width: 100%;
         flex-direction: column;
         height: auto;
         margin: auto;

         .header-logo{
            width: 100%;
         }
         .header-menu{
            width: 100%;

            ul{
              flex-direction: column;

              li{
                 margin: auto;
                 padding:5px;
              }
            }
         }
      }
   }



`;