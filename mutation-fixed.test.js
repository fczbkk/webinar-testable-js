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
    const result = joinName(firstName, lastName)
    expect(result).toBe('John Doe')
  })

  it('should split name', function () {
    const result = splitName(fullName)
    expect(result[0]).toBe('Riki')
    expect(result[1]).toBe('Fridrich')
  })

})
