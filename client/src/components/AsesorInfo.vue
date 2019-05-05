<template>
   <div id="asesor-info">
      
      
      <a class="float" @click="$emit('goAsesores',true)">
         <i class="material-icons my-float">arrow_back</i>
      </a>

       <a  
         @click="$emit('goAsesores',true)"
          id="arrow-text"
      > <i class="material-icons">arrow_back</i> Volver</a>

      <main>
         <div id="asesor-img-container">
            <div id="img">
               <img :src="asesor.imgUrl" alt="">

            </div>
         </div>
        <section>
           <div id="name">
               <h1>{{asesor.nombre}} {{asesor.apellido}}</h1>
               <span>Asesor Inmobiliario</span>
           </div>
           <div id="contacto">
              <h1>Contacto</h1>
               <div>
                  <i class="material-icons">email</i>
                  <h3>{{asesor.email}}</h3>
               </div>
               <div>
                  <i class="material-icons">smartphone</i>
                  <h3>{{asesor.tlf}}</h3>
               </div>
               <div>
                  <i class="material-icons">phone</i>
                  <h3>{{asesor.tlfOficina}}</h3>
               </div>
           </div>
           <div id="details">
               <h1>Detalles del Asesor</h1>
               <ul>
                  <li>Captaciones realizadas: <strong>{{asesor.numCaptaciones}}</strong></li>
                  <li>Captaciones en progreso: <strong>{{asesor.capEnProgreso}}</strong></li>
                  <li>Clientes atendidos: <strong>{{asesor.clientesAtendidos}}</strong></li>
               </ul>


           </div>
           <div id="evaluation">
              <h1>Evaluación</h1>
              <div id="rating">
               <star-rating 
                  :increment="0.01"
                  :max-rating="5"
                  :star-size="starSize"
                  :read-only="true"
                  :rating="asesor.evaluacion"
                  :inline="true"
               />
              </div>
           </div>
           <div id="info">
              <h1>Informacion personal</h1>
              <p>{{asesor.infoPersonal}}</p>
           </div>
        </section>
      </main>

     

   </div>
</template>
<script>
   import StarRating from 'vue-star-rating'
   export default {
      name:'asesor-info',
      props:{
         asesor:Object
      },
      components:{
        StarRating
      },
      data() {
         return {
            rating: 1.3,
         }
      },
      computed:{
         starSize(){
           if (window.innerWidth < 1024){
               return ((window.innerWidth * 80) / 1920) * 2;
           }
               return (window.innerWidth * 80) / 1920;
         }
      },
      methods:{
      }
   }
</script>
<style lang="scss" scoped>

   @import '@/scss/main.scss';

   #asesor-info{
      padding: 36px;
      color: color(accent);

      a#arrow-text{
        display: none;
      }

      main{
         background: white;
         box-shadow: 0px 4px 6px rgba(0,0,0,.15); 
         border-radius: $border-radius;
         

         div#asesor-img-container{
            background: color(primary-gradient);
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            padding: 20px;
            div#img{
               border: 3px solid white;
               width: 150px;
               height: 150px;
               border-radius: 50%;
               background:white;
               margin: 0 auto;
               margin-bottom: 12px;
               img{
                  background:white;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  border:none;
               }
            }
         }

         section{
            margin-bottom: 24px;
            h1{margin: 0px; font-size: 18px;}
            padding: 20px;
            div#name{
               span{
                  color:color(accent-light);
                  font-size: 16px;
                  margin: 8px;
               }
               border-bottom: 1px solid #1d29514b;
               padding-bottom: 8px;
               margin-bottom: 8px;
            }
            div#contacto{
               h3{margin:0}
               div{
                  display: flex;
                  align-items: center;
                  margin: 8px 0;
                  h3{
                     margin-left: 8px; font-size: 16px;
                     @include tiny{
                        font-size: 12px;
                     }
                  }
               }
               border-bottom: 1px solid #1d29514b;
               margin-bottom: 8px;
            }
            div#details{
               ul{padding-left: 32px; font-size: 12px;}
               border-bottom: 1px solid #1d29514b;
               margin-bottom: 8px;

               
            }
            div#evaluation{
               border-bottom: 1px solid #1d29514b;
               margin-bottom: 8px;
               #rating{
                  display: flex;
                  justify-content: center;
                  margin: 16px 0px;
               }
            }
            div#info{
               p{
                  font-size: 12px;
               }
               
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

      #asesor-info{

         .custom-rating{
            color: red !important;
            font-size: 18vw;
         }
         a#arrow-text{
           box-shadow: 0px 4px 6px rgba(0,0,0,.15); 
           cursor: pointer;
           display: flex;
           align-items: center;
           background: color(primary-gradient);
           color:white;
           padding: 6px 24px;
           font-size: 2vw;
           font-weight: bold;
           margin-bottom: 20px;
           border-radius: 50px;
           width: 15%;
           i{
              font-size: 36px;
              margin-right: 8px;
           }  
         }
         main{
            margin: 0 32px;
            
            

            div#asesor-img-container{
              div#img{
                  width: 300px;
               height: 300px;
              }

            }

            section{

               display: grid;
               grid-template-columns: 50% 1fr 1fr;
               grid-template-rows: auto auto auto;
               grid-template-areas: 
                  "name details details"
                  "contacto details details"
                  "evaluation info info"
               ;
               grid-gap: 1em; 
               padding: 20px 60px;

               h1{font-size: 2vw;}
               div#name{
                  grid-area:name;
                  border-bottom: none;
                  span{font-size: 1.3vw;}
               }
               div#contacto{
                  grid-area:contacto;
                  border-bottom: none;
                  
                  div{
                     h3{font-size: 1.5vw;}
                  }
               }
               div#details{
                  grid-area:details;
                  border-bottom: none;
                  ul{
                     li{font-size: 1.6vw;}
                  }
               }
               div#evaluation{
                  grid-area:evaluation;
                  border-bottom: none;
               }
               div#info{ 
                  grid-area:info;
                  p{font-size: 1.2vw;}   
               }
            }
         }
         .float{display:none;}
      }
   }

   

      

</style>
