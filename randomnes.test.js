function createUser (name) {
  return {
    name: name,
    id: getUniqueId()
  }
}

function getUniqueId () {
  return Math.round(Math.random() * 1000000)
}

describe('Randomness', function () {

  const refUser = createUser('John Doe')

  it('should create new user', function () {
    const newUser = createUser('John Doe')
    expect(newUser).toEqual(refUser)
  })

})
