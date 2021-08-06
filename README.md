# RM-Locker
API TITLE: The name of my app will be the RM Locker 

API DESCRIPTION: stores the characters of Rick and Morty
API: https://rickandmortyapi.com/api/character/
API snippet :

```json
   {
    "info": {
        "count": 671,
        "pages": 34,
        "next": "https://rickandmortyapi.com/api/character/?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/5",
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickan
```                

MVP:
1. User will enter number of their choice
2. the app will render the character with the id associated with the users numerical input
3. user will enter a different number of chioce and view another character

POST-MVP
1. Add design/animation to css


WIREFRAMES:
Mobile 
https://miro.com/app/board/o9J_l4WScD8=/


PRIORITY MATRIX:
https://miro.com/app/board/o9J_l4WScD8=/


DAILY SCHEDULE
|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 3| Pseudocode / actual code | Incomplete
|August 4| Initial Clickable Model  | Incomplete
|August 5| MVP | Incomplete
|August 6| Presentations | Incomplete


TIMEFRAMES
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 1hr| 1hr | 1hr |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Researching API| H | 3hrs| 4-5 hrs| 4hrs
| Sorting through API| H | 1hr| 1hr| 2 hrs|
| Run API with data | H | 3 hrs| 2hrs| 2hrs
| Begin writing code| H| 3 hrs| 3-4hrs| 4hrs
| Add media query| H| 3hrs| 4hrs| 3hrs|
| edit media query| H| 2hrs| 3hrs| 3hrs
| Writing code with JS| H | 3hrs| 4-5hrs| 5hrs|
| Async function| H |2hrs| 3hrs| 3hrs|
| Defining Characters into JS| H| 2hrs| 2hrs| 2hrs
| Define objects in JS| H| 2hrs| 2hrs| 2hrs
| Styling CSS| H | 3hrs| 4-5hrs| 4.5hrs|
| Edit flexbox| H | 3hrs| 4hrs| 4hrs|
| Insert button into Html| H| 1hr| 30min| 30min
| test button in browser| H | 1hr| 30min| 30min
| Make further edits| H | 3hrs| 3hrs| 3hrs
| edit HTML| H | 3hrs| 1hr| 1hr
| Total | H | 40hrs| 40hrs | 48hrs |


```Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

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
```
CHANGE LOG
This section will be used to document changes that were made and the reasoning behind the changes

1.The background image was changed to images better related to the API. The reason behind it was to make the user interested in what they are seeing. 
2.The elements on the page were moved towards the center of the page to appeal to the audidence. It also adds to the full fucntionality of the webpage.

