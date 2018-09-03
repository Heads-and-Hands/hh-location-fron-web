<template>
  <div class="menu">
    <div 
      v-for="(item, i) in items"
      v-bind:key="item.ID"
      v-bind:item="item"
      @click="$emit('sel-item', item.ID)"
    >
      {{ i + 1 + ": " + item.Name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['items']
}
</script>

<style scoped>
.menu {
	float: left;
	padding-right: 50px;
}
</style>
