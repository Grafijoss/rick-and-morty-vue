import { createStore } from "vuex";
import axios from "axios";
import {
  getCurrentPage,
  saveLocal,
  getRandomArray,
  mapResponses
} from "./utils";

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
      character: {},
      interestingCharacters: [],
      episodes: []
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
    async openModal({ commit }, character) {
      const randomArray = getRandomArray();

      try {
        const getInterestingCharacters = () => {
          return axios
            .get(`https://rickandmortyapi.com/api/character/${randomArray}`)
            .then((res) => res.data);
        };

        const interestingCharacters = await getInterestingCharacters();

        const getCharacterEpisodes = () => {
          const characterEpisodes =
            character.episode.length > 8
              ? character.episode.slice(0, 8)
              : character.episode;

          const episodesPromises = characterEpisodes.map((url) =>
            axios.get(url)
          );

          return axios.all(episodesPromises).then(
            axios.spread((...responses) => {
              return mapResponses(responses);
            })
          );
        };

        const episodes = await getCharacterEpisodes();
        document.body.style.overflow = "hidden";

        commit("setModal", {
          open: true,
          character,
          interestingCharacters,
          episodes
        });
      } catch (err) {
        console.log(err);
      }
    },
    closeModal({ commit }) {
      document.body.style.overflow = null;
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
        const response = () => {
          return axios.get(url).then((res) => res.data);
        };
        const { info, results } = await response();

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
        const response = () => {
          return axios.get(url).then((res) => res.data);
        };
        const { info, results } = await response();

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
        commit("setCharacters", undefined);
        commit("setCharactersFilter", undefined);
      }
    },
    async getCharactersByFilter({ commit, state }, { type, value }) {
      const url = `https://rickandmortyapi.com/api/character/?${type}=${value}`;

      try {
        const response = () => {
          return axios.get(url).then((res) => res.data);
        };
        const { info, results } = await response();

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
    }
  },
  modules: {}
});
