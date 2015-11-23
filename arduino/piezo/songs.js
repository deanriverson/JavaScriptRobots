var five = require("johnny-five");
var songs = require("j5-songs")

five.Board().on("ready", function() {
    var piezo = new five.Piezo(3);

    this.repl.inject({
        song: piezo,
        beet: songs.load('beethovens-fifth'),
        starwars: songs.load('starwars-theme'),
        mario: songs.load('mario-intro')
    });
});
