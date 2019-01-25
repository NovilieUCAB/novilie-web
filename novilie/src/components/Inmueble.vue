<template>
   <div id="inmueble">
      <div id="container">
         <div id="img-container">

         </div>

         <section id="info-container"> 
            <h3>Los saltos, Ciudad guayana</h3>
            <span>Casa/Villa</span>

            <div id="details">
               <div id="icons">

                  

               </div>
               <h2>450.000BsS</h2>

            </div>
         
         </section>
      </div>

   </div>
</template>

<script>
   export default {
      name:'inmueble',
      props:{
        id: Number
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
               display: flex;
               align-items: center;
               margin-top: 8px;
               h2{margin:0; margin-left:8px; width: 170px}
               div#icons{
                  background: lightblue;
                  height: 30px;
                  width: 80px;
               }
            }

         }
      }
     
      
   }


   

</style>
