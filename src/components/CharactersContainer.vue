<template>
  <main class="characters-container">
    <FavoriteFilter />
    <CardsList />
  </main>
</template>

<script>
import FavoriteFilter from "./FavoriteFilter";
import CardsList from "./CardsList";
export default {
  components: {
    FavoriteFilter,
    CardsList,
  },
};
</script>

<style lang="scss">
.characters-container {
  margin: 0 auto;
  padding: 46px 0 59px;
  width: var(--width-container);
}
</style>