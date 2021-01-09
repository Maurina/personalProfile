import { pokemon } from './pokemon.js'




/* -------------------------- card container --------------------------------------*/
const pokeContainer = document.querySelector('#container')


/* --------------------------- create card function -------------------------------- */
const cardCreator = (poke) =>{
 let card = document.createElement('div')
 card.className = "card"
 card.addEventListener( 'click', function() {
     card.classList.toggle('is-flipped');
 })
 
 /* ---------------------------- card front ----------------------------------------- */
 let frontCard = document.createElement('figure')
 frontCard.className = "card__face card__face--front"


 let cap = document.createElement('figcaption')
 let img = document.createElement('img')

 img.src = `images/${poke.id}${poke.ename}.png`
 cap.textContent = poke.ename

 /* ------------------------------------ attaching items to the DOM -------------------------- */
 frontCard.appendChild(cap)
 frontCard.appendChild(img)

 /* ------------------------------- card back --------------------------------- */

 let cardBack = document.createElement('figure')
 cardBack.className = "card__face card__face--back"
 let capt = document.createElement('figcaption')
 let imag = document.createElement('img')

 imag.src = "images/PokemonLogo.png"
 capt.textContent = poke.ename

let attack = document.createElement('p')
let defense = document.createElement('p')
let speed = document.createElement('p')
let hp = document.createElement('p')
attack.textContent = `Attack: ${poke.base.Attack}`
defense.textContent = `Defense: ${poke.base.Defense}`
speed.textContent = `Speed: ${poke.base.Speed}`
hp.textContent = `Hit Points: ${poke.base.HP}`


/*------------------------------ attaching items to the DOM ------------------------------- */
cardBack.appendChild(imag)
 cardBack.appendChild(capt)
 cardBack.appendChild(attack)
cardBack.appendChild(defense)
cardBack.appendChild(speed)
cardBack.appendChild(hp)
card.appendChild(frontCard)
 card.appendChild(cardBack)
 pokeContainer.appendChild(card)
}

/*-------------------------- Using the cardCreator function --------------------------------- */
pokemon.forEach(element => cardCreator(element))




/* ------------------------------ Constructor Function ------------------------------------ */


class Pokemon {
    constructor (ename, id, base) {
        this.ename = ename,
        this.id = id,
        this.base = base
      }
}

/* -------------------------------- ES6 style construtor -------------------------------- */
let newPokemon = new Pokemon('Raichu', '026', {'Attack': 90, 'Defense': 55, 'HP': 60, 'Speed': 110})

let create = document.querySelector('#create')
create.addEventListener('click', () => {
return cardCreator(newPokemon)
})


/* --------------------------------- Button ------------------------------------------- */
let createCard = document.createElement('div')
createCard.className = "card"
createCard.addEventListener('click', () => {
  
})