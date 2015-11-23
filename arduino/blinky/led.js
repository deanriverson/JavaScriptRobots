var five = require('johnny-five');

five.Board().on("ready", function() {
    var led = five.Led(11);

    this.repl.inject({
        led: led
    });
});