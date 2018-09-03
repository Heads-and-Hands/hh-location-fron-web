<template>
    <easel-canvas width="700" height="400">
      <easel-bitmap
        image="/img/map.png"
        :scale="0.15"
      >
      </easel-bitmap>
      <easel-shape
        :alpha="0.5"
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
