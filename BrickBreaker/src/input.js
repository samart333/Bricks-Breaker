class InputHandler {
    constructor(paddle){
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case 37:
                    paddle.moveLeft()
                    break;
            
                case 39:
                paddle.moveRigth()
                    break;
            }
        })

        document.addEventListener("keyup", e => {
            switch (e.keyCode) {
                case 37:
                    if (paddle.currentSpeed < 0) {
                        paddle.stop()
                    }
                    break;
            
                case 39:
                    if (paddle.currentSpeed > 0) {
                        paddle.stop()
                    }
                    break;
            }
        })
    }
}