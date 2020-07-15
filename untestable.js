const firstName = 'John'
const lastName = 'Doe'

const user = {
  name: firstName + ' ' + lastName,
  id: Math.round(Math.random() * 100000)
}

document.addEventListener('click', function (event) {
  const messages = [
    'User ' + user.name + ' (' + user.id + ') clicked:',
    'X: ' + event.clientX,
    'Y: ' + event.clientY
  ]
  messages.forEach((message) => {
    console.log(' - ' + message)
  })
})
