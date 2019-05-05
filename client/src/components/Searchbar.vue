<template>
   <div id="searchbar">
      <i class="material-icons">search</i>
      <input 
      
         type="text" 
         placeholder="Nombre, Lugar, Direccion"
         autocomplete="false"
         spellcheck="false"
      >


   </div>
</template>
<script>
   export default {
      name:'searchbar',
      data(){
         return{



         }
      }
   }
</script>

<style lang="scss" scoped>

   @import '@/scss/main.scss';
   div#searchbar{
      background: white;
      color: color(light-text);
      display: flex;
      align-items: center;
      padding: 5px 24px;
      
      border-radius: 21px;
      

      i{
         margin-right: 8px;
         font-size: 5.8vw;
      }

      input{
         width: 100%;
         margin: 0;
         padding: 0;
         border:none;
         font-size: 4.8vw;
      }
      input:focus{
         border:none;
         outline: none;
      }

      input::placeholder{
          font-size: 4.8vw;
         color:color(light-text);
      }
   }

    @include tablet{
      div#searchbar{
         i{font-size: 5vw;}
         input{font-size: 4vw;}
         input::placeholder{font-size: 4vw;}
      }
   }

   @include desktop{
      div#searchbar{
         
         i{font-size: 3.3vw;}
         input{font-size: 2.2vw;}
         input::placeholder{font-size: 2.2vw;}
      }
   }
</style>

