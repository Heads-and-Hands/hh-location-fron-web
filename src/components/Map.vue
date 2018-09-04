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
            :x="selPosition.x"
            :y="selPosition.y"
            form="circle"
            fill="#ffaaaa"
            stroke="red"
            :dimensions="100"
            :align="['center','center']"
          >    
          </easel-shape>
          <easel-shape
            :x="selPosition.x"
            :y="selPosition.y"
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
export default {
  name: 'Map',
  props: ['mapScale'],
  computed: {
    havePosition() {
      var tmpPos = this.$store.state.mainStore.selectedPosition;
      return (tmpPos.x > 0) || (tmpPos.y > 0)
    },
    selPosition() {
      var tmpPos = this.$store.state.mainStore.selectedPosition;
      return {
        x: tmpPos.x * this.mapScale,
        y: tmpPos.y * this.mapScale,
      }
    }
  }
}
</script>

<style scoped>

</style>
