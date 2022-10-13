import styled from 'styled-components';

export const Container = styled.div`

   .container-footer{
      width: 100%;
      height: 20vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 5rem;
      color: #FFF;
      background-color: #EA59BE;

      .footer-left{
         background-color: #EA59BE;

         button{
            font-weight: bold;
         }
         button:hover{
            border-color: #FFF;
            -webkit-transition: all 0.7s ease;
            transition: all 1s ease;
            transform: scale(1.1);
         }
         a{
            text-decoration: none;
         }
      }
      .footer-copy{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         h4{
            margin-top:10px;
            margin-bottom: 2px;
         }
         p{
            margin-top: 5px;
         }
      }
      .footer-right{
         background-color: #EA59BE;
         button{
            font-weight: bold;
         }
         button:hover{
            border-color: #FFF;
            -webkit-transition: all 0.7s ease;
            transition: all 1s ease;
            transform: scale(1.1);
         }
         a{
            text-decoration: none;
         }
         
      }

      
   }

`;