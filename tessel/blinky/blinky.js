var tessel = require('tessel');

var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

console.log("I'm blinking! (Press CTRL + C to stop)");

setInterval(function () {
    // Toggle the led states
    led1.toggle();
    led2.toggle();
}, 100);