<template>
  <main class="characters-container">
    <FavoriteFilter />
    <Pager />
    <CardsList />
  </main>
</template>

<script>
import FavoriteFilter from "./FavoriteFilter";
import Pager from "./PagerPages";
import CardsList from "./CardsList";
export default {
  components: {
    FavoriteFilter,
    CardsList,
    Pager,
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