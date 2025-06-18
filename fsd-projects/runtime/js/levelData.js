var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 25, image: "img/spikes.png", scale: 0.15},
          { type: "sawblade", x: 700, y: groundY - 125, damage: 25, image: "img/spikes.png", scale: 0.15},
          { type: "sawblade", x: 1000, y: groundY - 125, damage: 25, image: "img/spikes.png", scale: 0.15},
          { type: "sawblade", x: 1300, y: groundY - 125, damage: 25, image: "img/spikes.png", scale: 0.15},
          { type: "enemy", x: 550, y: groundY - 50, speed: -2, image: "img/JoshKerr.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "enemy", x: 850, y: groundY - 50, speed: -2, image: "img/JoshKerr.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "enemy", x: 1150, y: groundY - 50, speed: -2, image: "img/JoshKerr.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "enemy", x: 1450, y: groundY - 50, speed: -2, image: "img/JoshKerr.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "reward", x: 550, y: groundY -100, speed: -2, image: "img/GoldMedal.png", offsetX: -45, offsetY: -35, scale: 0.05},
          { type: "reward", x: 850, y: groundY -100, speed: -2, image: "img/GoldMedal.png", offsetX: -45, offsetY: -35, scale: 0.05},
          { type: "reward", x: 1150, y: groundY -100, speed: -2, image: "img/GoldMedal.png", offsetX: -45, offsetY: -35, scale: 0.05},
          { type: "marker", x: 1600, y: groundY - 75, speed: -2, image: "img/steeple.png", offsetX: -60, offsetY: -30, scale: 0.5}
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 25, image: "img/spikes2.png", scale: 0.15},
          { type: "sawblade", x: 700, y: groundY - 125, damage: 25, image: "img/spikes2.png", scale: 0.15},
          { type: "sawblade", x: 1000, y: groundY - 125, damage: 25, image: "img/spikes2.png", scale: 0.15},
          { type: "sawblade", x: 1300, y: groundY - 125, damage: 25, image: "img/spikes2.png", scale: 0.15},
          { type: "enemy", x: 550, y: groundY - 50, speed: -2, image: "img/JakeW.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "enemy", x: 850, y: groundY - 50, speed: -2, image: "img/JakeW.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "enemy", x: 1150, y: groundY - 50, speed: -2, image: "img/JakeW.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "enemy", x: 1450, y: groundY - 50, speed: -2, image: "img/JakeW.png", offsetX: -90, offsetY: -50, scale: 0.25},
          { type: "reward", x: 550, y: groundY -100, speed: -2, image: "img/medal2.png", offsetX: -25, offsetY: -50, scale: 0.1},
          { type: "reward", x: 850, y: groundY -100, speed: -2, image: "img/medal2.png", offsetX: -25, offsetY: -50, scale: 0.1},
          { type: "reward", x: 1150, y: groundY -100, speed: -2, image: "img/medal2.png", offsetX: -25, offsetY: -50, scale: 0.1},
          { type: "marker", x: 1600, y: groundY - 75, speed: -2, image: "img/finish.png", offsetX: -60, offsetY: -30, scale: 0.5}
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
