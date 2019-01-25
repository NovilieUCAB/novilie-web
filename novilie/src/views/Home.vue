<template>
   <div class="home">
      <nav class="navbar">
         <Navbar
            v-on:getOnNavigation="
               onPropiedades = $event.onPropiedades;
               onAsesores = $event.onAsesores;  
               inmuebleInfo = false;
               asesorInfo = false;
            "
         /> 
      </nav>        
      <main >

         <div id="flex-container" v-if="onPropiedades">
            <div id="inmueble-container" :key="inmueble" v-for="inmueble in inmuebles" 
               @click="inmuebleInfo = true; onPropiedades=false"
            >
               <Inmueble
               />
            </div>
         </div>
         <div id="flex-container" v-else-if="onAsesores">
             <div id="asesor-container" :key="asesor.id" v-for="asesor in asesores"
               @click="asesorInfo = true; onAsesores=false"
             >
               <Asesor/>
            </div>
         </div>
         <inmueble-info 
            v-if="inmuebleInfo" 
            v-on:goPropiedades="
               onPropiedades = $event; 
               onAsesores = false;
               inmuebleInfo = false;
               asesorInfo = false;
            "
         />
         <asesor-info 
            v-if="asesorInfo" 
            v-on:goAsesores="
               onAsesores = $event;
               onPropiedades = false; 
               inmuebleInfo = false;
               asesorInfo = false;
            "

         />
      </main>
   </div>
</template>

<script>

   import Navbar from '@/components/Navbar.vue'
   import Inmueble from '@/components/Inmueble.vue'
   import Asesor from '@/components/Asesor.vue'
   import InmuebleInfo from '@/components/InmuebleInfo.vue'
   import AsesorInfo from '@/components/AsesorInfo.vue'

   export default {

      name: 'home',
      components: {
         Navbar,Inmueble,Asesor,InmuebleInfo,AsesorInfo
      },
      data(){
         return {
            
            inmuebles:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            asesores:[1,2,3,4,5,6,7,8],

            onPropiedades:true,
            onAsesores:false,

            inmuebleInfo:false,
            asesorInfo:false
             
         }
      },
      methods:{
      }
   }
</script>


<style lang="scss" scoped>

   @import '@/scss/main.scss';

   div.home{
      

      @include desktop{
         display: grid;
         grid-template-columns: 25% auto;
         grid-template-areas: "nav main";
      }
   }


   nav{      
      padding: 19px 36px 0px 36px;
      background: color(primary-gradient);
      box-shadow: 0px 4px 6px rgba(0,0,0,.15); 

      @include desktop{
         grid-area: nav;
         
      }
   }

   main{ 
      

      div#flex-container{
         padding: 36px;
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
   
         @include desktop{
            grid-area: main;
         }
         
         #inmueble-container{
            
            background: white;
            margin-bottom:45px;
            box-shadow: 0px 3px 6px rgba(0,0,0,.15); 
            border-radius: $border-radius;
   
             @include tablet{
               margin-left: 18px;
               margin-right: 18px;
            }
         }   
   
         #asesor-container{
            
            
            background: white;
            margin-bottom:45px;
            box-shadow: 0px 3px 6px rgba(0,0,0,.15); 
            border-radius: $border-radius;
   
             @include tablet{
               margin-left: 18px;
               margin-right: 18px;
            }
         }
      }
        
      
     
   
   }
  

</style>

