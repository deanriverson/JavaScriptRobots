var five = require("johnny-five");

five.Board().on("ready", function() {
    var pan, tilt, joystick;

    // Pan & tilt servos
    pan = new five.Servo(9);
    tilt = new five.Servo(10);

    // Joystick controller
    joystick = new five.Joystick({
        pins: [ 'A0', 'A1' ]
    })

    // Center all servos
    five.Servos.center();

    joystick.on('change', function() {
        tilt.move(Math.ceil(180 * this.fixed.y));
        pan.move(Math.ceil(180 * this.fixed.x));
    })
});