const domain = 'https://rickandmortyapi.com/api/character/'


// function fetchData(data) {
//   const url = 'https://rickandmortyapi.com/api/character/'
//   axios.get(url)
//     .then((res) => {
//       // console.log(res.data.results)
//       const data = res.data.results
//       console.log(data)
//       data.forEach((character) => {
//         // console.log(character)
//       })
//     })
//     .catch((error) => {
//       console.error(error)
//     })
async function fetchData(character) {
  try {
    const url = 'https://rickandmortyapi.com/api/character/'
    let response = await axios.get(url)
    console.log(response.data.results)
    const characterID = response.data.results
  } catch (error) {
    console.error(error)
  }
} fetchData()
async function fetchData(characterID) {
  try {
    const url = `https://rickandmortyapi.com/api/character/${characterID}`
    let response = await axios.get(url)
    // console.log(response.data.results)
    const characterID = response.data.results
    characterID(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
// }
// fetchData()
// HTML Structure
// const personDiv = document.createElement('div')
// peopleDiv.append(personDiv)

// // function showRmData(data) {
// //   // let rmElements = `
// //   <h3></h3>
// //   <img src=""></img>
// //   <h4></h4>
// //   <p></p>
// `
// console.log("inside show", data)
//   //Name
//   //Species
//   //image
//   //location

// }