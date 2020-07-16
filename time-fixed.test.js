function logLater (message, timeout = 0, logFn = console.log) {
  setTimeout(function () {
    logFn(message)
  }, timeout)
}

jest.useFakeTimers()

describe('Time manipulation', function () {

  it('should log message after 3 seconds', function () {
    const mockFn = jest.fn()
    logLater('aaa', 10000, mockFn)
    expect(mockFn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(10001)
    expect(mockFn).toHaveBeenCalledWith('aaa')
  })

})
