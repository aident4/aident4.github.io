$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 700, 100, 10, "black")
    createPlatform(600, 598, 100, 10, "black")
    createPlatform(300, 500, 100, 10, "black")
    createPlatform(600, 400, 100, 10, "black")
    createPlatform(800, 300, 100, 10, "black")
    createPlatform(1100, 200, 100, 10, "black")


    // TODO 3 - Create Collectables
    createCollectable("oreo", 300, 400, 0, 0)
    createCollectable("oreo", 800, 200, 0, 0)
    createCollectable("oreo", 1300, 700, 0, 0)


    
    // TODO 4 - Create Cannons
    createCannon("top", 550, 950)
    createCannon("top", 850, 600)
    createCannon("top", 1375, 720)
    createCannon("right", 800, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
