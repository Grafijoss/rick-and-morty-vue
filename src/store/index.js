import { createStore } from "vuex";
import { getCurrentPage, saveLocal } from "./utils";

export default createStore({
  state: {
    fetchUrl: "https://rickandmortyapi.com/api/character",
    characters: [],
    charactersFilter: [],
    paginationInfo: {},
    matchName: "",
    filter: {
      type: "",
      value: "all"
    },
    modal: {
      open: false,
      character: {}
    }
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
    },
    setFilter(state, payload) {
      state.filter = payload;
    },
    setMatchName(state, payload) {
      state.matchName = payload;
    },
    setModal(state, payload) {
      state.modal = payload;
    }
  },
  actions: {
    openModal({ commit }, character) {
      commit("setModal", {
        open: true,
        character
      });
    },
    closeModal({ commit }) {
      commit("setModal", {
        open: false,
        character: {}
      });
    },
    async getAllCharacters({ commit, state }, paginatorOption) {
      let url = state.fetchUrl;
      if (paginatorOption) url = `${state.paginationInfo[paginatorOption]}`;

      try {
        const response = await fetch(url);
        const { info, results } = await response.json();

        const infoWithCurrentPage = {
          ...info,
          current: getCurrentPage({ paginatorOption, info }),
          currentPage: url
        };

        commit("setCharacters", results);
        commit("setCharactersFilter", results);
        commit("setPaginationInfo", infoWithCurrentPage);
        commit("setMatchName", "");
        if (!paginatorOption) commit("setFilter", { type: "", value: "all" });

        saveLocal({ state, infoWithCurrentPage });
      } catch (error) {
        console.log({
          error
        });
      }
    },
    async getAllCharactersFromLocalStorage({ commit, state }, localState) {
      const {
        paginationInfo: { currentPage: url, current },
        filter: { type, value },
        matchName
      } = localState;

      try {
        const response = await fetch(url);
        const { info, results } = await response.json();

        const infoWithCurrentPage = {
          ...info,
          current: current,
          currentPage: url
        };

        commit("setCharacters", results);
        commit("setCharactersFilter", results);
        commit("setPaginationInfo", infoWithCurrentPage);
        commit("setFilter", { type, value });
        commit("setMatchName", matchName);
        saveLocal({ state, infoWithCurrentPage });
      } catch (error) {
        console.log({
          error
        });
      }
    },
    async getCharactersByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const url = `https://rickandmortyapi.com/api/character/?name=${formatName}`;
      try {
        const response = await fetch(url);
        const { info, results } = await response.json();

        const infoWithCurrentPage = {
          ...info,
          current: 1,
          currentPage: url
        };

        commit("setCharacters", results);
        commit("setCharactersFilter", results);
        commit("setPaginationInfo", infoWithCurrentPage);
        commit("setFilter", { type: "", value: "" });
        commit("setMatchName", name);
        saveLocal({ state, infoWithCurrentPage });
      } catch (error) {
        console.log({
          error
        });
      }
    },
    async getCharactersByFilter({ commit, state }, { type, value }) {
      const url = `https://rickandmortyapi.com/api/character/?${type}=${value}`;

      try {
        const response = await fetch(url);
        const { info, results } = await response.json();

        const infoWithCurrentPage = {
          ...info,
          current: 1,
          currentPage: url
        };

        commit("setCharacters", results);
        commit("setCharactersFilter", results);
        commit("setPaginationInfo", infoWithCurrentPage);
        commit("setFilter", { type, value });
        commit("setMatchName", "");
        saveLocal({ state, infoWithCurrentPage });
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
    }
  },
  modules: {}
});
