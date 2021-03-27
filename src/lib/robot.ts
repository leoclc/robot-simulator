import { Circular } from './circularStructure';


export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'
export interface InitialCoordinates {
    x: number
    y: number
    d: Direction
}
type Side = 'LEFT' | 'RIGHT'


export class Robot {
    private x: number
    private y: number
    private d: Direction
    private circular: Circular
    
    constructor(coordinates: InitialCoordinates) {
        this.x = coordinates.x
        this.y = coordinates.y
        this.d = coordinates.d
        const circularArrValues = ['NORTH', 'EAST', 'SOUTH', 'WEST']
        const initialIndex = circularArrValues.findIndex(i => i === coordinates.d)
        this.circular = new Circular(circularArrValues, initialIndex)
    }

    processCommands(commands: string[]) {
        commands.forEach((command) => {
            switch (command) {
                case 'MOVE': {
                    this.move()
                    break;
                }
                case 'RIGHT':
                case 'LEFT': {
                    this.turn(command)
                    break;
                }
                case 'REPORT': {
                    this.report()
                    break;
                }
                default: break;
            }
        })
    }

    move = (): void => {
        switch (this.d) {
            case 'NORTH': {
                if(this.y == 0) return
                this.y -= 1
                break
            }
            case 'EAST': {
                if(this.x == 6) return
                this.x += 1
                break
            }
            case 'SOUTH': {
                if(this.y == 6) return
                this.y += 1
                break
            }
            case 'WEST': {
                if(this.x == 0) return
                this.x -= 1
                break
            }
            default: break
        }
    }

    turn = (side: Side): void => {
        switch (side) {
            case 'LEFT':
                //console.log('Turning left')
                this.d = this.circular.previous()
                break;
            case 'RIGHT':
                //console.log('Turning right')
                this.d = this.circular.next()
                break;
            default:
                break;
        }
    }

    report = (): string => {
        console.log(`${this.x},${this.y},${this.d}`)
        return `${this.x},${this.y},${this.d}`
    }
}