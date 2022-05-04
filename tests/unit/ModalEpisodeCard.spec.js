import { shallowMount } from '@vue/test-utils'
import ModalEpisodeCard from '@/components/modal/ModalEpisodeCard.vue'


describe('ModalEpisodeCard', () => {
    it('should render the props properly', () => {
        const episode = {
            air_date: "August 16, 2015",
            name: "Total Rickall",
            episode: "S02E04",
        }
        const wrapper = shallowMount(ModalEpisodeCard, {
          props: { episode }
        })
        expect(wrapper.find('.episode-card__label').text()).toEqual(episode.name);
        expect(wrapper.find('.episode-card__big-label').text()).toEqual(episode.episode);
        expect(wrapper.find('.air-date').text()).toEqual(episode.air_date);
    })
})