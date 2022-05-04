<template>
  <div class="card">
    <div
      class="card__image-container"
      :style="{ backgroundImage: `url(${character.image})` }"
    >
      <div class="card__favorite">
        <Star />
      </div>
    </div>
    <div class="card__info-container">
      <div class="card__specie-status">
        <div
          class="card__is-alive-circle"
          :style="{ background: isAlive(character) }"
        ></div>
        <span>{{ character.status }} - {{ character.species }}</span>
      </div>
      <p class="card__name">
        {{ character.name }}
      </p>
      <p class="card__label">Location:</p>
      <p class="card__value">
        {{ character.location.name }}
      </p>
    </div>
  </div>
</template>

<script>
import Star from "./FavoriteStar";

export default {
  props: ["character"],
  components: {
    Star,
  },
  setup() {
    const isAlive = ({ status }) =>
      status === "Alive" ? "#27AE60" : "#EB5757";

    return {
      isAlive,
    };
  },
};
</script>

<style lang="scss" >
.card {
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #E0E0E0;
  cursor: pointer;
  height: 140px;
  overflow: hidden;
  width: 100%;

  &__image-container {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    float: left;
    height: 140px;
    position: relative;
    width: 140px;
  }

  &__favorite {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  &__info-container {
    float: left;
    height: 100%;
    padding: 20px 15px;
    width: calc(100% - 140px);
  }

  &__specie-status {
    font-size: 10px;

    span {
      display: inline-block;
    }
  }

  &__is-alive-circle {
    border-radius: 50%;
    color: var(--text-gray);
    display: inline-block;
    height: 6px;
    margin-right: 5px;
    width: 6px;
  }

  &__name {
    font-size: 16px;
    margin-bottom: 5px;
  }

  &__label {
    color: var(--text-gray);
    font-size: 10px;
    margin-top: 5px;
  }

  &__value {
    font-size: 12px;
  }
}
</style>