import { films } from './assets/films.js'
import { starships } from './assets/starships.js'

/* -------------------- Star Wars block --------------------------------------- */

    /*----------------------  Loop from films.js ---------------------- */
let filmList = document.querySelector("#film-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    filmList.appendChild(listItem)

})

   

let filmShip = document.querySelector("#film-people")

/*----------------------  Limit the number of starships displayed---------------------- */

let limitedStarship = starships.slice(0, 7)

    /*----------------------  Loop from starships.js ---------------------- */
limitedStarship.forEach((starship) => {
    let listItem = document.createElement('li')
    listItem.textContent = starship.name
    filmShip.appendChild(listItem)


})

 /*----------------------  Opening Crawl from films.js ---------------------- */
let openingCrawl = document.querySelector('#film-crawl')
let listItem = document.createElement('li')
listItem.textContent = films[0].opening_crawl
openingCrawl.appendChild(listItem)
