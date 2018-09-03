<template>
  <div id="app">
    <div class="header">Heads <span class="yellow">and</span> Hands Device Location</div>
    <Menu id="menu" v-bind:items="devices" v-on:sel-item="selItem($event)"/>
    <Map v-bind:cx="mapScale * selDevicePosition.PosX" v-bind:cy="mapScale * selDevicePosition.PosY" v-bind:mapScale="mapScale"/> 
  </div>
</template>

<script>
const axios = require('axios')
import Map from './components/Map.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    Map,
    Menu
  },
  data: function() {
    return {
      devices: [],
      positions: [],
      selDevice: null,
      selDevicePosition: {cx:0, cy:0},
      timer: '',
      mapScale: 1.5
    }
  },
  methods: {
    selItem: function(selId) {
      this.selDevice = this.devices.find((item) => {return item.ID === selId})
      this.selDevicePosition = this.positions.find((item) => {return item.DeviceID === selId})
    },
    updatePositions: function() {
      axios
      .get('http://d.handh.ru:8887/position?token=fsdf')
      .then(
        response => {
          this.positions = response.data; 
          if (this.selDevice != undefined) {
            var selId = this.selDevice.ID;
            this.selItem(selId);
          }
        }
      );
    }
  },
  mounted() {
    axios
    .get('http://d.handh.ru:8887/device?token=fsdf')
    .then(
      response => {
        this.devices = response.data; 
      }
    );

    this.updatePositions();
    this.timer = setInterval(this.updatePositions, 3000)    
  },
  beforeDestroy() {
    clearInterval(this.timer)
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
