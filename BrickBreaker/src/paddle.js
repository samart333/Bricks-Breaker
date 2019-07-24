

    class Paddle {
    constructor(game){
        this.gameWidth = game.gameWidth
        this.gameHeigth = game.gameHeigth
        this.width = 100
        this.height = 20
        this.maxSpeed = 7
        this.currentSpeed = 0
        this.position = {

            //this centers te rectangle in the x axis
            x: game.gameWidth / 2 - this.width / 2,
            //this positions the rectable in the bottom on the y axis
            y: game.gameHeigth - this.height - 10
        }
    }

    draw(context){
        context.fillStyle = "#8e44ad"
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime){
        this.position.x += this.currentSpeed
        if(this.position.x < 0) this.position.x = 0
        if(this.position.x + this.width > gameWidth) this.position.x = gameWidth - this.width
    }

    moveLeft(){
        this.currentSpeed = -this.maxSpeed
    }


    moveRigth(){
        this.currentSpeed = this.maxSpeed
    }

    stop(){
        this.currentSpeed = 0
    }
}

