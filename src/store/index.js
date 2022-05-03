import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    paginationInfo: {}
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
    setPaginationInfo(state, payload) {
      state.paginationInfo = payload;
    }
  },
  actions: {
    async getAllCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const { info, results } = await response.json();

        commit("setCharacters", results);
        commit("setCharactersFilter", results);
        commit("setPaginationInfo", info);
      } catch (error) {
        console.log({
          error
        });
      }
    },
    async getMultipleCharacters({ commit }) {
      const randomArray = [];

      while (randomArray.length < 100) {
        randomArray.push(randomArray.length + 1);
      }

      randomArray.sort(() => Math.random() - 0.5);

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${randomArray}`
        );
        const data = await response.json();
        commit("setCharacters", data);
        commit("setCharactersFilter", data);
      } catch (error) {
        console.log({
          error
        });
      }
    },
    async getCharactersByName({ commit }, name) {
      const formatName = name.toLowerCase();
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${formatName}`
        );
        const data = await response.json();

        console.log({
          data
        });
        // commit("setCharacters", data.results);
        // commit("setCharactersFilter", data.results);
      } catch (error) {
        console.log({
          error
        });
      }
    }
  },
  modules: {}
});
