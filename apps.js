const domain = 'https://rickandmortyapi.com/api/character/'
const dataContainer = document.querySelector('#data-container')

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('input').value
  document.querySelector('input').value = ''
  getCharByID(inputValue)
})


async function getCharByID(characterID) {
  removeChar(dataContainer)
  try {
    const charData = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
    buildChar(charData.data)
  } catch (error) {
    console.error(error)
  }
}

function buildChar(charData) {
  let nameEl = document.createElement('div')
  nameEl.textContent = `Name : ${charData.name}`
  dataContainer.append(nameEl)
  let charImg = document.createElement('img')
  charImg.src = charData.image
  dataContainer.append(charImg)
  let charSpecies = document.createElement('p')
  charSpecies.textContent = `Species : ${charData.species}`
  dataContainer.append(charSpecies)
  let charLocation = document.createElement('p')
  charLocation.textContent = `Location :  ${charData.location.name}`
  dataContainer.append(charLocation)
}

function removeChar(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}


