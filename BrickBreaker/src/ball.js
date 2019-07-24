class Ball {
    constructor(game){
        this.game = game
        this.gameWidth = game.gameWidth
        this.gameHeigth = game.gameHeigth
        this.image = document.querySelector("#poke_ball")
        this.currentSpeed = { x:5, y: 5 }
        this.position = { x: 10, y: 10 }
        this.size = 30
    }

    draw(context){
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime){

        //updates the position of the ball
        this.position.x += this.currentSpeed.x
        this.position.y += this.currentSpeed.y


        var suma = this.position.y + this.size

        //Wall on rigth or left
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.currentSpeed.x = -this.currentSpeed.x
        }
      
        // wall on top
        if (this.position.y + this.size > this.gameHeigth || this.position.y < 0) {
            this.currentSpeed.y = -this.currentSpeed.y
        }
        // console.log(detectCollision(this, this.game.paddle))
        //bottom of the game
        if (this.position.y + this.size > 700 ) {
            let scoreDisplay = document.querySelector("#life")
            this.game.life--;
            scoreDisplay.innerHTML = "Life:" + this.game.life
            
            
            if(this.game.life === 0){
                alert("gameOver")
                this.reset()
            }
            if(this.game.score === 15){
                alert("You Won!!")
                this.reset()
            }
          }

        if (detectCollision(this, this.game.paddle)) {
            this.currentSpeed.y = -this.currentSpeed.y
            this.position.y = this.game.paddle.position.y - this.size
        }


    }

    reset() {
        this.position = { x: 10, y: 400 };
        this.currentSpeed = { x: 5, y: 5 };
        this.game.life = 10
        this.game.start()
      }
}