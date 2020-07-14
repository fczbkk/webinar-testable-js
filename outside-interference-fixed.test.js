let greeting = 'Hi'

function greetPerson (name, greeting) {
  return greeting + ' ' + name + '!'
}

describe('outside interference', function () {

  it('should generate greeting', function () {
    expect(greetPerson('John', greeting)).toBe('Hi John!')
  })

  it('should use custom greeting', function () {
    expect(greetPerson('John', 'Hello')).toBe('Hello John!')
  })

})
