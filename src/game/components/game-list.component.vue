<script>
import GameCard from './game-card.component.vue';
import GameSkeletonCard from "@/game/components/game-skeleton.component.vue";

export default {
  name:"GameCardList",
  components:{GameSkeletonCard, GameCard},
  props:{
    games: Object,
    isLoading: Boolean,
  }
}
</script>

<template>
  <div class="games-list">
    <template v-if="isLoading">
      <game-skeleton-card v-for="n in 10" :key="n"></game-skeleton-card>
    </template>
    <template v-else>
      <game-card v-for="game in games" :game="game" :key="game.id"></game-card>
    </template>
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