export default {
  state: {
    searchValue_disfood: "",
    trade: [],
  },
  mutations: {
    SET_TRADE_TO_STATE_DISFOOD: (state, trade) => {
      state.trade = trade;
    },

    SET_SEARCH_VALUE_DISFOOD: (state, value) => {
      state.searchValue_disfood = value;
    },
  },
  actions: {
    GET_TRADE_FROM_API_DISFOOD({ commit }) {
      return axios(
        "https://raw.githubusercontent.com/N1ikls/Disfood_2/master/public/orders.json",
        {
          method: "GET",
        }
      ).then((trade) => {
        commit("SET_TRADE_TO_STATE_DISFOOD", trade.data);
      });
    },

    GET_SEARCH_VALUE_DISFOOD({ commit }, value) {
      commit("SET_SEARCH_VALUE_DISFOOD", value);
    },
  },

  modules: {},

  getters: {
    trade(state) {
      return state.trade;
    },

    searchValue_disfood(state) {
      return state.searchValue_disfood;
    },
  },
};
