let greeting = 'Hi'

function greetPerson (name) {
  return greeting + ' ' + name + '!'
}

describe('outside interference', function () {

  it('should generate greeting', function () {
    expect(greetPerson('John')).toBe('Hi John!')
  })

  it('should use custom greeting', function () {
    greeting = 'Hello'
    expect(greetPerson('John')).toBe('Hello John!')
  })

})
