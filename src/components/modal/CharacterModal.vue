<template>
  <div class="container-modal">
    <article class="modal">
      <ModalHero :handlerCloseModal="handlerCloseModal" />
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
            <ModalInfoCard
              :title="'Type'"
              :label="character.type || 'Unknown'"
            />
          </div>
        </section>
        <section class="modal__section">
          <h3 class="modal__title-section">Episodios</h3>

          <div class="modal__episodes-container">
            <ModalEpisodeCard
              v-for="episode in episodes"
              :key="episode.id"
              :episode="episode"
            />
          </div>
        </section>
        <section class="modal__section">
          <h3 class="modal__title-section">Personajes interesantes</h3>

          <div class="modal__interesting-haracters">
            <Card
              v-for="character in interestingCharacters"
              :key="character.id"
              :character="character"
            />
          </div>
        </section>
        <button class="modal__button-share">Compartir personaje</button>
      </div>
    </article>
  </div>
</template>

<script>
import Star from "../FavoriteStar";
import ModalInfoCard from "./ModalInfoCard";
import ModalEpisodeCard from "./ModalEpisodeCard";
import ModalHero from "./ModalHero";
import Card from "../CharacterCard";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Star,
    ModalInfoCard,
    ModalHero,
    ModalEpisodeCard,
    Card,
  },
  setup() {
    const store = useStore();

    const character = computed(() => store.state.modal.character);
    const interestingCharacters = computed(
      () => store.state.modal.interestingCharacters
    );
    const episodes = computed(() => store.state.modal.episodes);

    console.log({
      episodes: store.state.modal.episodes,
    });

    const handlerCloseModal = () => {
      store.dispatch("closeModal");
    };

    return {
      handlerCloseModal,
      character,
      interestingCharacters,
      episodes,
    };
  },
};
</script>

<style lang="scss">
.container-modal {
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  width: 100%;
}

.modal {
  background-color: var(--background-body);
  border-radius: 10px;
  left: 50%;
  padding-bottom: 27px;
  position: absolute;
  top: 100px;
  transform: translateX(-50%);
  width: 740px;

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
    &:last-child {
      border: none;
    }
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

  &__episodes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    place-content: center;
    place-items: center;
  }

  &__interesting-haracters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    place-content: center;
    place-items: center;
  }

  &__button-share {
    background: var(--background-green);
    border-radius: 60px;
    color: var(--text-white);
    float: right;
    height: 44px;
    margin-top: 50px;
    width: 204px;
  }
}
</style>