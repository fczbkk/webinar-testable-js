const firstName = 'John'
const lastName = 'Doe'

const user = createUser(getFullName(firstName, lastName))
const clickHandler = createClickHandler(user)

document.addEventListener('click', clickHandler)

/**
 * Joins first name and last name into full name.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function getFullName (firstName, lastName) {
  return firstName + ' ' + lastName
}

/**
 * Generates random number between 0 and 100000.
 * @returns {number}
 */
function createUserId () {
  return Math.round(Math.random() * 100000)
}

/**
 * @typedef {object} UserData
 * @property {string} name
 * @property {number} id
 */

/**
 * Creates data object for User.
 * @param {string} name
 * @param {number} [id]
 * @returns {UserData}
 */
function createUser (name, id = createUserId()) {
  return { name, id }
}

/**
 * Logs list of messages.
 * @param {Array} [messages]
 * @param {Function} [logFn=console.log]
 */
function logMessages (messages = [], logFn = console.log) {
  messages.forEach((message) => {
    logFn(' - ' + message)
  })
}

/**
 * Creates handler that logs info about event.
 * @param {UserData} user
 * @param {Function} [logFn=console.log]
 * @returns {Function}
 */
function createClickHandler (user, logFn = console.log) {
  return function (event) {
    logMessages([
      'User ' + user.name + ' (' + user.id + ') clicked:',
      'X: ' + event.clientX,
      'Y: ' + event.clientY
    ], logFn)
  }
}
