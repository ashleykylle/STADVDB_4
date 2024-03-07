<script setup>
import AppHeader from './components/AppHeader.vue'

</script>

<template>
  <header>
    <AppHeader>
  </AppHeader>
  <Router-view>

  </Router-view>
  </header>
</template>

<style scoped>

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100vw;   

    background-color: black;
    text-align: center;
  }
}
</style>