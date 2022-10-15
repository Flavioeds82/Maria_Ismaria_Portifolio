import styled from 'styled-components';


export const Container = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

   .container-header{
      width: 100%;
      height: 15vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #EA59BE;
      color: #fff;
      border-bottom: 3px solid #fff;

      .header-logo{
         font-family: 'Great Vibes', cursive;
         font-weight: bold;
      }

      .header-logo:hover{
         color: #444;
         transition: all  0.8s ease;
         transform: scale(1.1);
      }
      .icon{
         display: none;
         position: absolute;
         z-index: 99;
         right: 1%;
         width: fit-content;
         height: 15vh;
         cursor: pointer;

         .hamburger-menu{
            position: absolute;
            top: 90%;
            right: 1%;
            width: 30px;
            height: 6px;
            background-color: #FFF;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all  0.8s ease;
         }
         .hamburger-menu:before{
            position: absolute;
            top: -12px;
            right: 0;
            content: '';
            width: 37px;
            height: 6px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all  0.8s ease;
         }
         .hamburger-menu:after{
            position: absolute;
            top: 12px;
            right: 0;
            content: '';
            width: 37px;
            height: 6px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all  0.8s ease;
         }
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
      .icon.iconActive .hamburger-menu{
            background: transparent;
            box-shadow: 0 2px 5px transparent;
         }
         .icon.iconActive .hamburger-menu::after{
            top:0;
            background-color: #fff;
            transform: rotate(225deg);
            box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
         }
         .icon.iconActive .hamburger-menu::before{
            top:0;
            background-color: #fff;
            transform: rotate(135deg);
            box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
         }
   }

   @media(max-width:1050px){
      .container-header{
         width: 100%;
         height: auto;
         .header-logo{
            font-size: 0.8rem;
         }
         .header-menu a{
            font-size: 0.3rem;
            z-index: 99;

            li{
               margin-left: 1rem;
            }
         }

      }
   }
   @media(max-width:800px){
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
            /* margin-right: 2rem; */
            font-size: 1rem;
         }
         .header-menu{
            display: none;
            width: 100%;

            ul{
              flex-direction: column;
            }
            li{
                margin-bottom: 5px;
                font-size: 1.5rem;
              }
         }
         .icon{
            display: block;
         }
         
         .menu-open{
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            margin-right: 2rem;
         }
      }
     
   }



`;