<template>
  <div class="star">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      :fill="isFavorite ? '#F2994A' : '#828282'"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.10313 0.625769L6.06251 5.28046L1.49688 6.02929C0.678132 6.16288 0.350007 7.29843 0.943757 7.94882L4.24688 11.5699L3.46563 16.6852C3.32501 17.6098 4.19063 18.3023 4.91563 17.8699L9.00001 15.4547L13.0844 17.8699C13.8094 18.2988 14.675 17.6098 14.5344 16.6852L13.7531 11.5699L17.0563 7.94882C17.65 7.29843 17.3219 6.16288 16.5031 6.02929L11.9375 5.28046L9.89688 0.625769C9.53126 -0.203918 8.47188 -0.214465 8.10313 0.625769Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["isFavorite"],
};
</script>

<style lang="scss">
.star {
  background: var(--background-gray);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  width: 30px;
}
</style>