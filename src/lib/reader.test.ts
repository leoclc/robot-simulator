import { readFileSync, getFileLines, extractInitialCoordinates } from './reader';

describe('readFileSync', () => {
  test('should read file and return content as string', () => {
    expect(readFileSync('./src/files/example1.txt')).toBe('PLACE 0,0,SOUTH\nMOVE\nMOVE\nREPORT')
  })
})
describe('getFileLines', () => {
  test('should return array with file content in lines', () => {
    const fileLines = getFileLines('./src/files/example1.txt')
    expect(fileLines.length).toBe(4)
  })
})

describe('extractInitialCoordinates', () => {
  test('passing a command different then PLACE should throw error', () => {
    expect(() => extractInitialCoordinates('MOVE')).toThrow(new Error('Initial commands must come from a PLACE command'))
  })
  test('passing an empty command line throws error', () => {
    expect(() => extractInitialCoordinates('')).toThrow(new Error('Line to extract coordinates cannot be empty'))
  })
  test('command with wrong number of coordinates throws error', () => {
    expect(() => extractInitialCoordinates('PLACE 3')).toThrow(new Error('Missing 2 coordinate(s) inputs'))
  })
  test('passing coordinates in the wrong order throws error', () => {
    expect(() => extractInitialCoordinates('PLACE NORTH,3,3')).toThrow(new Error(`Direction 3 is not a valid direction, please pass one of the following: 'NORTH','SOUTH', 'EAST', 'WEST'`))
  })
  test('should return initial coordinates object', () => {
    expect(extractInitialCoordinates('PLACE 3,3,NORTH')).toEqual({x: 3, y: 3, d: 'NORTH'})
  })
})
