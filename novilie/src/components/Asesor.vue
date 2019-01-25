<template>
   <div id="asesor">
      <div id="container">
         <h1>latisha brown</h1>

         <main>
            <div id="asesor-img-container">
                  <div id="img"></div>
            </div>
            <section>
               <div>
                  <i class="material-icons">email</i>
                  <h3>latishab@gmail.com</h3>
               </div>
               <div>
                  <i class="material-icons">stay_primary_portrait</i>
                  <h3>+584249304261</h3>
               </div>
            </section>
         </main>
      </div>
      <footer>
         <h3><strong>captaciones</strong> 10</h3>
         <div>
            <i class="material-icons">person</i>
            <h3>20</h3>
         </div>
      </footer>
   </div>
</template>

<script>
export default {
   
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
            display: flex;
            align-items: center;
            div#asesor-img-container{
               div#img{
                  width: 85px;
                  height: 85px;
                  border-radius: 50%;
                  background: pink;
                  margin: 0 auto;
                  margin-bottom: 12px;
               }
            }
            section{
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
