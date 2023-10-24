function greet() {
  return 'ciao'
}

test('Greeting message', () => {
  expect(greet()).toBe('ciao') // Use () after greet and add .toBe('ciao')
})
