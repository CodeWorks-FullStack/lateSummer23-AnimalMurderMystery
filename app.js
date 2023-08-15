console.log('time to party🎉')

//NOTE const, creates a variable that is immutable (cannot be changed)
const areas = ['🌴', '🏛️', '🏞️', '🌵']

const animals = [
  {
    name: 'Oslo',
    emoji: '🦧',
    favoriteFoods: ['🍌', '🥜', '🍈'],
    currentArea: '🏛️'
  },
  {
    name: 'Steven',
    emoji: '🦭',
    favoriteFoods: ['🐠', '🍣', '🍤'],
    currentArea: '🏞️'
  },
  {
    name: 'Lil Jeremy',
    emoji: '🦞',
    favoriteFoods: ['🍜', '🥩', '🎂'],
    currentArea: '🏞️'
  },
  {
    name: 'Big Jeremy',
    emoji: '🦞',
    favoriteFoods: ['🍗', '🥩', '🥧'],
    currentArea: '🏞️'
  },
  {
    name: 'Jung',
    emoji: '🦓',
    favoriteFoods: ['🌿', '🥬', '🍎'],
    currentArea: '🌵'
  },
  {
    name: 'Hank',
    emoji: '🦛',
    favoriteFoods: ['🐠', '🥩', '🍔'],
    currentArea: '🌴'
  },
  {
    name: 'Antonio',
    emoji: '🦒',
    favoriteFoods: ['🌳', '🥬', '🍎'],
    currentArea: '🌴'
  },
  {
    name: 'Karina',
    emoji: '🐅',
    favoriteFoods: ['🥩', '🍜', '🐠'],
    currentArea: '🌵'
  },
  {
    name: 'Jordan',
    emoji: '🐧',
    favoriteFoods: ['🐠', '🧊', '🍣'],
    currentArea: '🏛️'
  },
  {
    name: 'Billium',
    emoji: '🦆',
    favoriteFoods: ['🍞', '🥐', '🍇'],
    currentArea: '🏞️'
  },
]

let murderer = null


for (let i = 0; i < animals.length; i++) {
  let animal = animals[i]
  // console.log(animals[i].name)
  // console.log('for loop', animal.name, animal.emoji, animal.currentArea)
  whatsGood(animal) // passes down {name: 'oslo', emoji: '🦧', ...} object value of 'animal'
}

function whatsGood(entity) { // takes in value and changes it's name to 'entity'
  // console.log(entity.name, entity.emoji, entity.currentArea)
}

animals.forEach(whatsGood) // this will run whatsGood 'for each' item in the array

// test function
function hello() {
  // console.log('sup')
  return 'sup'
}

// NOTE justDoIt takes in a 'callback' function. 
// callback functions (callbackfn) are function directions that will be called inside the main function. in this case justDoIt takes in the instructions of hello and runs it 3 times.
function justDoIt(fn) {
  console.log('doing this', fn)
  fn()
  fn()
  fn()
}

justDoIt(hello)
// justDoIt(hello()) justDoIt('sup')


animals.forEach((animal) => {
  // console.log(i, arr) i and arr are accessible as well in the ( )  
  // console.log(animal.name, animal.favoriteFoods)
}
)

function party() { // if your anonymous only uses one parameter, you don't need the parens, example below
  animals.forEach(animal => {
    if (animal.emoji != '☠️') { // keeps dead animals from moving around

      let randomIndex = Math.floor(Math.random() * areas.length) // gets random index from array 0-3
      console.log(randomIndex)
      let newArea = areas[randomIndex] // assign animals currentArea to random area
      animal.currentArea = newArea

    }
  })

  drawAnimals()
  commitMurder()
}

// draw is just a naming convention for when you add data to the DOM
function drawAnimals() {
  areas.forEach((area) => {
    console.log(area) // get area we are in
    let inArea = animals.filter((animal) => animal.currentArea == area) // filter creates and array of elements that match the condition
    let animalEmojis = inArea.map((animal) => animal.emoji + animal.name) // Map creates an array of transformed results specified
    console.log(animalEmojis)
    document.getElementById(area).innerText = animalEmojis.join(', ') // join turns the elements in the array into a string, inserting ', ' in between them
  })
}


function makeMurderer() {
  let randomIndex = Math.floor(Math.random() * animals.length)
  murderer = animals[randomIndex]
}

function commitMurder() {
  let murderLocation = murderer.currentArea
  let inArea = animals.filter(animal => {
    console.log(animal.currentArea)
    // NOTE if your array method requires a 'result' and multiple lines, you need to indicated which with a return
    return animal.currentArea == murderLocation && animal != murderer
  })

  // let randomAnimal = inArea[Math.floor(Math.random() * inArea.length)] random doesn't work great here
  let victim = inArea.find(animal => animal.emoji != '☠️')
  if (victim) { // makes sure that if the room is already just all bones, we don't access too far
    victim.emoji = '☠️'
  }
  checkForLoss()
  console.log(inArea)
}

function accuse() {
  let accused = window.prompt('Who Done it?')
  console.log(accused)
  if (accused == murderer.name || accused == murderer.emoji) {
    window.alert("you got em! " + murderer.emoji + '👮')
  } else {
    commitMurder()
  }
}

function checkForLoss() {
  let dead = animals.filter(animal => animal.emoji == '☠️')
  if (dead.length == animals.length - 1) {
    window.alert("party's over, you're next🔪🔪🔪🔪")
    window.close()
  }
}

makeMurderer()
drawAnimals() // invoke functions you want to run on load at the bottom