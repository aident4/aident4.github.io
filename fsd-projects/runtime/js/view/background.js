var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var tree2;
        var tree3;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundImage = new Image();
                backgroundImage.src = "img/trackBackground.png";
                backgroundImage.onload = function() {
                var backgroundFill = new createjs.Bitmap(backgroundImage);              
                backgroundFill.scaleX = app.canvas.width / backgroundImage.width;
                backgroundFill.scaleY = groundY / backgroundImage.height;
                background.addChildAt(backgroundFill, 0);
            };    

            // TODO 2: - Add a moon and starfield
            /*var moon = draw.bitmap("img/moon.png");
            moon.x = canvasWidth-400;
            moon.y = canvasHeight-800;
            moon.scaleX = 1;
            moon.scaleY = 1;
            background.addChild(moon);

            for(var i = 0; i < 100; i++){
                var circle = draw.circle(4, "white", "LightGray", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }

            */
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            /*for (var i = 0; i < 5; ++i) {
                var buildingColors = ["lightblue", "white", "green", "orange", "red"];
                var buildingHeight = 500 * Math.random();
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
}*/
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/ncaaChamps.png");
            tree.x = 300;
            tree.y = groundY - 800;
            background.addChild(tree)

            tree2 = draw.bitmap("img/Orings.png");
            tree2.x = 1000;
            tree2.y = groundY - 800;
            background.addChild(tree2)

            tree3 = draw.bitmap("img/worldAthletics.png");
            tree3.x = 1700;
            tree3.y = groundY - 800;
            background.addChild(tree3)
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x -= 5
            if (tree.x < -200){
                tree.x = canvasWidth;
            }

            tree2.x -= 5
            if (tree2.x < -200){
                tree2.x = canvasWidth;
            }

            tree3.x -= 5
            if (tree3.x < -200){
                tree3.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for(var i = 0; i < buildings.length; i++){
                var building = buildings[i];
                building.x -= 1.5;
                if(building.x < -100){
                    building.x = canvasWidth + 100;
                }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
