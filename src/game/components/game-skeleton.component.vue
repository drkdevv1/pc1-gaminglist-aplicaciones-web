<script>
export default {
  name: 'GameSkeletonCard',
  components: {}
}
</script>
<template>
  <pv-card class="card skeleton-card" style="width: 300px; overflow: hidden">
    <template #title>
      <h4 class="skeleton skeleton-title"></h4>
    </template>
    <template #content>
      <div class="skeleton skeleton-thumbnail"></div>
      <p class="skeleton skeleton-text"></p>
      <p class="skeleton skeleton-text"></p>
      <p class="skeleton skeleton-text"></p>
      <p class="skeleton skeleton-text"></p>
    </template>
  </pv-card>
</template>

<style>
.skeleton-card {
  padding-top: 10px;
  max-width: 300px;
  background-color: #32383e;
  margin-bottom: 30px;
  border-radius: 20px;
  text-align: center;
}

.skeleton {
  background-color: #444;
  border-radius: 8px;
  margin: 10px 0;
  width: 100%;
  animation: pulse 1.2s infinite ease-in-out;
}

.skeleton-title {
  height: 24px;
  width: 60%;
  margin: 0 auto 15px;
}

.skeleton-thumbnail {
  height: 140px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.skeleton-text {
  height: 16px;
  width: 80%;
  margin: 0 auto 15px;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
