import { appState } from "../AppState.js"
import { charactersService } from "../Services/CharactersService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawCharacters() {
  let characters = appState.characters
  let template = ''
  characters.forEach(c => template += c.CardTemplate)
  setHTML('characters', template)
}



export class CharactersController {
  constructor() {
    console.log("You're a wizrd Harray")
    // let data = fetch('https://hp-api.onrender.com/api/characters/')
    // console.log(data)
    appState.on('characters', _drawCharacters)

    this.getCharacters()

  }


  async getCharacters() {
    try { // * try to do this
      await charactersService.getCharacters() // await is required here so the try waits for the service's resolution
    } catch (error) { // * if in this process you fail, do this instead
      console.error(error) // repeat the error for developers
      Pop.error(error) // tell the users an error occurred
    }
  }
  async getHouseCharacters(house) {
    try {
      console.log('getting house', house);
      await charactersService.getHouseCharacters(house)
    } catch (error) {
      console.error(error) // repeat the error for developers
      Pop.error(error) // tell the users an error occurred
    }
  }
}