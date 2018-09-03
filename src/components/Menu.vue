<template>
  <div class="menu">
    <div 
      v-bind:class="{ selectedItem: item.ID === selId }"
      v-for="(item, i) in items"
      v-bind:key="item.ID"
      v-bind:item="item"
      @click="clickItem(item)"
    >
      {{ i + 1 + ": " + item.Name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['items'],
  methods: {
    clickItem: function(item) {
      this.selId = item.ID      
      this.$emit('sel-item', item.ID);
    }
  },
  data: function() {
    return {
      selId: null
    }
  }
}
</script>

<style scoped>
.menu {
	float: left;
	padding-right: 50px;
}

.selectedItem {
  background-color: aquamarine;
}
</style>
