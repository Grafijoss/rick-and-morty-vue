<template>
  <section class="filters">
    <ul class="filters__nav">
      <li class="filters__button active">All</li>
      <li class="filters__button">Female</li>
      <li class="filters__button">Male</li>
      <li class="filters__button">Genderless</li>
    </ul>
  </section>
</template>

<script>
export default {};
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
    float: left;
    text-align: center;
    line-height: 80px;
    position: relative;
    width: 25%;

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