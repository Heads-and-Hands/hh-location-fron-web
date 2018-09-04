<template>
    <easel-canvas width="1100" height="1450">
      <easel-bitmap
        image="/img/map.jpg"
        :scale=mapScale
      >
      </easel-bitmap>
        <easel-container
          :alpha="havePosition ? 1 : 0"
        >
          <easel-shape
            :alpha="0.5"
            :x="dataPosition.x"
            :y="dataPosition.y"
            form="circle"
            fill="#ffaaaa"
            stroke="red"
            :dimensions="100"
            :align="['center','center']"
          >    
          </easel-shape>
          <easel-shape
            :x="dataPosition.x"
            :y="dataPosition.y"
            form="circle"
            fill="red"
            :dimensions="4"
            :align="['center','center']"
          >      
          </easel-shape>
      </easel-container>
    </easel-canvas>  
</template>

<script>

import {TweenMax, Power4} from 'gsap'

export default {
  name: 'Map',
  props: ['mapScale'],
  data: function() {
    return {
      dataPosition: {
        x: 0,
        y: 0
      },
      newPosition: {
        x: 0,
        y: 0
      },
    }
  },
  computed: {
    havePosition() {
      var tmpPos = this.$store.state.mainStore.selectedPosition;
      return (tmpPos.x > 0) || (tmpPos.y > 0)
    },
    selPosition() {
      var tmpPos = this.$store.state.mainStore.selectedPosition;
      this.newPosition = {x: tmpPos.x * this.mapScale, y: tmpPos.y * this.mapScale};
      return this.newPosition;
    }
  },
  watch: {
    selPosition: function(newVal) {
      TweenLite.to(this.dataPosition, 1, this.newPosition);
    }
  }
}
</script>

<style scoped>

</style>
