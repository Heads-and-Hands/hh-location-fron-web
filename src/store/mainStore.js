/* eslint-disable */
const axios = require('axios')

export default {
    namespaced: true,
    state: {
        deviceList: [],
        selectedDevice: null,
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
        showPosition (state, deviceID) {
            var tmpPos = state.positions.find((item) => {return item.DeviceID === deviceID}) 
            if (tmpPos == undefined) {
                state.selectedPosition = {x:0, y:0};
            } else {
                state.selectedPosition.x = tmpPos.PosX;
                state.selectedPosition.y = tmpPos.PosY;
            }
        }
    },
    actions: {
        loadDevices({ commit }) {
            axios
            .get('http://d.handh.ru:8887/device?token=fsdf')
            .then(
              response => {
                commit('addDevices', response.data);
              }
            );
        },
        loadPositions({ commit }) {
            var startRequest = function() {
                axios
                .get('http://d.handh.ru:8887/position?token=fsdf')
                .then(
                  response => {
                      commit('updatePositions', response.data);
                  }
                );
            }
            startRequest();
            this.timer = setInterval(startRequest, 3000);
        },
        selectDevice({ commit }, device) {
            commit('selectDevice', device.device);
            commit('showPosition', device.device.ID);            
        }
    }
}