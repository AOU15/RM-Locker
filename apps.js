const domain = 'https://rickandmortyapi.com/api/character/'


function fetchData(data) {
  const url = 'https://rickandmortyapi.com/api/character/'
  axios.get(url)
    .then((res) => {
      // console.log(res.data.results)
      const data = res.data.results
      // console.log(data)
      data.forEach((character) => {
        console.log(character)
      })
    })
    .catch((error) => {
      console.error(error)
    })
  async function fetchData(data) {
    try {
      const url = 'https://rickandmortyapi.com/api/character/'
      let response = await axios.get(url)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}
fetchData()
// HTML Structure
// const personDiv = document.createElement('div')
// peopleDiv.append(personDiv)

// function showRmData(data) {
//   let rmElements = 

// }
