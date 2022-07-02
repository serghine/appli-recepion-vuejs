import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes:[
      {
        slug:'Katsu-curry',
        title:'Katsu Curry',
        description:'A delicious curri made with chicken, potatoes, ans special sauce',
        ingrediets:[
          '1 vers olive oil',
          '1 onion , epluché',
          '2 persil, couper',
          '1 egs'
        ],
        method:[
           'laver les olives et les oeufs', 
           'dans une petit marmite buillir 1.5 deau', 
           'prechaufer le four a 200 deg', 
           'silofaner le tout', 
           'pres a servir fin' 
        ]
      },
      {
        slug:'Ramen',
        title:'Ramene',
        description:'A delicious ramene made with chicken, potatoes, ans special sauce',
        ingrediets:[
          '1 vers olive oil',
          '1 onion , epluché',
          '2 persil, couper',
          '1 egs'
        ],
        method:[
           'laver les olives et les oeufs', 
           'dans une petit marmite buillir 1.5 deau', 
           'prechaufer le four a 200 deg', 
           'silofaner le tout', 
           'pres a servir fin' 
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_RECIP(state,recep){
      state.recipes.push(recep);
    }
  },
  actions: {
  },
  modules: {
  }
})
