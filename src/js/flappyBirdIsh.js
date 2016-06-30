/**
 * Created by patrickkesler on 6/13/16.
 */
var dragon;
var crystals;
var currentState;
var renderingContext;
var frames = 0;

var playButton = 0;

var foregroundPosition = 0;
var backgroundPosition = 0;
var currentScore = 0;
var myscore = 0;
var HighScore = 0;

var states = {
    Splash: 0,
    Game: 1,
    Score: 2,
    ChooseDragon: 3
};


function windowSetup() {
    //Retrieve the width and height of the window
    width = window.innerWidth;
    height = window.innerHeight;

    //Set the width and height if we are on a display with a width > 500px (eg. a desktop or tablet environment).
    var inputEvent = "touchStart";
    if (width >= 500) {
        width = 600;
        height = 570;
        inputEvent = "mousedown";
    }

    document.addEventListener(inputEvent, onpress)
}

function canvasSetup() {

    canvas = document.createElement("canvas");
    canvas.style.border = "10px solid black";
    canvas.style.margin = "0 auto";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    //initiate graphics and an ok button

    var img = new Image();
    img.src = "img/perfectGameSprite.png";  //sprite image
    img.onload = function () {
        initSprites(this);
        renderingContext.fillStyle = backgroundSprite.color;
        //renderingContext.fillRect(0, 0, width, height);
        //backgroundSprite.draw(renderingContext, 0, 0);

       // blackDragonSprite[0].draw(renderingContext, 225, 250, 142, 50);

        playButton = {
            x: (width = playButtonSprite.width),
            y: height - 200,
            width: playButtonSprite.width,
            height: playButtonSprite.height
        };

        gameLoop();
    };
}

function Dragon() {
    this.x = 295;
    this.y = 245;

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
            this.updateIdleDragon();
        } else {
            this.updatePlayingDragon();
        }
    };

    this.updateIdleDragon = function () {
        this.y = height = 245 + 5 * Math.cos(frames / 10);
        this.rotation = 0;
    };


    this.updatePlayingDragon = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Changes the position of the dragon between the states.
        if (currentState === states.Game) {
            for(i = 295; i >= 165; i--)
            this.x = i;
        }

        // Change to the score state when dragon touches the ground
        if (this.y >= 650) {
            this.y = 650;



            if (currentState === states.Game) {
                currentState = states.Score;
            }

            this.velocity = this._jump; // Set velocity to jump speed for correct rotation
        }

        // If our player hits the top of the canvas, we crash him
        if (this.y <= 2) {
            currentState = states.Score;
        }

        // When dragon lacks upward momentum increment the rotation angle
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
        var playerSpriteChoice = document.getElementById('playerChoice').value;
        blackDragonSprite[n].draw(renderingContext, -blackDragonSprite[n].width / 2, -blackDragonSprite[n].height / 2);
            if (playerSpriteChoice === 'Green Dragon') {
                greenDragonSprite[n].draw(renderingContext, -greenDragonSprite[n].width / 2, -greenDragonSprite[n].height / 2);
            }
            else if (playerSpriteChoice === "Black Dragon") {
                blackDragonSprite[n].draw(renderingContext, -blackDragonSprite[n].width / 2, -blackDragonSprite[n].height / 2);
            }
            else if (playerSpriteChoice === "Blue Dragon") {
                blueDragonSprite[n].draw(renderingContext, -blueDragonSprite[n].width / 2, -blueDragonSprite[n].height / 2);
            }

        renderingContext.restore();
    };

}

function crystalCollection() {
    this._crystals = [];

    /**
     * Empty crystal array
     */
    this.reset = function () {
        this._crystals = [];
    };

    /**
     * Creates and adds a new Crystal to the game.
     */
    this.add = function () {
        this._crystals.push(new Crystal()); // Create and push crystal to array
    };

    /**
     * Update the position of existing crystal and add new crystal when necessary.
     */
    this.update = function () {
        if (frames % 100 === 0) { // Add a new crystal to the game every 100 frames.
            this.add();
        }

        for (var i = 0, len = this._crystals.length; i < len; i++) { // Iterate through the array of crystals and update each.
            var crystal = this._crystals[i]; // The current crystal.

            if (i === 0) { // If this is the leftmost crystal, it is the only crystal that the dragon can collide with . . .
                crystal.detectCollision(); // . . . so, determine if the dragon has collided with this leftmost crystal.
                crystal.score();
            }

            crystal.x -= 2; // Each frame, move each crystal two pixels to the left. Higher/lower values change the movement speed.

            var crystalUpDown = 0;
            if(crystalUpDown == 75){
                crystal.y -= 2;
                crystalUpDown--;
                if(crystalUpDown == 0){
                    crystal.y += 2;
                    crystalUpDown++;
                }
            }
           // crystal.y -= 2;


            if (crystal.x < -crystal.width) { // If the crystal has moved off screen . . .
                this._crystals.splice(0, 1); // . . . remove it.
                i--;
                len--;
            }
        }
    };

    this.numberOfCrystals = function () {
        return this._crystals.length
    };
    /**
     * Draw all crystals to canvas context.
     */
    this.draw = function () {
        for (var i = 0, len = this._crystals.length; i < len; i++) {
            var crystal = this._crystals[i];
            crystal.draw();
        }
    };
}

