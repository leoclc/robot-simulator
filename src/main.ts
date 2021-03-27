const dotenv = require('dotenv');
dotenv.config()

import { InitialCoordinates, Robot } from './lib/robot';
import { getFileLines, extractInitialCoordinates } from './lib/reader';

// Path to the file with the commands
const filePath = process.env.PATH_TO_FILE || 'src/files/example1.txt'
console.log('Processing commands from file: ', filePath)
const fileContentLines = getFileLines(filePath)
const coordinates: InitialCoordinates = extractInitialCoordinates(fileContentLines[0])

const robot = new Robot(coordinates)
robot.processCommands(fileContentLines)