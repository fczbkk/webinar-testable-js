function logLater (message, timeout = 0, logFn = console.log) {
  setTimeout(function () {
    logFn(message)
  }, timeout)
}

describe('Time manipulation', function () {

  it('should log message after 3 seconds', function () {
    const mockFn = jest.fn()
    logLater('aaa', 3000, mockFn)
    // ¯\_(ツ)_/¯
    expect(mockFn).toHaveBeenCalledWith('aaa')
  })

})
