<template>
  <div class="home">
  <h1> Récépions </h1>
  <button @click="togglePpup"> add a recepion </button>
  <div class="recep">
 <div class="card" v-for="recep in $store.state.recipes" :key="recep.slug">
  <h2>{{recep.title}}</h2>
  <p>{{recep.description}}</p>
  <router-link :to="`/recep/${recep.slug}`">
    <button>View-Detail</button>
  </router-link>
 </div>
  </div>

  <div class="add-recep-popup" v-if="popupOpen">
    <div class="popup-content">
      <h2> Add new recepe </h2>
      <form @submit.prevent="addNewRecep">
       <div class="group">
        <label for=""> Title </label>
        <input type="text" v-model="newRecipe.title">
       </div>
       <div class="group">
        <label for=""> Description </label>
       <textarea v-model="newRecipe.description"></textarea>
       </div>
         <div class="group">
        <label for=""> Ingredients </label>
          <div class="ingredient" v-for="i in newRecipe.ingredientRow" :key="i">
           <input type="text" v-model="newRecipe.ingredients[i - 1]">
          </div>
          <button type="button" @click="addNewIngredient"> Add Ingredients </button>
       </div>
          <div class="group">
        <label for=""> Method </label>
          <div class="method" v-for="i in newRecipe.methodRows" :key="i">
           <textarea  v-model="newRecipe.method[i - 1]"></textarea>
          </div>
          <button type="button" @click="addNewStep"> Add Step </button>
       </div>
       <button type="submit"> Add Rcepe </button>
       <button type="button" @click="togglePpup"> Close </button>
      </form>
    </div>
  </div>
  
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useStore} from 'vuex'
// @ is an alias to /src

export default{
name:'Home',
setup(){
const newRecipe = ref({
  title:'',
  description:'',
  ingredients:[],
  method:[],
  ingredientRow:1,
  methodRows:1
})
const popupOpen = ref(false);

const store = useStore; 
const togglePpup=()=>{
  popupOpen.value = !popupOpen.value;
}

const addNewIngredient=()=>{
  newRecipe.value.ingredientRow++;
}

const addNewStep=()=>{
  newRecipe.value.methodRows++;
}
const addNewRecep=()=>{
  newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/gs,'-');
  if(newRecipe.value.title === ''){
    alert("title not null")
    return;
  }
  store.commit('ADD_RECIP',{...newRecipe.value});
  
  newRecipe.value={
    title:'',
    description:'',
    ingredients:[],
    method:[],
    ingredientRow:1,
    methodRows:1
  }
  togglePpup();
}
return{
  newRecipe,
  togglePpup,
  popupOpen,
  addNewIngredient,
  addNewStep,
  addNewRecep
}
}

}

</script>



<style>
   .home{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
 h1{
  font-size: 3rem;
  margin-bottom: 32px;
 }
 .recep{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));

 }
.recep .card{
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081C33;
}

.recep .card h2{
  font-size: 2rem;
  margin-bottom: 1rem;
}

.recep .card p{
font-size: 1.125rem;
line-height: 1.4;
margin-bottom: 1rem;
}
.add-recep-popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-recep-popup .popup-content{
  background-color:#081C33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}
.popup-content h2{
  font-size: 2rem;
  margin-bottom: 1rem;
}
.popup-content .group{
margin-bottom: 1rem;
}
.popup-content .group label{
  display: block;
  margin-bottom: 0.5rem;
}
.popup-content .group input,
.popup-content .group textarea{
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.popup-content textarea{
  height: 100px;
  size: none;
}

.popup-content button[type="submit"]{
  margin-right: 1rem;
}
</style>
