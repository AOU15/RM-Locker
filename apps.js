const domain = 'https://rickandmortyapi.com/api/character/'
const dataContainer = document.querySelector('#data-container')
console.log(dataContainer)

const form = document.querySelector('form')
// console.log(form)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(e)
  const inputValue = document.querySelector('input').value
  console.log(inputValue)
  // removeChar()
  getCharbyID(inputValue)
})


async function fetchData() {
  try {
    const url = 'https://rickandmortyapi.com/api/character/'
    let response = await axios.get(url)
    const characterID = response.data.results
    // console.log(characterID)
    buildCharElements(characterID)
  } catch (error) {
    console.error(error)
  }
} fetchData()

async function getCharByID(characterID) {
  removeChar(dataContainer)
  try {
    const charData = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
    console.log(charData.data)
    buildChar(charData.data)
  } catch (error) {
    console.error(error)
  }
}
function buildCharElements(charData) {
  console.log(charData)
  charData.forEach((char) => {
    console.log(char)
    let nameEl = document.createElement('div')
    nameEl.textContent = char.name
    // dataContainer.append(nameEl)
  })
}
function buildChar(charData) {
  let nameEl = document.createElement('div')
  nameEl.textContent = charData.name
  dataContainer.append(nameEl)
}

function removeChar(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}


function showRmData(char) {
  console.log(data.name)
  let buildCharElements = `
  <h4>${char.name}</h4>
  <img src="${char.image}"></img>
  <h5>${char.species}</h5>
  <p>location:${char.location}</p>
`
}

const charName = document.getElementById('name')
dataContainer.append('name')
const charPic = document.createElement('img')
dataContainer.append('charPic')
const charSpecies = document.createElement('species')
dataContainer.append('charSpecies')
const charLocation = document.createElement('location')
dataContainer.append('charLocation')


// console.log("inside show", data)
//   //Name
//   //Species
//   //image
//   //location

// }