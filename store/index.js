// Utils

const authRequest = ( email, password ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(email !== 'test@gmail.com' || password !== 'qwerty') {
        reject('Wrong credentials');
      } else {
        resolve(true);
      }
    }, 1000);
  });
}

const userDataRequest = () => {
    return Promise.resolve({
      name: 'John Doe',
      email: 'test@gmail.com',
      avatar: '/avatar.jpg'
    });
}

// Store

export const state = () => ({
  user: null,
  authorized: false,
  error: ''
});

export const mutations = {
  setAuth(state, authorized) {
    state.authorized = authorized;
  },
  setUserData(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  }
};

export const actions = {
  async logIn ({ commit, dispatch }, credentials) {
    try {
      await authRequest(credentials.email, credentials.password);
      commit('setAuth', true);
      dispatch('getUserData');
    } catch (error) {
      commit('setAuth', false);
      commit('setError', error);
      setTimeout(() => commit('setError', ''), 3000);
    }
  },

  logOut ({ commit }) {
    commit('setUserData', null);
    commit('setAuth', false);
  },

  async getUserData ({ commit }) {
    try {
      const user = await userDataRequest();
      commit('setUserData', user);
    } catch (error) {
      commit('setUserData', null);
    }
  }
};