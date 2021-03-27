import fs from 'fs'
import { InitialCoordinates, Direction } from './robot';

export function readFileSync(filePath: string): string {
  return fs.readFileSync(filePath, { encoding: 'utf-8' })
}

export function getFileLines(filePath: string): string[] {
  return fs.readFileSync(filePath, { encoding: 'utf-8' }).split('\n')
}

export function extractInitialCoordinates(firstLine: string): InitialCoordinates {
  if (!firstLine) {
    throw new Error('Line to extract coordinates cannot be empty')
  }
  if (!firstLine.includes('PLACE')) {
    throw new Error('Initial commands must come from a PLACE command')
  }
  const coordinates = firstLine.trim().replace('PLACE', '').split(',')
  if (coordinates.length < 3) {
    throw new Error(`Missing ${3 - coordinates.length} coordinate(s) inputs`)
  }
  if (coordinates[2] !== 'NORTH' && coordinates[2] !== 'SOUTH' && coordinates[2] !== 'EAST' && coordinates[2] !== 'WEST') {
    throw new Error(`Direction ${coordinates[2]} is not a valid direction, please pass one of the following: 'NORTH','SOUTH', 'EAST', 'WEST'`)
  }
  return {
    x: Number(coordinates[0]),
    y: Number(coordinates[1]),
    d: coordinates[2] as Direction
  }
}
