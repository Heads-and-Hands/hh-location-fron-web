<template>
  <div class="menu">
    <div class="menuHeader">Device list</div>
    <span>Filter:</span>
    <input type="text" class="filterText" v-model="search"/>
    <transition-group name="list" tag="p">
      <div class="list-item"
        v-bind:class="{ selectedItem: item.id === selectedDeviceID }"
        v-for="(item, i) in deviceList"
        v-bind:key="item.id"
        v-bind:item="item"
        @click="clickItem(item)"
      >
        {{ i + 1 + ": " + item.name }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: function(){
    return {
      search: ""
    }
  },
  methods: {
    clickItem: function(item) {
      this.$store.dispatch({
        type: 'mainStore/selectDevice',
        device: item
      });
    }
  },
  computed: {
    deviceList() {
      var s = this.search;
      return this.$store.state.mainStore.deviceList.filter(function(d) {
        return d.name.toLowerCase().indexOf(s) > -1;
      });
    },
    selectedDeviceID() {
      var d = this.$store.state.mainStore.selectedDevice;
      if (d == undefined) {
        return 0;
      } else {
        return d.id;
      }
    }
  }
}
</script>

<style scoped>

.filterText {
  width: 70%;
  margin-left: 10px;
}

.menu {
	float: left;
	padding-right: 50px;
  width: 250px;
  max-height: 800px;
  padding: 10px 10px 50px 10px;
  overflow-y: scroll;
}

.menuHeader {
  text-align: center;
  font-size: 24px;
  padding-bottom: 5px;
}

.list-item {
  padding: 3px 0px 5px 5px;
}

.selectedItem {
  background-color: rgb(247, 181, 0);
  color: white;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
