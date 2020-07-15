function logLater (message, timeout = 0, logFn = console.log) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      logFn(message)
      resolve()
    }, timeout)
  })
}

describe('Time manipulation', function () {

  it('should log message after 3 seconds', function (done) {
    const mockFn = jest.fn()
    logLater('aaa', 3000, mockFn)
      .then(() => expect(mockFn).toHaveBeenCalledWith('aaa'))
      .then(() => done())
  })

})
