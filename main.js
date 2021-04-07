//Task #0

const Scorpion = {
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["fists", "harpoon", "fireball"],
    attack: function () {
        console.log('%c%s', 'color: red; font: 1.3em Tahoma;', this.name + " Fight...");
    },
};
const SubZero = {
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["fists", "sword", "iceball"],
    attack: function () {
        console.log('%c%s', 'color: blue; font: 1.3em Tahoma;', this.name + " Fight...");
    },
};


// Task #1,2,3


function createPlayer (playerClassName, playerID) {
    const $player = document.createElement("div");

    $player.className = playerClassName;
    
    $player.innerHTML = `<div class="progressbar"><div class="life" style="width: ${playerID.hp}%"></div><div class="name">${playerID.name}</div></div><div class="character"><img src="${playerID.img}" /></div>`;

    document.querySelector(".arenas").appendChild($player);
}


createPlayer('player1', Scorpion);
createPlayer('player2', SubZero);
