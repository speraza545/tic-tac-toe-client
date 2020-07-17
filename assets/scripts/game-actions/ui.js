const store = require('../store')
const app = require('../app')


const newGameSuccess = function(response){
  store.game = response.game
  store.player = "O"
  store.game.over = false
  $('#message').text('Game Started')
  $('#topLeft').empty()
  $('#topRight').empty()
  $('#topMiddle').empty()
  $('#middleLeft').empty()
  $('#middleRight').empty()
  $('#middleMiddle').empty()
  $('#bottomLeft').empty()
  $('#bottomRight').empty()
  $('#bottomMiddle').empty()
}

const newGameFailure = function(){
  $('#message').text('Game Not Started')
}

const topLeftSuccess = function(response){
  store.game.cells[0] = response.game.cells[0]
    $('#topLeft').text(response.game.cells[0])
      let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          store.game.over = true
          $("#message").text("O wins")
        }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
          || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
          || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
          || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
          || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
          || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
          || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
          || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
          ){
            store.game.over = true
            $("#message").text("It's a tie!")
        }
      }



const topLeftFailure = function(error){
  $('#message').text("Invalid Move")
}

const topMiddleSuccess = function(response){
  store.game.cells[1] = response.game.cells[1]
  $('#topMiddle').text(response.game.cells[1])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}
const topMiddleFailure = function(error){
  $('#message').text("Invalid Move")

}

const topRightSuccess = function(response){
  store.game.cells[2] = response.game.cells[2]
  $('#topRight').text(response.game.cells[2])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}
const topRightFailure = function(error){
  $('#message').text("Invalid Move")
}


const middleLeftSuccess = function(response){
  store.game.cells[3] = response.game.cells[3]
  $('#middleLeft').text(response.game.cells[3])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}

const middleLeftFailure = function(error){
  $('#message').text("Invalid Move")
}


const middleMiddleSuccess = function(response){
  store.game.cells[4] = response.game.cells[4]
  $('#middleMiddle').text(response.game.cells[4])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}
const middleMiddleFailure = function(error){
  $('#message').text("Invalid Move")
}


const middleRightSuccess = function(response){
  store.game.cells[5] = response.game.cells[5]
  $('#middleRight').text(response.game.cells[5])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}
const middleRightFailure = function(error){
  $('#message').text("Invalid Move")
}

const bottomLeftSuccess = function(response){
  store.game.cells[6] = response.game.cells[6]
  $('#bottomLeft').text(response.game.cells[6])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}
const bottomLeftFailure = function(error){
  $('#message').text("Invalid Move")
}

const bottomMiddleSuccess = function(response){
  store.game.cells[7] = response.game.cells[7]
  $('#bottomMiddle').text(response.game.cells[7])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}
const bottomMiddleFailure = function(error){
  $('#message').text("Invalid Move")
}

const bottomRightSuccess = function(response){
  store.game.cells[8] = response.game.cells[8]
  $('#bottomRight').text(response.game.cells[8])
  let cells = store.game.cells
  if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
  || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
  || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
  || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
  || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
  || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
  || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
    ){
      store.game.over = true
      $("#message").text("X wins")
    }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
      || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
      || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
      || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
      || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
      || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
      || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
      ){
      store.game.over = true
      $("#message").text("O wins")
    }else if ((cells[0] === "O" || "X" && cells[1] === "O" || "X" && cells[2] === "O" || "X")
      || (cells[3] === "O" || "X" && cells[4] === "O" || "X" && cells[5] === "O" || "X")
      || (cells[6] === "O" || "X" && cells[7] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[3] === "O" || "X" && cells[6] === "O" || "X")
      || (cells[1] === "O" || "X" && cells[4] === "O" || "X" && cells[7] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[5] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[0] === "O" || "X" && cells[4] === "O" || "X" && cells[8] === "O" || "X")
      || (cells[2] === "O" || "X" && cells[4] === "O" || "X" && cells[6] === "O" || "X")
      ){
        store.game.over = true
        $("#message").text("It's a tie!")
    }
}
const bottomRightFailure = function(error){
  $('#message').text("Invalid Move")
}

module.exports = {
  topLeftSuccess,
  topLeftFailure,
  topMiddleSuccess,
  topMiddleFailure,
  topRightSuccess,
  topRightFailure,
  middleLeftSuccess,
  middleLeftFailure,
  middleMiddleSuccess,
  middleMiddleFailure,
  middleRightSuccess,
  middleRightFailure,
  bottomLeftSuccess,
  bottomLeftFailure,
  bottomMiddleSuccess,
  bottomMiddleFailure,
  bottomRightSuccess,
  bottomRightFailure,
  newGameSuccess,
  newGameFailure
}
