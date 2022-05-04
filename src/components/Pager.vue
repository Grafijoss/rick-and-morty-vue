<template>
  <div class="pager">
    <button
      class="pager__button"
      :disabled="!paginationInfo.prev"
      @click="getPrevPage"
    >
      Anterior
    </button>
    <p class="pager__info" v-if="!!paginationInfo.pages">
      Pagina {{ paginationInfo.current }} de {{ paginationInfo.pages }}
    </p>
    <button
      class="pager__button"
      :disabled="!paginationInfo.next"
      @click="getNextPage"
    >
      Siguiente
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const paginationInfo = computed(() => store.state.paginationInfo);

    const getNextPage = () => {
      store.dispatch("getAllCharacters", "next");
    };

    const getPrevPage = () => {
      store.dispatch("getAllCharacters", "prev");
    };

    return {
      paginationInfo,
      getNextPage,
      getPrevPage,
    };
  },
};
</script>

<style lang="scss">
.pager {
  display: flex;
  flex-direction: row;
  align-items: center;
  float: right;

  &__button {
    background: var(--background-gray);
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    line-height: 30px;
    margin-left: 10px;
    padding: 0 10px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &__info {
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>