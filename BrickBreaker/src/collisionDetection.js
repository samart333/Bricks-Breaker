
function detectCollision(ball, gameObject){
    // console.log(gameObject)

    // console.log(ball)
    // console.log(gameObject)
    //paddle collision
    let bottomOfTheBall = ball.position.y + ball.size

    let topOfTheBall = ball.position.y


    let topOfObject = gameObject.position.y
    let leftSideOfObject = gameObject.position.x
    let rigthSideOfObject = gameObject.position.x + gameObject.width

    let bottomOfObject = gameObject.position.y + gameObject.height


    if(
        bottomOfTheBall >= topOfObject &&
        topOfTheBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.size <= rigthSideOfObject)
    {
        return true
    }else{
        return false
    }

//     let bottomOfBall = ball.position.y + ball.size;
//   let topOfBall = ball.position.y;

//   let topOfObject = gameObject.position.y;
//   let leftSideOfObject = gameObject.position.x;
//   let rightSideOfObject = gameObject.position.x + gameObject.width;
//   let bottomOfObject = gameObject.position.y + gameObject.height;

//   if (
//     bottomOfBall >= topOfObject &&
//     topOfBall <= bottomOfObject &&
//     ball.position.x >= leftSideOfObject &&
//     ball.position.x + ball.size <= rightSideOfObject
//   ) {
//     return true;
//   } else {
//     return false;
//   }

}

