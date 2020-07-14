function logListOfStuff (stuff = []) {
  stuff.forEach((item) => {
    console.log(' - ' + item)
  })
}

describe('Spying', function () {

  it('should output list to console', function () {
    logListOfStuff(['one', 'two', 'three'])
    // ¯\_(ツ)_/¯
  })

})
