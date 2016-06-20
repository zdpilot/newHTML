/**
 * Created by patrickkesler on 6/13/16.
 */
var dragonSprite;
var backgroundSprite;
var foregroundSprite;


function Sprite(img, x, y, width, height){
    this.img = img;
    this.x = x * 2;
    this.y = y * 2;
    this.width = width * 2;
    this.height = height * 2;
}

Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img) {
    dragonSprite = [
        new Sprite(img, 225, 443.5, 69, 37.5),
        new Sprite(img, 297, 443.5, 64, 31.5),
        new Sprite(img, 366, 424.5, 63, 50.5)
    ];

    dragonRiderSprite = [
        new Sprite(img, 225, 374, 67, 36),
        new Sprite(img, 295, 374, 67, 36),
        new Sprite(img, 364, 354, 65, 51),
        new Sprite(img, 364, 354, 65, 51)
    ];

    birdSprite = [
        new Sprite(img, 225, 374, 67, 36),
        new Sprite(img, 295, 374, 67, 36),
        new Sprite(img, 364, 354, 65, 51),
        new Sprite(img, 364, 354, 65, 51)
    ];

    playButtonSprite = [
        new Sprite(img, 104, 287, 96.5, 49.5)
    ];

    backgroundSprite = new Sprite(img, 0, 0, 799, 400);
    foregroundSprite = new Sprite(img, 0, 288, 799, 41.5);
    backgroundSprite.color = "#8BE4FD"
}
