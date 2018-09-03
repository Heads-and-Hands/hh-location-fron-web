<template>
  <div id="app">
    <Menu id="menu" v-bind:items="devices" v-on:sel-item="selItem($event)"/>
    <Map v-bind:cx="selDevicePosition.PosX" v-bind:cy="selDevicePosition.PosY"/> 
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
      selDevicePosition: {cx:undefined, cy:undefined},
      timer: ''
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
</style>
