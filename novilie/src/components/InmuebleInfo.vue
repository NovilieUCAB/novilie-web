<template>
   <div id="inmueble-info">
      
      
      <a class="float" @click="$emit('goPropiedades',true)">
         <i class="material-icons my-float">arrow_back</i>
      </a>
      <a  
         @click="$emit('goPropiedades',true)"
          id="arrow-text"
      > <i class="material-icons">arrow_back</i> Volver</a>
      <section id="main">
         <div id="img-container">
         </div>
         <main>
            <h2 id="title">Titulo</h2>
            <div id="price">
               <span>Venta</span>
               <h2>BsS 500.000</h2>
            </div>
            <h2>Descripcion</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe amet aliquam cum earum doloremque, autem incidunt suscipit dignissimos, pariatur ut at dolores commodi vero, corrupti ratione doloribus eum adipisci.</p>
            <div id="details">
               <h2>Detalles</h2>
               <ul>
                  <li><strong>Ubicacion: </strong>asdasdasd</li>
                  <li><strong>Habitaciones: </strong>asdasdas</li>
                  <li><strong>Baños: </strong>asdasdas</li>
                  <li><strong>Terreno: </strong>asdasdas</li>
                  <li><strong>Construccion: </strong>asdasdas</li>
               </ul>
            </div>
         </main>
         
         
      </section>
   
     <section id="asesor">
         <div id="asesor-img-container">
            <div id="img"></div>
         </div>
         <h1>Latisha Brown</h1>
         <span>Asesor Inmobiliario</span>
         <div>
            <i class="material-icons">email</i>
            <h3>latishab@gmail.com</h3>
         </div>
         <div>
            <i class="material-icons">stay_primary_portrait</i>
            <h3>+584249304261</h3>
         </div>
     </section>




     <section id="moreinfo">
         <h1>Obten más información</h1>
         <form action="">
            <div>
               <i class="material-icons">person</i>
               <input type="text" placeholder="Nombre y apellido">
            </div>
            <div>
               <i class="material-icons">email</i>
               <input type="text" placeholder="Correo electronico">
            </div>
            <div>
               <i class="material-icons">stay_primary_portrait</i>
               <input type="text" placeholder="Telefono">
            </div>
            <div id="textarea">
               <div id="textarea-title"> 
                  <i class="material-icons">sms</i>
                  <span>Preguntar</span>
               </div>
               <textarea type="text"> </textarea>
            </div>

            <a>Enviar</a>
         </form>
     </section>


   </div>


</template>
<script>
   export default {
      name:'inmueble-info',
      props:{
         inmueble:Object
      },
      data(){
         return{

         }
      }
   }
