<template>
    <easel-canvas width="1100" height="1450">
      <easel-bitmap
        image="/img/map.png"
        :scale=mapScale
      >
      </easel-bitmap>
      <easel-shape
        :alpha="0.5"
        :x=cx
        :y=cy
        form="circle"
        fill="#ffaaaa"
        stroke="red"
        :dimensions="100"
        :align="['center','center']"
      >    
      </easel-shape>
      <easel-shape
        :x=cx
        :y=cy
        form="circle"
        fill="red"
        :dimensions="4"
        :align="['center','center']"
      >      
      </easel-shape>
    </easel-canvas>  
</template>

<script>
export default {
  name: 'Map',
  props: ['cx', 'cy', 'mapScale']
}
</script>

<style scoped>

</style>
