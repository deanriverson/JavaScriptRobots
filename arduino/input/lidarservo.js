var five = require("johnny-five");
var songs = require("j5-songs")

var board = new five.Board();

board.on("ready", function() {
    var servo = five.Servo(10);

    var piezo = new five.Piezo(3),
        sw = songs.load('starwars-theme'),
        hasPlayed = false;

    var proximity = new five.Proximity({
        controller: "LIDARLITE"
    });

    servo.center();

    proximity.on("change", function() {
        if (this.cm < 20 && !hasPlayed) {
            piezo.play(sw);
            hasPlayed = true;
        }

        console.log(this.cm + "cm");
        servo.to(Math.min((this.cm - 15)*6, 180));
    });
});