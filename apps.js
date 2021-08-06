const domain = 'https://rickandmortyapi.com/api/character/'
const dataContainer = document.querySelector('#data-container')

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('input').value
  getCharByID(inputValue)
})


async function fetchData() {
  try {
    const url = 'https://rickandmortyapi.com/api/character/'
    let response = await axios.get(url)
    const characterID = response.data.results
    buildCharElements(characterID)
  } catch (error) {
    console.error(error)
  }
} fetchData()

async function getCharByID(characterID) {
  removeChar(dataContainer)
  try {
    const charData = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
    buildChar(charData.data)
  } catch (error) {
    console.error(error)
  }
}
function buildCharElements(charData) {
  charData.forEach((char) => {
    let nameEl = document.createElement('div')
    nameEl.textContent = char.name
  })
}
function buildChar(charData) {
  let nameEl = document.createElement('div')
  nameEl.textContent = charData.name
  dataContainer.append(nameEl)
  let charImg = document.createElement('img')
  charImg.src = charData.image
  dataContainer.append(charImg)
  let charSpecies = document.createElement('species')
  charSpecies.textContent = charData.species
  dataContainer.append(charSpecies)
  let charLocation = document.createElement('location')
  charLocation.textContent = charData.location.name
  dataContainer.append(charLocation)
}

function removeChar(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}


