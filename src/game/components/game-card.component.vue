<script>
import { Game } from '../models/game.entity.js';
export default {
  name: "GameCard",
  props: {
    game: Game,
  },
  methods: {
    goToGameProfile() {
      if (this.game.freetogame_profile_url) {
        window.open(this.game.freetogame_profile_url, '_blank');
      }
    }
  }
};
</script>

<template>
  <pv-card class="card" style="width: 300px; overflow: hidden">
    <template #title><h4>{{ game.id }}{{ ". " }}{{ game.title }}</h4></template>
    <template #content>
      <img :src="game.thumbnail" alt="Game image"/>
      <p><strong>Description: </strong>{{game.short_description}}</p>
      <p><strong>Platform: </strong>{{game.platform}}</p>
      <p><strong>Publisher: </strong>{{game.publisher}}</p>
      <p><strong>Developer: </strong>{{game.developer}}</p>
      <p><strong>Release Date: </strong>{{game.release_date}}</p>
      <pv-button label="Go to Game Profile" @click="goToGameProfile" target="_blank" class="p-button-info"/>
    </template>
  </pv-card>
</template>

<style scoped>
.card {
  padding-top: 10px;
  max-width: 300px;
  color: white;
  overflow: hidden;
  background-color: #32383e;
  margin-bottom: 30px;
  border-radius: 20px;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-10px) scale(1);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.4);
}
.card img{
  max-width: 240px;
  border-radius: 12px;
}
</style>