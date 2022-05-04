<template>
  <section class="filters">
    <ul class="filters__nav">
      <li
        class="filters__button"
        :class="filter.value === 'all' && 'active'"
        @click="getAllCharacters"
      >
        All
      </li>
      <li
        class="filters__button"
        :class="filter.value === 'female' && 'active'"
        @click="getCharactersByFilter({ type: 'gender', value: 'female' })"
      >
        Female
      </li>
      <li
        class="filters__button"
        :class="filter.value === 'male' && 'active'"
        @click="getCharactersByFilter({ type: 'gender', value: 'male' })"
      >
        Male
      </li>
      <li
        class="filters__button"
        :class="filter.value === 'genderless' && 'active'"
        @click="getCharactersByFilter({ type: 'gender', value: 'genderless' })"
      >
        Genderless
      </li>
      <li
        class="filters__button"
        :class="filter.value === 'alive' && 'active'"
        @click="getCharactersByFilter({ type: 'status', value: 'alive' })"
      >
        Alive
      </li>
      <li
        class="filters__button"
        :class="filter.value === 'dead' && 'active'"
        @click="getCharactersByFilter({ type: 'status', value: 'dead' })"
      >
        Dead
      </li>
      <li
        class="filters__button"
        :class="filter.value === 'unknown' && 'active'"
        @click="getCharactersByFilter({ type: 'status', value: 'unknown' })"
      >
        Unknown
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const getCharactersByFilter = ({ type, value }) => {
      store.dispatch("getCharactersByFilter", { type, value });
    };

    const getAllCharacters = () => {
      store.dispatch("getAllCharacters");
    };

    const filter = computed(() => {
      return store.state.filter;
    });

    return {
      getAllCharacters,
      getCharactersByFilter,
      filter,
    };
  },
};
</script>

<style lang="scss">
.filters {
  background: #F2F2F2;
  border-bottom: solid 3px #cccccc;
  height: 80px;
  width: 100%;

  &__nav {
    margin: 0 auto;
    width: var(--width-container);
  }

  &__button {
    cursor: pointer;
    float: left;
    text-align: center;
    line-height: 80px;
    position: relative;
    width: 12.28%;

    &.active {
      &:before {
        background: var(--background-active);
        bottom: 0;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        width: 100%;
      }
    }
  }
}
</style>