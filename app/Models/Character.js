

export class Character {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.house = data.house
    this.image = data.image || 'http://placekitten.com/200/300'
    this.age = 1995 - data.yearOfBirth
    this.alias = data.alternate_names.length > 0 ? data.alternate_names.join(', ') : ''
    this.type = data.hogwartsStudent ? 'student' : data.hogwartsStaff ? 'staff' : data.species == 'werewolf' ? 'Very Cool 😎' : "not cool" // WILD stuff
  }


  get CardTemplate() {
    return `
  <div class="col-6 col-md-4">
    <div class="card elevation-3">
      <img src="${this.image}" alt="">
      <div class="p-2">
        <h5>${this.name} ${this.age}</h5>
        <h6>${this.alias}</h6>
        <h6>${this.house}</h6>
        <p>${this.TypeTemplate}</p>
      </div>
    </div>
  </div>`
  }

  get TypeTemplate() {
    switch (this.type) {
      case 'student': return '<i class="mdi mdi-school"></i>'
      case 'staff': return '🧑‍🏫'
      case 'Very Cool 😎': return '<img src="https://static.wikia.nocookie.net/twilightsaga/images/7/7f/Jacob-555644_429620497081182_285483444_n.jpg" alt=""></img>'
      default: return ''
    }
  }
}