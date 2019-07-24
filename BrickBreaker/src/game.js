class Game {
    constructor(gameW, gameH){
        this.gameWidth = gameW
        this.gameHeigth = gameH
        this.life = 10
        this.score = 0
    }

    start(){

        this.paddle = new Paddle(this)
        this.ball = new Ball(this)
        // let pokemon = new Pokemon(this, { x: 20, y: 20 })

        let pokemons = buildLevel(this, level1)

        // for (let index = 0; index < 10; index++) {
        //     pokemons.push(new Pokemon(this, { x: index * 90, y: 20 }))
            
        // }

        new InputHandler(this.paddle)

        this.gameObjects = [ this.ball, this.paddle, ...pokemons ]
    }

    draw(context){
        this.gameObjects.forEach(object => {
            object.draw(context)
        });
    }

    update(deltaTime){
        this.gameObjects.forEach(object => {
            object.update(deltaTime)
        });

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)
        // console.log(this.gameObjects.paddle)
        // if(this.gameObjects.pokemons.lenght === 0){
        //     alert("you won")
        // }
    }

    



}
