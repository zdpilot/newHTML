/**
 * Created by patrickkesler on 6/13/16.
 */
var dragon;
var crystals;
var currentState;
var renderingContext;
var frames = 0;

var foregroundPosition = 0;

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
        width = 600;
        height = 572;
        inputEvent = "mousedown";
    }

    document.addEventListener(inputEvent, onpress)
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
        //renderingContext.fillRect(0, 0, width, height);
        //backgroundSprite.draw(renderingContext, 0, 0);

        //dragonSprite[0].draw(renderingContext, 225, 250, 142, 50);

        /*okButton = {
            x: (width - okButtonSprite.width) / 2,
            y: height - 200,
            width: okButtonSprite.width,
            height: okButtonSprite.height
        };  */
        gameLoop();
    };
}

function Dragon() {
    this.x = 280;
    this.y = 245;
    //this.draw = function (renderingContext);

    this.frame = 0;
    this.velocity = 0;
    this.animation = [0, 1, 2, 1];

    this.rotation = 0;
    this.radius = 12;

    this.gravity = 0.25;
    this._jump = 4.6;

    this.jump = function () {
        this.velocity = -this._jump;
    };

    this.update = function () {
      var n = currentState === states.Splash ? 10 : 5;
        this.frame += frames % n === 0 ? 1 : 0;
        this.frame %= this.animation.length;

        if (currentState === states.Splash) {
            //this.updateIdleDragon();
        }   else {
            this.updatePlayingDragon();
        }
    };

    this.updateIdleDragon = function () {
        this.y = height = 280 + 5 * Math.cos(frames / 10);
        this.rotation = 0;
    };


    this.updatePlayingDragon = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Change to the score state when fish touches the ground
        if (this.y >= 450) {
            this.y = 450;

            if (currentState === states.Game) {
                currentState = states.Score;
            }

            this.velocity = this._jump; // Set velocity to jump speed for correct rotation
        }

        // If our player hits the top of the canvas, we crash him
        if (this.y <= 2) {
            currentState = states.Score;
        }

        // When fish lacks upward momentum increment the rotation angle
        if (this.velocity >= this._jump) {
            this.frame = 1;
            this.rotation = Math.min(Math.PI / 2, this.rotation + 0.3);
        } else {
            this.rotation = -0.3;
        }
    };

    this.draw = function (renderingContext) {
        renderingContext.save();

        renderingContext.translate(this.x, this.y);
        renderingContext.rotate(this.rotation);

        var n = this.animation[this.frame];
        dragonSprite[n].draw(renderingContext, -dragonSprite[n].width / 2, -dragonSprite[n].height / 2);

        renderingContext.restore();
    };

}




function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames ++;

    /*if(currentState !== states.Score) {
        foregroundPosition = (foregroundPosition - 2) % 14; // Moves left 2 pixels each frame. Wrap every 14px.
    }
    if (currentState === states.Game) {
        crystals.update();
    }*/

    dragon.update();
}

function render() {
    renderingContext.fillRect(0, 0, width, height);

    backgroundSprite.draw(renderingContext, 0, 0);

    //crystals.draw(renderingContext);
    dragon.draw(renderingContext);

    /*if (currentState === states.Score) {
        okButtonSprite.draw(renderingContext, okButton.x, okButton.y);
    }*/

    //draw foreground sprites
    //foregroundSprite.draw(renderingContext, foregroundPosition, height - foregroundSprite.height);
    foregroundSprite.draw(renderingContext, 0, 500);


}

function onpress(evt) {
    switch (currentState) {

        case states.Splash: // Start the game and update the dragon velocity.
            currentState = states.Game;
            dragon.jump();
            break;

        case states.Game: // The game is in progress. Update dragon velocity.
            dragon.jump();
            break;

        case states.Score: // Change from score to splash state if event within okButton bounding box
            // Get event position
            var mouseX = evt.offsetX, mouseY = evt.offsetY;

            if (mouseX == null || mouseY == null) {
                mouseX = evt.touches[0].clientX;
                mouseY = evt.touches[0].clientY;
            }

            // Check if within the okButton
            if (okButton.x < mouseX && mouseX < okButton.x + okButton.width &&
                okButton.y < mouseY && mouseY < okButton.y + okButton.height
            ) {
                //console.log('click');
                corals.reset();
                currentState = states.Splash;
                score = 0;
            }
            break;
    }
}


function main() {
    windowSetup();
    canvasSetup();

    currentState = states.Splash; //Game begins at the splash screen.

    document.body.appendChild(canvas); //Append the canvas we've created to the body element in our HTML document.

    dragon = new Dragon();

    //crystals = new crystals();

    loadGraphics();
}
