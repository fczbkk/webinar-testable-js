let firstName = 'John'
let lastName = 'Doe'
let fullName = 'Riki Fridrich'

function joinName (firstName, lastName) {
  fullName = firstName + ' ' + lastName
}

function splitName (fullName) {
  [firstName, lastName] = fullName.split(' ')
}

describe('Mutation', function () {

  it('should join name', function () {
    joinName(firstName, lastName)
    expect(fullName).toBe('John Doe')
  })

  it('should split name', function () {
    splitName(fullName)
    expect(firstName).toBe('Riki')
    expect(lastName).toBe('Fridrich')
  })

})
