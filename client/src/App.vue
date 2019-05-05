<template>
   <div id="app">
      
      <router-view/>
   </div>
</template>

<script>
export default {
   data(){
      return{
      }
   }
}
</script>



<style lang="scss">
   @import '@/scss/main.scss';
   body, html{
      height: 100%;
   }

   body{
      font-family: 'Roboto', sans-serif;
      background: color(bk);
      margin:0;
      max-width: 1920px;
   }
  
</style>
