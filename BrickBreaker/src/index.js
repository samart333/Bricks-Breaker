

let gameCanvas = document.querySelector("#gameCanvas")

//Gives a context so you can draw inside of the canvas
let context = gameCanvas.getContext("2d")



const gameWidth = 900
const gameHeight = 700

let game = new Game(gameWidth, gameHeight)
game.start()



// paddle.draw(context)

let lastTime = 0

function gameLoop(tStamp){
    //Clears everything on the screen
    let deltaTime = tStamp - lastTime
    lastTime = tStamp

    context.clearRect(0, 0, gameWidth, gameHeight)
    game.update(deltaTime)
    game.draw(context)





    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
    