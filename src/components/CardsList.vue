<template>
  <div class="not-found-container" v-if="!characters">
    <h3 class="not-found-container__title">Uh-oh!</h3>
    <p class="not-found-container__description">
      ¡Pareces perdido en tu viaje!
    </p>
    <button class="not-found-container__button" @click="handlerRemoveFilters">
      Eliminar filtros
    </button>
  </div>
  <div class="cards-container" v-else>
    <Card
      v-for="character in characters"
      :key="character.id"
      @click="handllerOpenModal(character)"
      :character="character"
    />
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Card from "./CharacterCard";

export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const characters = computed(() => store.state.charactersFilter);

    const handlerRemoveFilters = () => {
      store.dispatch("getAllCharacters");
    };

    const handllerOpenModal = (character) => {
      store.dispatch("openModal", character);
    };

    onMounted(() => {
      let localState = localStorage.getItem("state");
      if (localState) {
        localState = JSON.parse(localState);
        store.dispatch("getAllCharactersFromLocalStorage", localState);
      } else {
        store.dispatch("getAllCharacters");
      }
    });

    return {
      characters,
      handlerRemoveFilters,
      handllerOpenModal,
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
}

.not-found-container {
  align-items: center;
  display: flex;
  font-family: "Lato", sans-serif;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  margin-top: 22px;
  width: 100%;

  &__title {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 15px;
  }

  &__description {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &__button {
    background: var(--background-green);
    border-radius: 60px;
    color: var(--text-white);
    cursor: pointer;
    line-height: 44px;
    padding: 0 20px;
    width: 156px;
  }
}
</style>