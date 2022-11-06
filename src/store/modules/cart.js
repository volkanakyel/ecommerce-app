const state = {
  item: 0,
};
const mutations = {
  addItem(state, payload) {
    state.item = payload;
  },
};
const actions = {
  addItemToCard({ commit }, item) {
    commit("addItem", item);
  },
};

const getters = {
  getItemNumber(state) {
    return state.item;
  },
};

export const cartModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
