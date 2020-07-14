function handleClick (event) {
  console.log('X: ' + event.clientX + ', Y: ' + event.clientY)
}

document.addEventListener('click', handleClick)
document.removeEventListener('click', handleClick)

describe('Events', function () {

  it('should log coordinates of click event', function () {
    jest.spyOn(console, 'log')
    const event = {clientX: 100, clientY: 200}
    handleClick(event)
    expect(console.log).toHaveBeenCalledWith('X: 100, Y: 200')
  })

})
