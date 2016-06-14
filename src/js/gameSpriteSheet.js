/**
 * Created by patrickkesler on 6/13/16.
 */
var dragonSprite;
var backgroundSprite;

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
        new Sprite(img, 176, 115, 42, 28),
        new Sprite(img, 176, 144, 45, 45),
        new Sprite(img, 176, 172, 45, 45)
    ];

    backgroundSprite = new Sprite(img, 0, 0, 138, 114);
    backgroundSprite.color = "#8BE4FD"
}
