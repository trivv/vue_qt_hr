import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    isAuth: !!localStorage.getItem('token'),
    role: ''
  },
  getters: {
    isLoggedIn(state) {
      return state.isAuth
    }
  },
  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
    setRole(state, role) {
      state.role = role;
    }
  }
});
