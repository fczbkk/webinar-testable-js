let firstName = 'John'
let lastName = 'Doe'
let fullName = 'Riki Fridrich'

function joinName (firstName, lastName) {
  return firstName + ' ' + lastName
}

function splitName (fullName) {
  return fullName.split(' ')
}

describe('Mutation', function () {

  it('should join name', function () {
    const fullName = joinName(firstName, lastName)
    expect(fullName).toBe('John Doe')
  })

  it('should split name', function () {
    const [firstName, lastName] = splitName(fullName)
    expect(firstName).toBe('Riki')
    expect(lastName).toBe('Fridrich')
  })

})
