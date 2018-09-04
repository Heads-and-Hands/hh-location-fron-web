import Http from '@/services/Http'

export default {
    namespaced: true,
    state: {
        deviceList: [],
        selectedDevice: undefined,
        positions: [],
        selectedPosition: {
            x: 0,
            y: 0
        }
    },
    mutations: {
        addDevices (state, newDevices) {
            state.deviceList = newDevices;
        },
        selectDevice (state, selDevice) {
            state.selectedDevice = selDevice;
        },
        updatePositions (state, newPositions) {
            state.positions = newPositions;
        },
        showPosition (state) {
            var selDevice = state.selectedDevice;
            if (selDevice != undefined) {
                var deviceId = selDevice.id;
                var tmpPos = state.positions.find((item) => {return item.deviceId === deviceId}) 
            }

            if (tmpPos == undefined) {
                state.selectedPosition = {x:0, y:0};
            } else {
                state.selectedPosition.x = tmpPos.posX;
                state.selectedPosition.y = tmpPos.posY;
            }
        }
    },
    actions: {
        updateData({ commit }) {
            var loadPosition = function() {
                Http
                .get('position')
                .then(
                  response => {
                      commit('updatePositions', response.data);
                  }
                );
            }            
            var loadDevices = function() {            
                Http
                .get('device')
                .then(
                response => {
                    commit('addDevices', response.data);
                }
                );
            }
            var loadData = function() {
                loadDevices();
                loadPosition();
                commit('showPosition')
            }
            this.timer = setInterval(loadData, 3000);
        },
        selectDevice({ commit }, device) {
            commit('selectDevice', device.device);
            commit('showPosition');            
        }
    }
}