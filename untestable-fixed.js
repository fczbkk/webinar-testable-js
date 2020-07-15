const firstName = 'John'
const lastName = 'Doe'

const user = createUser(getFullName(firstName, lastName))
const clickHandler = createClickHandler(user)

document.addEventListener('click', clickHandler)

function getFullName (firstName, lastName) {
  return firstName + ' ' + lastName
}

function createUserId () {
  return Math.round(Math.random() * 100000)
}

function createUser (name, id = createUserId()) {
  return { name, id }
}

function logMessages (messages = [], logFn = console.log) {
  messages.forEach((message) => {
    logFn(' - ' + message)
  })
}

function createClickHandler (user, logFn = console.log) {
  return function (event) {
    logMessages([
      'User ' + user.name + ' (' + user.id + ') clicked:',
      'X: ' + event.clientX,
      'Y: ' + event.clientY
    ], logFn)
  }
}
