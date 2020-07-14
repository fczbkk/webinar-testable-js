function createUser (
  name = 'John Doe',
  isAdmin = false,
  userId = getUniqueId()
) {
  return {
    name: name,
    role: isAdmin ? 'admin' : 'guest',
    id: userId
  }
}

function getUniqueId () {
  return Math.round(Math.random() * 1000000)
}

describe('Randomness', function () {

  const randomId = getUniqueId()
  const refUser = createUser('John Doe', true, randomId)

  it('should create new user', function () {
    const newUser = createUser('John Doe', true, randomId)
    expect(newUser).toEqual(refUser)
  })

})
