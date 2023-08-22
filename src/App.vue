<template>
  <div id="app">
    <Header />
    <router-view /> <!-- Qui verranno visualizzati i componenti delle pagine -->
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
/* Stili globali dell'app */
</style>
