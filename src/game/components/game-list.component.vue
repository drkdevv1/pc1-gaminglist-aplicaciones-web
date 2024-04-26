<script>
import GameCard from './game-card.component.vue';

export default {
  name:"GameCardList",
  components:{GameCard},
  props:{
    games: Object,
  }
}
</script>

<template>
  <div class="games-list">
    <game-card v-for="game in games" :game="game" :key="game.id"></game-card>
  </div>
</template>

<style scoped>

.games-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>