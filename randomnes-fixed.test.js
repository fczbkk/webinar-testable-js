function createUser (name, userId = getUniqueId()) {
  return {
    name: name,
    id: userId
  }
}

function getUniqueId () {
  return Math.round(Math.random() * 1000000)
}

describe('Randomness', function () {

  const randomId = getUniqueId()
  const refUser = createUser('John Doe', randomId)

  it('should create new user', function () {
    const newUser = createUser('John Doe', randomId)
    expect(newUser).toEqual(refUser)
  })

})
