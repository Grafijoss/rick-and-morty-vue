<template>
  <div class="container">
    <Hero />
    <Filters />
    <CharactersContainer />
    <Footer />
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import CharactersContainer from "./components/CharactersContainer";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Hero,
    Filters,
    CharactersContainer,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");

:root {
  --background-body: #FFFFFF;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-black: #000000;
  --text-gray: #828282;
  --text-orange: #FF9800;
  --background-active: #34C759;
  --width-container: 1120px;
  --background-favorite: #E0E0E0;
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
