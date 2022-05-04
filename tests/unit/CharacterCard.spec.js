import { shallowMount } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard.vue'


describe('CharacterCard', () => {
    it('should render the props properly', () => {
        const character = {
            "id": 8,
            "name": "Adjudicator Rick",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
            "name": "unknown",
            "url": ""
            },
            "location": {
                "name": "Citadel of Ricks",
                "url": "https://rickandmortyapi.com/api/location/3"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/28"
            ],
            "url": "https://rickandmortyapi.com/api/character/8",
            "created": "2017-11-04T20:03:34.737Z"
        }
        const wrapper = shallowMount(CharacterCard, {
          props: { character }
        })
        expect(wrapper.find('.card__name').text()).toEqual(character.name);
        expect(wrapper.find('.card__value').text()).toEqual(character.location.name);
    })
})