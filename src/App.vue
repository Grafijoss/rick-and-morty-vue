<template>
  <div class="container">
    <Hero />
    <Filters />
    <CharactersContainer />
    <Footer />
  </div>
  <Modal v-if="modal.open" />
</template>

<script>
import Hero from "./components/CharacterHero";
import Filters from "./components/CharacterFilters";
import CharactersContainer from "./components/CharactersContainer";
import Footer from "./components/CharacterFooter";
import Modal from "./components/modal/CharacterModal";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    Hero,
    Filters,
    CharactersContainer,
    Footer,
    Modal,
  },
  setup() {
    const store = useStore();

    const modal = computed(() => store.state.modal);

    return {
      modal,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@700&display=swap");

:root {
  --background-body: #FFFFFF;
  --background-card: #3C3E44;
  --background-gray: #E0E0E0;
  --background-active: #34C759;
  --background-green: #11555F;
  --text-white: #FFFFFF;
  --text-black: #000000;
  --text-gray: #828282;
  --text-orange: #FF9800;
  --width-container: 1120px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-black);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}
img {
  width: 100%;
}
button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

input {
  all: unset;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
