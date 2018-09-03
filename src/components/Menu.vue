<template>
  <div class="menu">
    <div class="menuHeader">Device list</div>
    <div class="item"
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
  width: 250px;
  padding: 10px 10px 50px 10px;
}

.menuHeader {
  text-align: center;
  font-size: 24px;
  padding-bottom: 5px;
}

.item {
  padding: 5px 0px 5px 5px;
}

.selectedItem {
  background-color: rgb(247, 181, 0);
  color: white;
}
</style>
