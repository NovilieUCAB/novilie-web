<template>
   <div id="navbar">
      <div id="search">
         <Searchbar/>
         <i class="material-icons">more_vert</i>
      </div>
      <div id="logo-container">
         <img src="@/assets/logo.png" alt="">
      </div>
      <ul id="nav">
           <li
            :class="{'border-bottom':onPropiedades}"
            @click="
               changeOnView('propiedades')
               $emit('getOnNavigation', {onPropiedades,onAsesores})
            
            "
           >
              <i class="material-icons">store</i>
              <h3>Propiedades</h3>
           </li>
           <li
            :class="{'border-bottom':onAsesores}"
            @click="
               changeOnView('asesores')
               $emit('getOnNavigation', {onPropiedades,onAsesores})
            
            "
           >
              <i class="material-icons">group</i>
              <h3>Asesores</h3>
           </li>        
      </ul>
   </div>
</template>

<script>

   import Searchbar from '@/components/Searchbar.vue'


   export default {
      name: 'navbar',
      components:{
         Searchbar
      },
      data(){
         return{
            onPropiedades:true,
            onAsesores:false,
         }
      },
      methods:{
         changeOnView(viewSelected){
            if (viewSelected === 'propiedades' && !this.onPropiedades){
                  this.onPropiedades = true;
                  this.onAsesores = false;
            }else if( viewSelected === 'asesores' && !this.onAsesores){
               this.onAsesores = true;
               this.onPropiedades = false;
            }


         }

      }
   }
</script>

<style lang="scss" scoped>

   @import '@/scss/main.scss';

   #navbar{
      color: white;
      margin:0;
      div#search{
         display: flex;
         align-items: center;
         margin-bottom: 20px;
         i{
            margin-left: auto;
            font-size: 9.8vw;
            @include tablet{
               font-size: 7vw;
            }
         }
         @include desktop{
            display: none;
         }  

         
      }
      div#logo-container{
         display: none;
         img{
            height: 100px;
         }
      }

      ul#nav{
         margin: 0;
         padding: 0;
         list-style-type:none; 
         display: flex;
        li{
           flex: 1 1 0;
           text-decoration: none;
           display: flex;
           align-items: center;
           justify-content: center;
           h3{font-size: 5vw; }
           i{margin-right: 8px; font-size: 5vw;}


           @include tablet{
               h3{font-size: 4vw; }
               i{font-size: 4vw;}
           }
        }
         
      }
      .border-bottom{
         border-bottom: 5px solid color(accent);
      }
   }

   
   @include desktop{
      #navbar{
         height: 100vh;
         
         div#logo-container{
            display: flex;
            justify-content: center;
            margin: 36px 0px;
            margin-bottom: 64px;
            background: white;
            padding: 5px;
            border-radius: 50px;
            img{
               width: 80%;
               height: 80%;
               
            }
            
         }

         ul#nav{
            display: block;
            padding: 0px;
            li{
               cursor:pointer;
               margin-bottom: 24px;
               h3{
                  margin: 0;
                  font-size: 2vw;
                  padding: 12px 0;
               }
               i{
                  font-size: 2.2vw;
               }
            }
         }
         
      }

      .border-bottom{
         cursor:pointer;
         border-bottom: none !important;
         background: white;
         border-radius: $border-radius;
         color: color(accent);
      } 
   }

   
</style>
