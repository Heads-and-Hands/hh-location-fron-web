<template>
  <div id="app">
    <div class="header">Heads <span class="yellow">and</span> Hands Device Location</div>
    <Menu id="menu"/>
    <Map v-bind:mapScale="1.2"/> 
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    Map,
    Menu
  },
  mounted() {
    this.$store.dispatch('mainStore/updateData');
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

.header {
  font-size: 3em;
  text-align: center;
  margin-bottom: 10px;
}

.header > .yellow {
  color: rgb(243, 181, 9);
}
</style>
