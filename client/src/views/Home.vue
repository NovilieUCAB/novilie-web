<template>
   <div id="home">
      <nav id="navbar">
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

         <search-bar 
            id="searchbar"
            v-show="!inmuebleInfo && !asesorInfo"
         />

         <div id="flex-container" v-if="onPropiedades">
            <div id="inmueble-container" :key="inmueble.id" v-for="inmueble in inmuebles" 
               @click="
                       dataInmuebleSelected = inmueble
                       getAsesor()
                     "
            >
               <Inmueble
                  :inmueble="inmueble"
               />
            </div>
         </div>
         <div id="flex-container" v-else-if="onAsesores">
             <div id="asesor-container" :key="asesor.id" v-for="asesor in asesores"
               @click="
                       dataAsesorSelected = asesor
                       asesorInfo = true;
                       onAsesores=false;
                       
                     "
             >
               <Asesor
                  :asesor="asesor"
               />
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
            :inmueble="dataInmuebleSelected"
            :asesor="asesorInmueble"
         />
         <asesor-info 
            
            v-if="asesorInfo" 
            v-on:goAsesores="
               onAsesores = $event;
               onPropiedades = false; 
               inmuebleInfo = false;
               asesorInfo = false;
            "
            :asesor="dataAsesorSelected"
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
   import SearchBar from '@/components/Searchbar.vue'
   import firebase from 'firebase'

   export default {
      name: 'home',
      components: {
         Navbar,Inmueble,Asesor,InmuebleInfo,AsesorInfo,SearchBar
      },
      data(){
         return {
            
            inmuebles:[],
            asesores:[],

            onPropiedades:true,
            onAsesores:false,

            inmuebleInfo:false,
            asesorInfo:false,

            dataInmuebleSelected:null,
            dataAsesorSelected:null,

            asesorInmueble:Object
             
         }
      },
      created(){
         this.readInmuebles()
         this.readAsesores()
      },
      methods:{
        getAsesor(){
            this.asesores.forEach((a)=>{
               if (a.cedula == this.dataInmuebleSelected.cedulaAsesor){
                  this.asesorInmueble = a
                  this.inmuebleInfo = true;
                  this.onPropiedades=false;
               }
            })
            this.inmuebleInfo = true;
            this.onPropiedades=false;
            return new Object()
         },
         readInmuebles(){
            const db = firebase.firestore()
            db.collection("Inmuebles").get()
            .then((querySnapshot) => {
               const inmuebles = []
               querySnapshot.forEach((doc) => {
                  if(doc.data().descripcion){
                     inmuebles.push(doc.data())
                  }
               })
               this.inmuebles = inmuebles 
            })



         },
          readAsesores(){
            const db = firebase.firestore()

            db.collection("Asesores Inmobiliarios").get()
            .then((querySnapshot) => {
               const asesores = []
               querySnapshot.forEach((doc) => {
                     asesores.push(doc.data())
               })
               this.asesores = asesores 
               const storageRef = firebase.storage().ref()
               this.asesores.forEach((a)=>{
                  const file = 'asesores/'.concat(a.cedula + '.png')
                  storageRef.child(file).getDownloadURL()
                  .then((url)=>{
                     a.imgUrl = url
                  }).catch(()=>{
                  })
               })
            })
         },
      }
   }
</script>


<style lang="scss" scoped>

   @import '@/scss/main.scss';

   div#home{
      
      nav{      
         padding: 19px 36px 0px 36px;
         background: color(primary-gradient);
         box-shadow: 0px 4px 6px rgba(0,0,0,.15); 
      }

      #searchbar{
         display: none;
      }

      main{ 
         div#flex-container{
            padding: 36px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        
            #inmueble-container{
               background: white;
               margin-bottom:45px;
               box-shadow: 0px 3px 6px rgba(0,0,0,.15); 
               border-radius: $border-radius;
               margin: 18px 18px;
            }   
      
            #asesor-container{
               background: white;
               margin-bottom:45px;
               box-shadow: 0px 3px 6px rgba(0,0,0,.15); 
               border-radius: $border-radius;
               margin: 18px 18px;
            }
         }
      }

      @include desktop{
          
         display: grid;
         grid-template-columns: 25% auto;
         grid-template-areas: "nav main";
         
         nav{      
            grid-area: nav; 
         }

         #searchbar{
            display: flex;
            margin: 36px;
            margin-bottom: 0px;
         }
         div#flex-container{
            grid-area: main;
            
         }

      }

   }
  

</style>

