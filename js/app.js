class Enemy {
    constructor(x,y,speed){
        //apply x,y,speed for every instant new obj
        Object.assign(this,{x,y,speed}); 
        this.sprite = 'images/enemy-bug.png';    
    }

    update(dt){
            //ensure speed the same in all PC 
        this.x <= 500 ? this.x += this.speed * dt : this.x = 0 ;
            // Reset Player On Clloision   
        const valdiateColliosion = (
            player.x < this.x + 80 && 
            player.x + 80 > this.x && 
            player.y < this.y + 60 &&
            60 + player.y > this.y
         )
        if (valdiateColliosion) { player.onClliosion() };
   
    }

    // Draw the enemy on the screen, required method for game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    constructor(x,y){
        Object.assign(this,{x,y})
        this.sprite = 'images/char-cat-girl.png';
    }
    update(){
        return this.y
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
    handleInput(keyCode){

        switch(keyCode) {
            case "up":
                if(this.y > 0) {
                    this.y -= 83.3;
                    
                }
                if(this.y < 0){
                    player.onReachWater()
                }
            break;
            case "down":
                if(this.y < 400) {
                    this.y += 83.3;
                }
            break;
            case "right":
                if(this.x < 400 ) {
                    this.x += 100;
                }
            break;
            case "left":
                if(this.x > 0) {
                    this.x -= 100;
                }
            break;
        }

    }
    onClliosion(){
    // Back to start point
    this.x = 200;
    this.y = 400;

    }
    onReachWater(){
        this.x = 200;
        this.y = 400;
    }

}

//RS[random Speed]
const RS = (s)=> Math.floor(Math.random() * s + 40);

// Place all enemy objects in an array called allEnemies
const allEnemies = [];

// instantiate Enemys.
allEnemies.push(new Enemy(-100, 60,RS(70)))
allEnemies.push(new Enemy(-100,145,RS(90)))
allEnemies.push(new Enemy(-100,145,RS(40)))
allEnemies.push(new Enemy(-100,230,RS(44)))
allEnemies.push(new Enemy(-100,230,RS(54)))

// Place the player object in a variable called player
const player = new Player(200,400)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});