function Crystal() {
    this.x = 600;
    this.y = height - (bottomCrystalSprite.height + foregroundSprite.height - 120 + 200 * Math.random());
    this.width = bottomCrystalSprite.width;
    this.height = bottomCrystalSprite.height;
    this.scored = false;

    /**
     * Determines if the dragon has collided with the Crystal.
     * Calculates x/y difference and use normal vector length calculation to determine
     */
    this.detectCollision = function () {
        // intersection
        var cx = Math.min(Math.max(dragon.x, this.x), this.x + this.width);
        var cy1 = Math.min(Math.max(dragon.y, this.y), this.y + this.height);
        var cy2 = Math.min(Math.max(dragon.y, this.y + this.height + 110), this.y + 2 * this.height + 80);
        // Closest difference
        var dx = dragon.x - cx;
        var dy1 = dragon.y - cy1;
        var dy2 = dragon.y - cy2;
        // Vector length
        var d1 = dx * dx + dy1 * dy1;
        var d2 = dx * dx + dy2 * dy2;
        var r = dragon.radius * dragon.radius;
        // Determine intersection
        if (r > d1 || r > d2) {
            currentState = states.Score;
        }

    };

    this.draw = function () {
        bottomCrystalSprite.draw(renderingContext, this.x, this.y);
        topCrystalSprite.draw(renderingContext, this.x, this.y + 110 + this.height);
    };
    this.score = function () {
        if(this.x + this.width < dragon.x && !this.scored) {
            updateScore();
            this.scored = true;
        }

    }
}

function gameLoop() {
    update();
    render();
    /*if (frames % 50 == 0 && currentState === states.Game) {
        score();
    }*/
    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames++;

    if (currentState !== states.Score) {

        foregroundPosition = (foregroundPosition - 3) % 1419; // Moves left 2 pixels each frame. Wrap every 999px.
        backgroundPosition = (backgroundPosition - .5) % 1595;

    }
    if (currentState === states.Game) {
        crystals.update();
    }

    dragon.update();
}

function render() {
    renderingContext.fillRect(0, 0, width, height);

    backgroundSprite.draw(renderingContext, backgroundPosition, 0);
    backgroundSprite.draw(renderingContext, backgroundPosition + backgroundSprite.width, 0);

    crystals.draw(renderingContext);

    dragon.draw(renderingContext);

    foregroundSprite.draw(renderingContext, foregroundPosition, 498);
    foregroundSprite.draw(renderingContext, foregroundPosition + (foregroundSprite.width - 10), 498);


    if (currentState === states.Splash) {
        playButtonSprite.draw(renderingContext, 195, 350);
    }

    if (currentState === states.Score) {
        playButtonSprite.draw(renderingContext, 195, 350);
        checkCookie();
    }

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
            if (playButton.x < mouseX && mouseX < playButton.x + playButton.width &&
             playButton.y < mouseY && mouseY < playButton.y + playButton.height) {
             crystals.reset();
             currentState = states.Splash;
             myscore = 0;
             }


            break;
    }
}

function updateScore() {
    myscore++;

    $("#currentScoreText").html("Current Score: " + myscore);
}

function main() {
    windowSetup();
    canvasSetup();

    currentState = states.Splash; //Game begins at the splash screen.

    document.body.appendChild(canvas); //Append the canvas we've created to the body element in our HTML document.

    dragon = new Dragon();

    crystals = new crystalCollection();

    loadGraphics();

    checkCookie();

}

function setCookie(cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "HighScore" + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookie() {
    var HighScore=getCookie("HighScore");

    if (HighScore!="") {
        if(myscore > HighScore) {
            HighScore = myscore;
        }
        setCookie(HighScore);
        document.getElementById("highScoreText").innerHTML = "High Score: " + HighScore;
    } else {
         {
            setCookie(0);
             document.getElementById("highScoreText").innerHTML = "High Score: " + HighScore;
        }
    }
}
