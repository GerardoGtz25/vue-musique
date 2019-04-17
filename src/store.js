import Vue from 'vue';
import Vuex from 'vuex';

import trackService from './service/track'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    track: {}
  },

  getters: {
    trackTitle(state) {
      if(!state.track.name) { return '' }
      `${state.track.name} - ${state.track.artists[0].name}`
      return 
    }
  },

  mutations: {
    setTrack(state, track) {
      state.track = track
    }
  },

  actions: {
    getTrackById(context, playload) {
      return trackService.getById(playload.id).then(res => {
        context.commit('setTrack', res)
        return res
      })
    }
  },
});
