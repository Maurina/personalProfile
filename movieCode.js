import { movies } from './movieInformation.js'



movies.forEach(movie => {

/*---------------------- Poster Image and Tagline -------------------------------------------------- */
let moviePoster = document.querySelector('.poster')
    let moviePic = document.createElement('img')
    moviePic.src = `images/${movie.id}.jpg`

    
/*-------------------------------------- Movie Info -------------------------------------------------- */
    let movieText = document.querySelector('.info')
    
    let title = document.createElement('h2')
    title.textContent = movie.original_title

    let tagline = document.createElement('h3')
    tagline.textContent = movie.tagline
    
    let popular = document.createElement('h4')
    popular.textContent =`Popularity rating : ${movie.popularity}`

    let runTime = document.createElement('h4')
    runTime.textContent = `Run time : ${movie.runtime} minutes`

    let releaseDate = document.createElement('h4')
    releaseDate.textContent = `Release date : ${movie.release_date}`

    let production = document.createElement('h4')
    production.textContent = `Produced by : ${movie.production_companies.name}`
    
    let quote = document.createElement('blockquote')
    quote.textContent = movie.overview
    
    /*-------------------------------------- Attaching items to the DOM ----------------------------------- */
    moviePoster.appendChild(moviePic)
    moviePoster.appendChild(title)
    moviePoster.appendChild(tagline)
    moviePoster.appendChild(runTime)
    moviePoster.appendChild(releaseDate)
    moviePoster.appendChild(popular)
    moviePoster.appendChild(quote)

 
})
 


/*-------------------------------------- Filter into Genres ----------------------------------- */

const drama = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Drama")
    }
 
})



const comedy = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Comedy")
    }
 
})



const family = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Family")
    }
 
})



const fantasy = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Fantasy")
    }
 
})

    
/*-------------------------------------- Loop for Genre Sort----------------------------------- */

    /* ------------------------------------ Drama ------------------------------------*/

let dramaBlock = document.querySelector('.drama') 
let numDrama =  document.createElement('h3')
numDrama.textContent = `There are ${drama.length} dramas`

dramaBlock.appendChild(numDrama)

        /* ------------------------------------ Drama Loop ------------------------------------*/

drama.forEach(dramas => {
    let dramaTitle = document.createElement('h4')
    dramaTitle.textContent =`${dramas.original_title}`
    
    dramaBlock.appendChild(dramaTitle)
    })

        /* ------------------------------------ Comedy ------------------------------------*/
let comedyBlock = document.querySelector('.comedy') 
let numComedy =  document.createElement('h3')
numComedy.textContent = `There are ${comedy.length} comedies`
comedyBlock.appendChild(numComedy)


        /* ------------------------------------ Drama Loop ------------------------------------*/
        comedy.forEach(comedys => {
            let comedyTitle = document.createElement('h4')
            comedyTitle.textContent =`${comedys.original_title}`
            
            comedyBlock.appendChild(comedyTitle)
            })


        /* ------------------------------------ Fantasy ------------------------------------*/
let fantasyBlock = document.querySelector('.fantasy') 
let numFantasy =  document.createElement('h3')
numFantasy.textContent = `There are ${fantasy.length} fantasies`

fantasyBlock.appendChild(numFantasy)

        /* ------------------------------------ Drama Loop ------------------------------------*/
        fantasy.forEach(fantasys => {
            let fantasyTitle = document.createElement('h4')
            fantasyTitle.textContent =`${fantasys.original_title}`
    
            fantasyBlock.appendChild(fantasyTitle)
            })


        /* ------------------------------------ Family ------------------------------------*/
let familyBlock = document.querySelector('.family') 
let numFamily =  document.createElement('h3')
numFamily.textContent = `There are ${family.length} family`

familyBlock.appendChild(numFamily)

            /* ------------------------------------ Drama Loop ------------------------------------*/
        family.forEach(familys => {
            let familyTitle = document.createElement('h4')
            familyTitle.textContent =`${familys.original_title}`
            
            familyBlock.appendChild(familyTitle)
            })


