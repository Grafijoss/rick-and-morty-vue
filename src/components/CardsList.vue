<template>
  <div class="cards-container">
    <div
      class="cards-container__item"
      v-for="character in characters"
      :key="character.id"
    >
      <Card :character="character" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Card from "./Card";

export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });

    onMounted(() => {
      store.dispatch("getAllCharacters");
    });

    return {
      characters,
    };
  },
};
</script>

<style lang="scss">
.cards-container {
  margin-top: 22px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  place-content: center;
  place-items: center;

  &__item {
    width: 100%;
    height: 140px;
    border: 1px solid #E0E0E0;
    border-radius: 20px;
  }
}
</style>