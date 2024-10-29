<script>
export default {
  name: 'ToolBarComponent',
  components: {}
}
</script>

<template>
  <pv-toolbar class="c-toolbar">
    <template #center>
      <h1>Online Gaming List</h1>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.c-toolbar {
  width: 100%;
  background-color: #27292d;
  color: #49acff;
  border-color: #27292d;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}
</style>