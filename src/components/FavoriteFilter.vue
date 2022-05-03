<template>
  <div class="favorite">
    <p class="favorite__label">Mostrar favoritos:</p>
    <Star :isFavorite="isFavorite" @click="handlerSelectFavorite" />
  </div>
</template>

<script>
import { ref } from "vue";
import Star from "./Star";
export default {
  components: {
    Star,
  },
  setup() {
    const isFavorite = ref(false);

    const handlerSelectFavorite = () => {
      isFavorite.value = !isFavorite.value;
    };

    return {
      isFavorite,
      handlerSelectFavorite,
    };
  },
};
</script>

<style lang="scss">
.favorite {
  display: flex;
  align-items: center;
  &__label {
    font-size: 14px;
    margin-right: 10px;
  }
}
</style>