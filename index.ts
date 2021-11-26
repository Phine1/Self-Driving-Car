import getObstacleEvents  from './computer-vision';

// Interfaces and types

interface AutonomousCar {
  isRunning?: boolean,
  respond:(events:Events) => void
}

interface AutonomousCarProps {
  isRunning?: boolean,
  steeringControl: Steering
}

interface Events {
  [obstacles:string]:boolean
}

interface Control {
  execute:(command: string)=>void
}

interface Steering extends Control {
turn:(direction: string) =>void
}

// Classes for the Program

class Car implements AutonomousCar {
isRunning;
steeringControl;
constructor(props:AutonomousCarProps) {
this.isRunning = props.isRunning;
this.steeringControl = props.steeringControl;
}
respond(events:Events) {
  if (this.isRunning === false) {
   return console.log('The Car is packed and not running.')
  }
  Object.keys(events).forEach(eventKey => {
    if (events.eventKey === false) {
      return;
    }
    if (eventKey === 'ObstacleLeft') {
     this.steeringControl.turn('right');
    }
    if (eventKey === 'ObstacleRight') {
      this.steeringControl.turn('left')
    }
  })
}
}

class SteeringControl implements Steering {

execute(command:string) {
 console.log(`Executing: ${command}`)
  }
turn(direction: string) {
this.execute(`turn ${direction}`)
  }
}


// Testing the program

const steering = new SteeringControl();
steering.turn('left');

const autonomousCar = new Car({isRunning: true, steeringControl: steering})
autonomousCar.respond(getObstacleEvents())




