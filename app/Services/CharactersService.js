import { appState } from "../AppState.js"
import { Character } from "../Models/Character.js"


class CharactersService {

  // NOTE get with fetch
  async getCharactersWithFetch() {
    let response = await fetch('https://hp-api.onrender.com/api/characters')
    let data = await response.json()
    console.log(data)
    // appState.characters = data
    appState.characters = data.map(char => new Character(char)) // Changes the pojos from the network request into classed objects
    console.log('AppState', appState.characters)
  }

  async getCharacters() {
    // @ts-ignore the code doesn't know axios exists until the index is read
    let response = await axios.get('https://hp-api.onrender.com/api/characters')
    console.log('axios', response)
    appState.characters = response.data.map(char => new Character(char)) // response.data.map cause data is a property on response
    console.log('AppState', appState.characters)
  }

  async getHouseCharacters(house) {
    // @ts-ignore
    const response = await axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`)
    console.log('house characters', response.data)
    appState.characters = response.data.map(c => new Character(c))
  }
}

export const charactersService = new CharactersService()