<template>
  <div class="cover"></div>
  <article class="modal">
    <section
      class="modal__hero"
      :style="{ backgroundImage: `url(${require('../assets/hero.png')})` }"
    >
      <button class="modal__close" @click="handlerCloseModal">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0.46875C6.97266 0.46875 0.46875 6.97266 0.46875 15C0.46875 23.0273 6.97266 29.5312 15 29.5312C23.0273 29.5312 29.5312 23.0273 29.5312 15C29.5312 6.97266 23.0273 0.46875 15 0.46875ZM22.125 18.8145C22.4004 19.0898 22.4004 19.5352 22.125 19.8105L19.8047 22.125C19.5293 22.4004 19.084 22.4004 18.8086 22.125L15 18.2812L11.1855 22.125C10.9102 22.4004 10.4648 22.4004 10.1895 22.125L7.875 19.8047C7.59961 19.5293 7.59961 19.084 7.875 18.8086L11.7188 15L7.875 11.1855C7.59961 10.9102 7.59961 10.4648 7.875 10.1895L10.1953 7.86914C10.4707 7.59375 10.916 7.59375 11.1914 7.86914L15 11.7188L18.8145 7.875C19.0898 7.59961 19.5352 7.59961 19.8105 7.875L22.1309 10.1953C22.4062 10.4707 22.4062 10.916 22.1309 11.1914L18.2812 15L22.125 18.8145Z"
            fill="white"
          />
        </svg>
      </button>
    </section>
    <section class="modal__info-character">
      <div
        class="modal__avatar"
        :style="{ backgroundImage: `url(${character.image})` }"
      >
        <div class="modal__favorite">
          <Star />
        </div>
      </div>
      <p class="modal__status">{{ character.status }}</p>
      <p class="modal__name">{{ character.name }}</p>
      <p class="modal__species">{{ character.species }}</p>
    </section>
    <div class="modal__sections-container">
      <section class="modal__section">
        <h3 class="modal__title-section">Información</h3>

        <div class="modal__info-cards-container">
          <ModalInfoCard :title="'Gender'" :label="character.gender" />
          <ModalInfoCard :title="'Origin'" :label="character.origin.name" />
          <ModalInfoCard :title="'Type'" :label="character.type || 'Unknown'" />
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import Star from "./Star";
import ModalInfoCard from "./ModalInfoCard";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Star,
    ModalInfoCard,
  },
  setup() {
    const store = useStore();

    const character = computed(() => store.state.modal.character);

    console.log({
      character: store.state.modal,
    });

    const handlerCloseModal = () => {
      store.dispatch("closeModal");
    };

    return {
      handlerCloseModal,
      character,
    };
  },
};
</script>

<style lang="scss">
.cover {
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
}

.modal {
  background-color: var(--background-body);
  border-radius: 10px;
  left: 50%;
  overflow: hidden;
  padding-bottom: 27px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 740px;

  &__hero {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 220px;
    position: relative;
    width: 100%;

    &:before {
      background: rgba(0, 0, 0, 0.5);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
    }
  }

  &__close {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  &__info-character {
    background-color: var(--background-gray);
    padding: 90px 0 20px;
    position: relative;
    text-align: center;
    width: 100%;
  }

  &__avatar {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 4px solid #FFFBFB;
    box-sizing: border-box;
    border-radius: 50%;
    height: 155px;
    left: 50%;
    position: absolute;
    top: -50%;
    transform: translateX(-50%);
    width: 155px;
  }

  &__status {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  &__name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  &__species {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  &__favorite {
    bottom: -15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &__sections-container {
    padding: 0 21px;
  }

  &__section {
    border-bottom: 1px solid #E0E0E0;
    padding: 21px 0;
  }

  &__title-section {
    font-size: 20px;
    margin-bottom: 17px;
  }

  &__info-cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>