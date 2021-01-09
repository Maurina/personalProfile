import { senatorData } from './assets/senators.js'

/* ----------------------------- Sorting Data ------------------------------------------------------*/ 
const senators = senatorData.results[0].members

let republican = senators.filter(senator => senator.party === "R")

let democrats = senators.filter (senator => senator.party === "D")

let females = senators.filter (senator => senator.gender === "F")

let males = senators.filter (senator => senator.gender === "M")

const loyalRepublican = republican.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const loyalDemocat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator: acc, 0)

const nameOfSenators = senators.map (senator => senator.first_name +" "+ senator.last_name)


/* --------------------------- Missing Image Added ----------------------------------------- */
const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    if(senator.govtrack_id ==='412743'){
        senator.imgURL = `images/cindy.jpg`}
    return senator
})



/* ------------------------------ Adding Images and Names to the DOM -------------------------------*/

let pictureDiv = document.querySelector('.container')
senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')
    senatorPic.src = senator.imgURL
    senatorCap.textContent = `${senator.first_name}  ${senator.last_name}`
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
})


/* -------------------------------- Top block with data about Senators -----------------------*/

  /* -------------------------- General stats --------------------- */
  let femaleSenator = document.querySelector('#female')
  let info = document.createElement('p')
  info.textContent = `There are ${females.length} female senators`
  
  let maleSenator = document.querySelector('#male')
  let infor = document.createElement('p')
  infor.textContent = `There are ${males.length} male senators`
  
  femaleSenator.appendChild(info)
  maleSenator.appendChild(infor)
    
    /* --------------------- Republican stats ----------------------- */
let numReb = document.querySelector('#numRep')
let p = document.createElement('p')
p.textContent = `There are ${republican.length} Republicans in the senate.`

let loyalDiv = document.querySelector('#loyalRep')
let paragraph = document.createElement('p')

paragraph.textContent = `${loyalRepublican.first_name}  ${loyalRepublican.last_name} from ${loyalRepublican.state}`



let voteRepub = document.querySelector('#voteRep')
let paragra = document.createElement('p')
paragra.textContent = `${loyalRepublican.votes_with_party_pct}% of the time.`
numReb.appendChild(p)
loyalDiv.appendChild(paragraph)
voteRepub.appendChild(paragra) 


   /* --------------------- Democrate stats ----------------------- */
   
let numDemo = document.querySelector('#numDemo')
let pa = document.createElement('p')  
pa.textContent = `There are ${democrats.length} Democrats in the senate.`
let loyalDemo = document.querySelector('#loyalDem')
let para = document.createElement('p')
para.textContent = `${loyalDemocat.first_name}  ${loyalDemocat.last_name} from ${loyalDemocat.state}`


let voteDemo = document.querySelector('#voteDem')
let par = document.createElement('p')
par.textContent = `${loyalDemocat.votes_with_party_pct}% of the time.`
numDemo.appendChild(pa)
loyalDemo.appendChild(para)
voteDemo.appendChild(par)

  