</script>
<style lang="scss" scoped>

   @import '@/scss/main.scss';

   #inmueble-info{
      padding: 36px;
      a#arrow-text{
         display: none;
      }
      section#main{
        

         div#img-container{
           
            height: 290px;
            background:pink;
            
         } 
         main{
            background: white;
            box-shadow: 0px 4px 6px rgba(0,0,0,.15); 
            padding:20px;
            margin-bottom: 26px;
            color: color(accent);
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            h2{margin:0; font-size: 5vw;}
            h2#title{
               padding-bottom: 8px;
               border-bottom: 1px solid #1d29514b;
            }
   
            #price{
               padding: 8px;
               margin: 16px 0;
               
               color: white;
               border-radius: $border-radius;
               background: color(primary-gradient);
               box-shadow: 0px 4px 6px rgba(0,0,0,.15);
            }
            p{
               color:color(accent-light);
               font-size: 3.5vw;
               padding-bottom: 16px;
               border-bottom: 1px solid #1d29514b;
            }
            ul{
               padding-left: 20px;
               li{
                  font-size: 4vw;
                  margin-bottom:2px;
               }
            }
            
         }
      }

      section#asesor{
         background: white;
         box-shadow: 0px 4px 6px rgba(0,0,0,.15); 
         border-radius: $border-radius;
         margin-bottom: 26px;
         color: color(accent);
         padding: 20px;
         div#asesor-img-container{
            border-bottom: 1px solid #1d29514b;
            
            div#img{
               width: 150px;
               height: 150px;
               border-radius: 50%;
               background: pink;
               margin: 0 auto;
               margin-bottom: 12px;
            }
         }
         
         h1{
            margin:0;
            font-size:5vw;
         }
         span{
            font-size: 3.3vw;
            color:color(accent-light);
            margin-left: 8px;
         }
         h3{
            margin: 0 10px;
            font-size: 4vw;
            font-weight: 500;
            
         }
         div{
            display: flex;
            align-items: center;
            margin: 8px 0;
         }
         
      }

      section#moreinfo{
        
        background: white;
        box-shadow: 0px 4px 6px rgba(0,0,0,.15); 
        border-radius: $border-radius;
        margin-bottom: 24px;
        justify-content: center;
       
        h1{
           font-size: 18px;
           color: white;
           background: color(primary-gradient);
           display:block;
           
           padding: 10px;
           justify-content: center;
           margin:0;
           border-top-left-radius: 8px;
           border-top-right-radius: 8px;
        }
        form{
           
           padding: 20px;
           div{
              display: flex;
              margin-bottom: 10px;
              align-items: center;
              height: 40px;
              border-bottom: 1px solid color(primary);
              i{
                 color: color(accent);
                 font-size: 24px;
              }
              input{
                 width: 100%;
                 border:none;
                 font-size: 19px;
                 margin-left: 8px;
              }
              input::placeholder{
                 color: color(accent-light);
                 font-size: 12px;
              }
              input:focus{outline: none;}
           }

           div#textarea{
              height: 100px;
              border: none;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              div#textarea-title{
                 border:none;
                 display: flex;
                 margin: 0;

                 span{
                     color: color(accent-light);
                     font-size: 12px;
                     margin-left: 10px;
                 }

              }
              textarea{
                 width: 100%;
                 height: 100px;
                 border:1px solid color(primary); 
                 font-size: 20px;
              }
              textarea:focus{
                 outline: color(primary);
              }
           }

           a{
               
               margin:20px auto;
               padding: 5px;
               /* Text */
               color:whitesmoke;
               text-transform: uppercase;
               font-size: 18px;
               font-weight: bold;
               text-align: center;
               justify-content: center;
               /* button */
               cursor: pointer;
               border-radius: 50px;
               background: color(primary-gradient);
               box-shadow: 0px 4px 6px rgba(0,0,0,.15);
               
               display: block;
               width: 50%;
           }
        }
     }
      .float{
         cursor: pointer;
         position:fixed;
         width:50px;
         height:50px;
         bottom:5px;
         right:5px;
         background-color: color(accent);
         color:#FFF;
         border-radius:50px;
         text-align:center;
         box-shadow: 0px 4px 6px rgba(0,0,0,.15); 
      }

      .my-float{
         font-size: 32px;
         margin-top: 10px;
      }
   }

   @include desktop{
      #inmueble-info{
         padding: 48px;
         
         display: grid;
         grid-template-columns: 55% 1fr;
         grid-template-rows: auto 1fr;
         grid-template-areas: 
         " main asesor"
         " main moreinfo"
         ;
         grid-gap: 2em;
         a#arrow-text{
            cursor: pointer;
            display: flex;
            position: absolute;
            align-items: center;
            background: color(primary-gradient);
            color:white;
            padding: 6px 24px;
            font-size: 2vw;
            font-weight: bold;
            margin-left: 48px;
            margin-top: 24px;
            border-radius: 50px;
            i{
               font-size: 36px;
               margin-right: 8px;
            }
            
         }
         section#main{
            grid-area: main ;
            margin-top: 50px;
            main{
               margin-bottom: 0px;
               h2{
                  font-size: 2vw;
               }
               p{font-size: 1.6vw};
               div#details{
                   ul{
                     li{
                        font-size: 2vw;
                     }
                  }
               }
            }
         }

         section#asesor{
            margin-top: 50px;
            grid-area: asesor; 
            margin-bottom : 0px; 

            h1{font-size: 2vw;}
            span{font-size: 1.4vw;}
            div{
               h3{font-size: 1.8vw;}
            }
         }
         section#moreinfo{
            grid-area: moreinfo;
            max-height: 420px;
            h1{font-size: 2vw;}
            form{
               div{
                  i{font-size: 2vw;}
                  input{font-size: 1.3vw;}
                  input::placeholder{font-size: 1.3vw;}
               }
                div#textarea{  
                  div#textarea-title{
                     span{font-size: 1.3vw;  }
                     margin-bottom: 8px;
                  }
                  textarea{
                    font-size: 1.4vw;
                  }
                  textarea:focus{
                     outline: color(primary);
                  }
               }
               a{
                  font-size: 2vw;
               }
            }
         }

      }
         
      .float{
         display: none;
      }

      
   }

</style>
