<template>
  <div class="search" @submit="findCharacterByName">
    <form action="">
      <button class="search__button">
        <img src="../assets/search-icon.png" alt="" />
      </button>
      <input
        v-model="name"
        class="search__input"
        type="text"
        placeholder="Buscar personaje"
      />
    </form>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const name = ref("");
    const store = useStore();

    watch(
      () => store.state.filter,
      function () {
        if (store.state.filter.value !== "") {
          name.value = "";
        }
      }
    );

    watch(
      () => store.state.matchName,
      function () {
        if (store.state.matchName !== "") {
          name.value = store.state.matchName;
        }
      }
    );

    const findCharacterByName = (e) => {
      e.preventDefault();
      store.dispatch("getCharactersByName", name.value);
    };

    return {
      name,
      findCharacterByName,
    };
  },
};
</script>

<style lang="scss">
.search {
  background: #081F32;
  border: 2px solid #F2F2F2;
  box-sizing: border-box;
  border-radius: 6px;
  height: 60px;
  max-width: 500px;
  width: 100%;

  form {
    height: 100%;
    width: 100%;
  }

  &__button {
    align-items: center;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    width: 50px;
    img {
      width: 28px;
    }
  }

  &__input {
    color: var(--text-white);
    float: left;
    line-height: 56px;
    margin-left: 10px;
    width: calc(100% - 60px);
  }
}
</style>