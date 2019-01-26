<template>
   <div id="asesor">
      <div id="container">
         <h1>{{asesor.nombre}} {{asesor.apellido}}</h1>

         <main>
            <div id="asesor-img-container">
                  <div  id="img">
                     <img  :src="asesor.imgUrl" id="perfil" alt="">
                  </div>
            </div>
            <section>
               <div>
                  <i class="material-icons">email</i>
                  <h3>{{asesor.email}}</h3>
               </div>
               <div>
                  <i class="material-icons">smartphone</i>
                  <h3>{{asesor.tlf}}</h3>
               </div>
            </section>
         </main>
      </div>
      <footer>
         <h3><strong>captaciones</strong> {{asesor.numCaptaciones}}</h3>
         <div>
            <i class="material-icons">person</i>
            <h3>{{asesor.clientesAtendidos}}</h3>
         </div>
      </footer>
   </div>
</template>

<script>
  import firebase from 'firebase'
   export default {


      name:'asesor',
      props:{
         asesor:Object
      },
      data(){
         return{
            imgUrl:'a',
         }
      },
      methods:{
       
  
      }
   }
</script>


<style lang="scss" scoped>

   @import '@/scss/main.scss';
   div#asesor{
      cursor: pointer;
      color:color(accent);
      div#container{
         padding: 20px;
         padding-bottom: 0px;
         h1{
            margin: 0;
            font-size: 18px;
            margin-bottom: 8px;
         }
         main{
            
            align-items: center;
            div#asesor-img-container{
               div#img{
                  width: 85px;
                  height: 85px;
                  border-radius: 50%;
                 
                  margin: 0 auto;
                  margin-bottom: 12px;
                  img{
                     border:none;
                     width: 100%;
                     height: 100%;
                     border-radius: 50%;
                  }
               }
            }
            section{
               width: 240px;
               margin-left: 8px;
               div{
                  display:flex;
                  align-items: center;
                  margin-bottom: 8px;
                  h3{margin:0px; font-size: 14px; margin-left: 8px;}
               }
            }
         }
      }
      footer{
         padding: 0 8px;
         display: flex;
         align-items: center;
         border-top: 1px solid #1d29514b;
         
         h3{margin:0px; font-size: 14px;}
        
         div{
            padding: 5px;
            height: 100%;
            border-left: 1px solid #1d29514b;
            margin-left: auto;
            display:flex;
            align-items: center;
            h3{
               margin-top: 5px;
            }  

         }
      }
      
   }

</style>
