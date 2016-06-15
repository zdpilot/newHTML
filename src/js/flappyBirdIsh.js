/**
 * Created by patrickkesler on 6/13/16.
 */
var dragon;
var crystals;
var currentState;

var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};




function windowSetup() {
    //Retrieve the width and height of the window
    width = window.innerWidth;
    height = window.innerHeight;

    //Set the width and height if we are on a display with a width > 500px (eg. a desktop or tablet environment).
    var inputEvent = "touchStart";
    if(width >= 500){
        width = 400;
        height = 600;
        inputEvent = "mousedown";
    }

    //document.addEventListener(inputEvent, onpress)
}

function canvasSetup() {

    canvas = document.createElement("canvas");
    canvas.style.border = "15px solid black";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    //initiate graphics and an ok button

    var img = new Image();
    img.src="img/gameSprite.png";  //sprite image
    img.onload = function () {
        initSprites(this);
        renderingContext.fillStyle = backgroundSprite.color;
        renderingContext.fillRect(0, 0, width, height);
        backgroundSprite.draw(renderingContext, 0, height - backgroundSprite.height);
        backgroundSprite.draw(renderingContext, backgroundSprite.width, height - backgroundSprite.height);

        dragonSprite[0].draw(renderingContext, 100, 150, 142, 50);

        /*okButton = {
            x: (width - okButtonSprite.width) / 2,
            y: height - 200,
            width: okButtonSprite.width,
            height: okButtonSprite.height
        };  */
        //gameLoop();
    };
}

function dragon () {
    this.x = 140;
    this.y = 0;
    //this.draw = function (renderingContext);
}




function gameLoop() {

}

/*function onpress(evt) {
    switch (currentState){

        case states.Splash;
            currentState
    }
}*/

function main() {
    windowSetup();
    canvasSetup();

    currentState = states.Splash; //Game begins at the splash screen.

    document.body.appendChild(canvas); //Append the canvas we've created to the body element in our HTML document.

    dragon = new dragon();

    //crystals = new crystals();

    loadGraphics()
}
