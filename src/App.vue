<script>
import ToolBarComponent from "@/public/components/toolbar-component.component.vue";
import FooterComponent from "@/public/components/footer-component.component.vue";
import GameCardList from './game/components/game-list.component.vue'
import {FreeToGameApiService} from "@/game/services/freetogameapi.service.js";


export default {
  name: 'App',
  components:{
    ToolBarComponent,
    FooterComponent,
    GameCardList
  },
  data(){
    return{
      games:[],
      errors:[],
      isLoading: true,
      gamesApi: new FreeToGameApiService(),
    };
  },
  created(){
    this.getGameCard();
  },
  methods: {
    getGameCard() {
      this.isLoading = true;
      this.gamesApi.getCardInfo()
          .then((response) => {
            this.games = response.data;
          })
          .catch((error) => {
            this.errors.push(error);
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
  },
};
</script>

<template>
  <tool-bar-component></tool-bar-component>
  <game-card-list :games="games" :isLoading="isLoading"></game-card-list>
  <footer-component></footer-component>
</template>


<style>

:root {
  background-color: #242424;
}
</style>
