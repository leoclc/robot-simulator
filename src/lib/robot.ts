

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

    constructor(coordinates: InitialCoordinates) {
        this.x = coordinates.x
        this.y = coordinates.y
        this.d = coordinates.d
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
                break
            }
            case 'EAST': {
                break
            }
            case 'SOUTH': {
                break
            }
            case 'WEST': {
                break
            }
            default: break
        }
    }

    turn = (side: Side): void => {
        switch (side) {
            case 'LEFT':
                console.log('Turning left')
                break;
            case 'RIGHT':
                console.log('Turning right')
                break;
            default:
                break;
        }
    }

    report = (): void => {
        console.log(`${this.x},${this.y},${this.d}`)
    }
}