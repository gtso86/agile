
import { http } from '../../../services/http';

export default {
  fetchShow({ commit }, id) {
    http.get(`/SHOW${id}.json`).then((response) => {
      commit('SET_SHOW', response.data);
    });
  },
};
