function NBAplayer (name, team, position) {
    this.name = name;
    this.team = team;
    this.position = position;
}

let curry = new NBAplayer("Stephen Curry", "GS Warriors","Point Guard");

curry.__proto__

NBAplayer.prototype

NBAplayer.prototype.dunk = function() {
    console.log('${this.name} dunks!');
}

curry.dunk();

curry

NBAplayer.prototype

curry.__proto__

curry.dunk();