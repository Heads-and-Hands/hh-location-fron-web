<template>
    <easel-canvas width="700" height="450">
      <easel-bitmap
        image="/img/map.png"
        :scale="1.0"
      >
      </easel-bitmap>
      <easel-shape
        :alpha="cx === undefined ? 0.5 : 0"
        :x=cx
        :y=cy
        form="circle"
        fill="#ffaaaa"
        stroke="red"
        :dimensions="30"
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
  props: ['cx', 'cy']
}
</script>

<style scoped>

</style>
