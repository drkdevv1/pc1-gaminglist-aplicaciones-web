<script>
import FooterComponent from "@/public/components/footer-component.component.vue";
import GameCard from './game/components/game-card.component.vue';
import GameCardList from './game/components/game-list.component.vue'
import {FreeToGameApiService} from "@/game/services/freetogameapi.service.js";

export default {
  name: 'App',
  components:{
    FooterComponent,
    GameCard,
    GameCardList
  },
  data(){
    return{
      games:[],
      errors:[],
      gamesApi: new FreeToGameApiService(),
    };
  },
  created(){
    this.getGameCard();
  },
  methods:{
    getGameCard(){
      this.gamesApi.getCardInfo().then((response)=>{
        this.games=response.data;
      }).catch((error)=>{
        this.errors.push(error);
      });
    },
  },
};
</script>

<template>
  <pv-toolbar class="c-toolbar">
    <template #center>
      <h1>Online Gaming List</h1>
    </template>
  </pv-toolbar>
  <game-card-list :games="games"></game-card-list>
  <footer-component></footer-component>
</template>


<style>
.c-toolbar {
  width: 100%;
  background-color: #27292d;
  color: #49acff;
  border-color: #27292d;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}
:root {
  background-color: #242424;
}
</style>
