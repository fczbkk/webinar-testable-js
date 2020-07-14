function logListOfStuff (stuff = [], logFn = console.log) {
  stuff.forEach((item) => {
    logFn(' - ' + item)
  })
}

describe('Spying', function () {

  it('should output list to console using spy', function () {
    jest.spyOn(console, 'log')
    logListOfStuff(['one', 'two', 'three'])
    expect(console.log).toHaveBeenCalledTimes(3)
    expect(console.log).toHaveBeenCalledWith(' - one')
    expect(console.log).toHaveBeenCalledWith(' - two')
    expect(console.log).toHaveBeenCalledWith(' - three')
  })

  it('should output list to console using mock', function () {
    const mockFn = jest.fn()
    logListOfStuff(['one', 'two', 'three'], mockFn)
    expect(mockFn).toHaveBeenCalledTimes(3)
    expect(mockFn).toHaveBeenCalledWith(' - one')
    expect(mockFn).toHaveBeenCalledWith(' - two')
    expect(mockFn).toHaveBeenCalledWith(' - three')
  })

})
