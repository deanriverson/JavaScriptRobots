var five = require('johnny-five');

five.Board().on("ready", function() {
    console.log("Board is ready!");

    var led = new five.Led(11);
    setInterval(toggleLed, 500);

    function toggleLed() {
        led.toggle();
    }
});

console.log("Waiting for board to be ready...");