// Utils
const authRequest = ( email, password ) => {
  return new Promise((resolve, reject) => {
    if(email !== 'test@gmail.com' || password !== 'qwerty') {
      reject('Wrong credentials');
    } else {
      resolve(true);
    }
  });
}

const userDataRequest = () => {
  console.log('inside userDataRequest');
  return Promise.resolve({
    name: 'John Doe',
    email: 'test@gmail.com'
  });
}

export const state = () => ({
  user: null,
  authorized: false
});

export const mutations = {
  setAuth(state, authorized) {
    state.authorized = authorized;
  },
  setUserData(state, user) {
    state.user = user;
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
      console.log(error);
    }
  },

  async getUserData ({ commit }) {
    try {
      const user = await userDataRequest();
      console.log(user);
      commit('setUserData', user);
    } catch (error) {
      commit('setUserData', null);
      console.log(error);
    }
  }
};

export const getters = {
  //authorized: state => !!state.user
};