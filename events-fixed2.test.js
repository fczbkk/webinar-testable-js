function createClickHandler (logFn = console.log) {
  return function (event) {
    logFn('X: ' + event.clientX + ', Y: ' + event.clientY)
  }
}

const handleClick = createClickHandler()
document.addEventListener('click', handleClick)
document.removeEventListener('click', handleClick)

describe('Events', function () {

  it('should log coordinates of click event', function () {
    const mockFn = jest.fn()
    const handleClick = createClickHandler(mockFn)
    const event = {clientX: 100, clientY: 200}
    handleClick(event)
    expect(mockFn).toHaveBeenCalledWith('X: 100, Y: 200')
  })

})
