class  Pokemon {
    constructor(game, position){
        this.game = game
        this.gameWidth = game.gameWidth
        this.gameHeigth = game.gameHeigth
        this.image = document.querySelector("#pokemon")
        this.position = position
        this.width = 92
        this.height = 90
        this.markedForDeletion = false
    }

    update(){
        // console.log(detectCollision(this, this.game.paddle))
        // console.log(this)
        // console.log(this.game.ball..y)

        if (detectCollision(this.game.ball, this)) {

            this.game.ball.currentSpeed.y = -this.game.ball.currentSpeed.y;
            let scoreDisplay = document.querySelector("#score")
            this.game.score++

            scoreDisplay.innerHTML = "Score:" + this.game.score
            if(this.game.score === 15){
                alert("you won")
                this.reset()
                
            }
            console.log(this.game.score)
            this.markedForDeletion = true

        }
    }

    draw(context){
        context.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    reset() {
        this.position = { x: 10, y: 400 };
        this.currentSpeed = { x: 5, y: 5 };
        this.game.life = 10
        this.game.score = 0
        this.game.start()
      }
}