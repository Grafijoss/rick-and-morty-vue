<template>
  <div class="favorite">
    <p class="favorite__label">Mostrar favoritos:</p>
    <Star :isFavorite="isFavorite" @click="handlerSelectFavorite" />
  </div>
</template>

<script>
import { ref } from "vue";
import Star from "./FavoriteStar";
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
  align-items: center;
  display: flex;
  float: left;
  margin-bottom: 22px;
  &__label {
    font-size: 14px;
    margin-right: 10px;
  }
}
</style>