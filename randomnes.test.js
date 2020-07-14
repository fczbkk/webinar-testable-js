function createUser (name, isAdmin) {
  return {
    name: name,
    role: isAdmin ? 'admin' : 'guest',
    id: getUniqueId()
  }
}

function getUniqueId () {
  return Math.round(Math.random() * 1000000)
}

describe('Randomness', function () {

  const refUser = createUser('John Doe', true)

  it('should create new user', function () {
    const newUser = createUser('John Doe', true)
    expect(newUser).toEqual(refUser)
  })

})
