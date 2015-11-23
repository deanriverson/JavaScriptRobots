var five = require('johnny-five');

five.Board().on("ready", function() {
    five.Led(11).blink(500);
});