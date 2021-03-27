import { Robot } from './robot';
import { getFileLines, extractInitialCoordinates } from './reader';

let robot: Robot
const exampleFile1Path = './src/files/example1.txt'

beforeEach(() => {
    robot = null
})

describe('move', () => {
    test('should move towards the set direction', async () => {
        const textLines = getFileLines(exampleFile1Path)
        const coordinates = extractInitialCoordinates(textLines[0])
        robot = new Robot(coordinates)
        robot.processCommands(textLines)
    })
})