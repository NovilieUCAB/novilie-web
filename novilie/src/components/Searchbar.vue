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
      display: flex;;
      align-items: center;
      padding: 0px 23px;
      height: 33px;
      border-radius: 21px;
      width: 85%;

      i{
         margin-right: 8px;
      }

      input{
         width: 100%;
         height: 95%;
         margin: 0;
         padding: 0;
         border:none;
         font-size: 14px;
      }
      input:focus{
         border:none;
         outline: none;
      }

      input::placeholder{
         color:color(light-text);
      }
   }
</style>

