import { sum, multiply, subtract } from '../src/math.js'

describe('math functions', () => {
  test('sum should add two numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })

  test('multiply should multiply two numbers', () => {
    expect(multiply(4, 5)).toBe(20)
  })

  test('subtract should subtract two numbers', () => {
    expect(subtract(10, 4)).toBe(6)
  })

  test('sum should handle negative values', () => {
    expect(sum(-2, 7)).toBe(5)
  })
})
