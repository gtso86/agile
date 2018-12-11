import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';

import show from '../components/show/vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  modules: {
    show,
  },
});
