# Robot Simulator

- This application is a simulation of a robot moving on a square table top, dimensions 6 x 6 units.
- There are no obstructions on the table surface.
- The robot is free to move across the table but must be prevented from falling to destruction, and movement that may lead to destruction must be prevented.

#### Commands

- `PLACE X,Y,D` — where X & Y are the coordinates where 0,0 is the north-west most corner and D is the direction `NORTH`, `SOUTH`, `EAST`, `WEST`.
- `MOVE` — will move the robot one unit forward in the specified direction
- `LEFT` and `RIGHT` — will rotate the robot 90º left or right respectively
- `REPORT` — will output the current position and direction of the robot


#### How to use

* `npm install`
* Change the .env file to point to the file with the commands you want to execute
* npm run start

#### Tests

The project uses jest to run the test cases

* `npm run test`
