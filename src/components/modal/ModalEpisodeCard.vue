<template>
  <div class="episode-card">
    <p class="episode-card__label">
      {{ episode.name }}
    </p>
    <p class="episode-card__big-label">
      {{ episode.episode }}
    </p>
    <p class="episode-card__label air-date">
      {{ episode.air_date }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["episode"],
};
</script>

<style lang="scss">
.episode-card {
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 72px;
  justify-content: center;
  padding: 0 12px;
  width: 163px;

  &__label {
    font-size: 11px;
    svg {
      display: inline-block;
      vertical-align: middle;
    }
  }

  &__big-label {
    font-weight: 600;
    font-size: 17px;
  }
}
</style>