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
createPlatform(243,654,140,32)
createPlatform(600,550,122,17)
createPlatform(365,468,42,12)
createPlatform(265,380,19,3)
createPlatform(500,342,19,3)
createPlatform(500,342,19,3)
createPlatform(500,342,19,3)
createPlatform(710,382,42,7)
createPlatform(782,250,70,3)
createPlatform(952,342,50,15)
createPlatform(1100,652,140,32)
createPlatform(1267,525,142,17)
createPlatform(1152,412,42,12)
createPlatform(112,550,82,3)
createPlatform(122,420,19,3)
createPlatform(1300,350,122,17)
createPlatform(122,312,19,3)
    // TODO 3 - Create Collectables
createCollectable('steve',110,250)
createCollectable('grace',1330,250)
createCollectable('diamond',800,205)
    // TODO 4 - Create Cannons
createCannon("right",530,721)
createCannon("top",200,589,)
createCannon("bottom",750,700)
createCannon("right",380,1000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
