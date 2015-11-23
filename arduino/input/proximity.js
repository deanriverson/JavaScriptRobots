var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 7
    });

    proximity.on("data", function() {
        console.log("Proximity: ");
        console.log("  cm  : ", this.cm);
        console.log("  in  : ", this.in);
        console.log("-----------------");
    });

    proximity.on("change", function() {
        console.log("The obstruction has moved.");
    });
});