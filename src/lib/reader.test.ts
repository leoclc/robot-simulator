import { readFileSync } from "./reader"

describe('readFileSync', () => {
  test('should read file and return content as string', () => {
    expect(readFileSync('./src/files/example1.txt')).toBe('PLACE 0,0,SOUTH\nMOVE\nMOVE\nREPORT')
  })
})
