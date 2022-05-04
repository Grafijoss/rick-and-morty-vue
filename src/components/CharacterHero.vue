<template>
  <section
    class="hero"
    :style="{ backgroundImage: `url(${require('../assets/hero.png')})` }"
  >
    <div class="hero__content">
      <img class="logo" alt="Rick and Morty logo" src="../assets/logo.png" />
      <Search />
    </div>
  </section>
</template>

<script>
import Search from "./SearchCharacter";
export default {
  components: {
    Search,
  },
};
</script>

<style lang="scss">
.hero {
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  height: 455px;
  justify-content: center;
  max-width: 1440px;
  position: relative;
  width: 100%;
  &:before {
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    position: relative;
    width: 100%;
  }
}

.logo {
  width: 347px;
}
</style>