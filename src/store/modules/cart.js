const state = {
  item: 0,
  openCart: false,
};
const mutations = {
  addItem(state, payload) {
    state.item = payload;
  },
  openCart(state) {
    state.openCart = true;
  },
  closeCart(state) {
    state.openCart = false;
  },
};
const actions = {
  addItemToCard({ commit }, item) {
    commit("addItem", item);
  },
  openCart({ commit }) {
    commit("openCart");
  },
  closeCart({ commit }) {
    commit("closeCart");
  },
};

const getters = {
  getItemNumber(state) {
    return state.item;
  },
  isCartVisible(state) {
    return state.openCart;
  },
};

export const cartModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
