<template>
   <div id="inmueble">
      <div id="container">
         <div id="img-container">

         </div>

         <section id="info-container"> 
            <h3>{{inmueble.estadoDireccion}}, {{inmueble.ciudadDireccion}}</h3>
            <span>{{inmueble.tipoPropiedad}}</span>

            <div id="details">
               <div id="icons">
                  <i class="fas fa-bed"><span>{{inmueble.numHabitaciones}}</span></i>
                  <i class="fas fa-shower"><span>{{inmueble.numBanhos}}</span></i>
                  <i class="fas fa-ruler-combined"><span>{{inmueble.metrosParcela}}</span></i>
                  
               </div>
               <span>{{inmueble.operacion}}</span>
               <h2>{{inmueble.precio}} BsS</h2>
            </div>
         </section>
      </div>

   </div>
</template>

<script>
   export default {
      name:'inmueble',
      props:{
        inmueble:Object
      },
      data(){
         return{
         
         }
      },

     
  }
</script>

<style lang="scss" scoped>

   @import '@/scss/main.scss';
   #inmueble{
      cursor: pointer;
      color: color(accent);
      width: 100%;
      div#container{
         div#img-container{
            background: pink;
            height: 160px;
            border-top-left-radius: $border-radius;
             border-top-right-radius: $border-radius;
         }
         section#info-container{
            padding: 20px;
            h3{margin:0}
            span{
               color:color(accent-light);
               margin-left: 8px;
            }
            div#details{
               
               align-items: center;
               margin-top: 8px;
               h2{margin:0; margin-left:8px; }
               div#icons{
                  border-top: 1px solid color(accent-light);
                  border-bottom: 1px solid color(accent-light);
                  padding: 8px;
                  display:flex;
                  align-items: center;
                  justify-content: center;
                  width: 240px;
                  margin: 8px 0;
                  
                  i{
                     font-size: 20px;
                     margin: 0 16px;
                     span{
                        font-family: 'Roboto' ,sans-serif !important;
                        margin-left: 2px !important;
                     }
                  }
                  
               }
            }

         }
      }
     
      
   }


   

</style>
