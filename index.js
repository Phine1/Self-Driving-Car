"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
// Classes for the Program
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (this.isRunning === false) {
            return console.log('The Car is packed and not running.');
        }
        Object.keys(events).forEach(eventKey => {
            if (events.eventKey === false) {
                return;
            }
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            if (eventKey === 'ObstacleRight') {
                this.steeringControl.turn('left');
            }
        });
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
// Testing the program
const steering = new SteeringControl();
steering.turn('left');
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(computer_vision_1.default());
