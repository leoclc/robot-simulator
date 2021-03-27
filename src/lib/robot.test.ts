import { Robot, Direction, InitialCoordinates } from './robot';
import { getFileLines, extractInitialCoordinates } from './reader';

let robot: Robot

beforeEach(() => {
    robot = null
})

describe('Robot', () => {
    describe('move', () => {
        test('moving north when at 0,0 should not change coordinates', async () => {
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'NORTH' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('0,0,NORTH')
        })

        test('moving EAST when at 6,0 should not change coordinates', async () => {
            const coordinates = {
                x: 6,
                y: 0, 
                d: 'EAST' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('6,0,EAST')
        })

        test('moving SOUTH when at 0,6 should not change coordinates', async () => {
            const coordinates = {
                x: 0,
                y: 6, 
                d: 'SOUTH' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('0,6,SOUTH')
        })

        test('moving west when at 0,0 should not change coordinates', async () => {
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'WEST' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('0,0,WEST')
        })
        test('moving south increments y', async () => {
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'SOUTH' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('0,1,SOUTH')
        })
        test('moving east increments x', async () => {
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'EAST' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('1,0,EAST')
        })
        test('moving west decrements x', async () => {
            const coordinates = {
                x: 1,
                y: 0, 
                d: 'WEST' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('0,0,WEST')
        })
        
        test('moving north decrements y', async () => {
            const coordinates = {
                x: 0,
                y: 1, 
                d: 'NORTH' as Direction
            }
            robot = new Robot(coordinates)
            robot.move()
            expect(robot.report()).toBe('0,0,NORTH')
        })
    })
    describe('turn', () => {
        test('turning right should turn 90 degrees right', async () => {
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'NORTH' as Direction
            }
            robot = new Robot(coordinates)
            robot.turn('RIGHT')
            expect(robot.report()).toBe('0,0,EAST')
        })
        test('turning left should turn 90 degrees left', async () => {
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'NORTH' as Direction
            }
            robot = new Robot(coordinates)
            robot.turn('LEFT')
            expect(robot.report()).toBe('0,0,WEST')
        })
    })

    describe('report', () => {
        test('should output report on console', async () => {
            const spy = jest.spyOn(console, 'log')
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'NORTH' as Direction
            }
            robot = new Robot(coordinates)
            robot.report()
            expect(spy).toHaveBeenCalledWith('0,0,NORTH')
        })
        
        test('should return report as string', async () => {
            const coordinates = {
                x: 0,
                y: 0, 
                d: 'NORTH' as Direction
            }
            robot = new Robot(coordinates)
            expect(robot.report()).toBe('0,0,NORTH')
        })
    })
    describe('processCommands', () => {
        test('should return correct output for file example1.txt', async () => {
            const commandLines = getFileLines('./src/files/example1.txt')
            const initialCoordinates: InitialCoordinates = extractInitialCoordinates(commandLines[0])
            robot = new Robot(initialCoordinates)
            robot.processCommands(commandLines)
            expect(robot.report()).toBe('0,2,SOUTH')
        })

        test('should return correct output for file example2.txt', async () => {
            const commandLines = getFileLines('./src/files/example2.txt')
            const initialCoordinates: InitialCoordinates = extractInitialCoordinates(commandLines[0])
            robot = new Robot(initialCoordinates)
            robot.processCommands(commandLines)
            expect(robot.report()).toBe('3,6,EAST')
        })

        
        test('should return correct output for file example3.txt', async () => {
            const commandLines = getFileLines('./src/files/example3.txt')
            const initialCoordinates: InitialCoordinates = extractInitialCoordinates(commandLines[0])
            robot = new Robot(initialCoordinates)
            robot.processCommands(commandLines)
            expect(robot.report()).toBe('3,6,EAST')
        })
    })

})