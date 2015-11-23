var five = require('johnny-five');

five.Board().on("ready", function() {
    this.repl.inject({
        // min(), max(), sweep(), stop(), center(), to()
        servo: five.Servo(10)
    });
});
